<script lang="ts">
  import { supabase } from '$lib/supabaseClient';

  let name = $state('');
  let belt_rank = $state('White Belt');
  let belt_order = $state(6);
  let date_joined = $state('');
  let isSubmitting = $state(false);
  
  // New state variables for image handling
  let avatarFile: File | null = $state(null);
  let avatarPreview: string | null = $state(null);

  const beltOptions = [
    { rank: "Black Belt (Dan)", order: 1 },
    { rank: "Red Belt", order: 2 },
    { rank: "Blue Belt", order: 3 },
    { rank: "Green Belt", order: 4 },
    { rank: "Yellow Belt", order: 5 },
    { rank: "White Belt", order: 6 },
  ];

  function handleBeltChange() {
    const selected = beltOptions.find(b => b.rank === belt_rank);
    if (selected) belt_order = selected.order;
  }

  // Handle file selection and generate a local preview
  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      avatarFile = target.files[0];
      avatarPreview = URL.createObjectURL(avatarFile);
    }
  }

  async function addStudent(event: Event) {
    event.preventDefault();
    isSubmitting = true;

    let image_url = null;

    // 1. Upload the image to Supabase Storage (if a file was selected)
    if (avatarFile) {
      // Create a unique file name so images don't overwrite each other
      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('avatars')
        .upload(fileName, avatarFile);

      if (uploadError) {
        alert("Error uploading image: " + uploadError.message);
        isSubmitting = false;
        return;
      }

      // 2. Get the public URL for the uploaded image
      const { data } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);
        
      image_url = data.publicUrl;
    }

    // 3. Insert the student record into the database with the new image_url
    const { error } = await supabase
      .from('students')
      .insert([
        { name, belt_rank, belt_order, date_joined, image_url }
      ]);

    if (error) {
      alert("Error adding student: " + error.message);
    } else {
      alert("Student added successfully!");
      // Reset form
      name = '';
      date_joined = '';
      avatarFile = null;
      avatarPreview = null;
    }
    
    isSubmitting = false;
  }
</script>

<div class="max-w-2xl mx-auto py-20 px-4">
  <h1 class="text-3xl font-bold font-heading text-secondary mb-8">Add New Student</h1>

  <form onsubmit={addStudent} class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-6">
    
    <div class="flex flex-col items-center sm:flex-row gap-6 p-4 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50">
      <div class="w-24 h-24 shrink-0 rounded-full border-2 border-gray-200 bg-white overflow-hidden shadow-sm flex items-center justify-center">
        {#if avatarPreview}
          <img src={avatarPreview} alt="Preview" class="w-full h-full object-cover" />
        {:else}
          <span class="text-4xl">📸</span>
        {/if}
      </div>
      
      <div class="flex-1 w-full text-center sm:text-left">
        <label class="block text-sm font-bold text-secondary mb-2" for="avatar">Profile Photo</label>
        <input 
          type="file" 
          id="avatar" 
          accept="image/*"
          onchange={handleFileChange}
          class="block w-full text-sm text-gray-500
            file:mr-4 file:py-2.5 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-primary/10 file:text-primary
            hover:file:bg-primary/20 transition-all cursor-pointer"
        />
        <p class="mt-2 text-xs text-gray-400">Recommended: Square image (JPG, PNG)</p>
      </div>
    </div>

    <div>
      <label class="block text-sm font-bold text-secondary mb-2" for="name">Student Name</label>
      <input 
        type="text" 
        id="name" 
        bind:value={name} 
        required
        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        placeholder="e.g. Tendai Phiri"
      />
    </div>

    <div>
      <label class="block text-sm font-bold text-secondary mb-2" for="belt">Belt Rank</label>
      <select 
        id="belt" 
        bind:value={belt_rank}
        onchange={handleBeltChange}
        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary outline-none"
      >
        {#each beltOptions as option}
          <option value={option.rank}>{option.rank}</option>
        {/each}
      </select>
    </div>

    <div>
      <label class="block text-sm font-bold text-secondary mb-2" for="date">Date Joined</label>
      <input 
        type="date" 
        id="date" 
        bind:value={date_joined} 
        required
        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary outline-none"
      />
    </div>

    <button 
      type="submit" 
      disabled={isSubmitting}
      class="w-full mt-4 bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
    >
      {#if isSubmitting}
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Uploading...
      {:else}
        Add Student to Database
      {/if}
    </button>
  </form>
</div>