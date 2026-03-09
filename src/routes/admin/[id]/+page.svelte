<script lang="ts">
  import { enhance } from "$app/forms";
  import { ArrowLeft, Trash2 } from "lucide-svelte";
  import { untrack } from "svelte";

  let { data, form } = $props<{
    data: {
      student: {
        id: string;
        name: string;
        belt_rank: string;
        belt_order: number;
        date_joined: string;
        image_url: string | null;
      };
    };
    form: { success?: boolean; error?: string } | null;
  }>();

  const beltOptions = [
    { rank: "Black Belt", order: 1 },
    { rank: "Black Stripe", order: 2 },
    { rank: "Red Belt", order: 3 },
    { rank: "Red Stripe", order: 4 },
    { rank: "Blue Belt", order: 5 },
    { rank: "Blue Stripe", order: 6 },
    { rank: "Green Belt", order: 7 },
    { rank: "Green Stripe", order: 8 },
    { rank: "Yellow Belt", order: 9 },
    { rank: "Yellow Stripe", order: 10 },
    { rank: "White Belt", order: 11 },
  ];

  let belt_rank = $state(untrack(() => data.student.belt_rank));
  let belt_order = $state(untrack(() => data.student.belt_order));
  let avatarPreview = $state<string | null>(null);
  let isDeleting = $state(false);
  let confirmDelete = $state(false);

  function handleBeltChange() {
    const selected = beltOptions.find((b) => b.rank === belt_rank);
    if (selected) belt_order = selected.order;
  }

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files?.[0]) {
      avatarPreview = URL.createObjectURL(target.files[0]);
    }
  }
</script>

<div class="p-6 md:p-10 max-w-2xl">
  <a
    href="/admin"
    class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-secondary transition-colors mb-8"
  >
    <ArrowLeft size={16} /> Back to Students
  </a>

  <div class="flex items-center gap-5 mb-10">
    <img
      src={avatarPreview ??
        data.student.image_url ??
        `https://ui-avatars.com/api/?name=${encodeURIComponent(data.student.name)}&background=random`}
      alt={data.student.name}
      class="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
    />
    <div>
      <h1
        class="text-2xl font-bold font-heading text-secondary uppercase tracking-wide"
      >
        {data.student.name}
      </h1>
      <span class="text-sm text-gray-500">{data.student.belt_rank}</span>
    </div>
  </div>

  {#if form?.success}
    <div
      class="mb-6 bg-green-50 border border-green-200 text-green-800 text-sm font-semibold px-4 py-3 rounded-lg"
    >
      Student updated successfully.
    </div>
  {/if}
  {#if form?.error}
    <div
      class="mb-6 bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-3 rounded-lg"
    >
      Error: {form.error}
    </div>
  {/if}

  <form
    method="POST"
    action="?/update"
    enctype="multipart/form-data"
    use:enhance
    class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6"
  >
    <!-- Avatar upload -->
    <div
      class="flex flex-col items-center sm:flex-row gap-6 p-4 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50"
    >
      <div
        class="w-20 h-20 shrink-0 rounded-full border-2 border-gray-200 bg-white overflow-hidden shadow-sm"
      >
        <img
          src={avatarPreview ??
            data.student.image_url ??
            `https://ui-avatars.com/api/?name=${encodeURIComponent(data.student.name)}&background=random`}
          alt="Preview"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex-1">
        <label for="avatar" class="block text-sm font-medium text-gray-700 mb-2"
          >Change Photo (optional)</label
        >
        <input
          id="avatar"
          type="file"
          name="avatar"
          accept="image/*"
          onchange={handleFileChange}
          class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
        />
      </div>
    </div>

    <!-- Name -->
    <div class="flex flex-col gap-1.5">
      <label for="name" class="text-sm font-semibold text-gray-700"
        >Full Name</label
      >
      <input
        id="name"
        name="name"
        type="text"
        required
        value={data.student.name}
        class="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
      />
    </div>

    <!-- Belt Rank -->
    <div class="flex flex-col gap-1.5">
      <label for="belt_rank" class="text-sm font-semibold text-gray-700"
        >Belt Rank</label
      >
      <select
        id="belt_rank"
        name="belt_rank"
        bind:value={belt_rank}
        onchange={handleBeltChange}
        class="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm bg-white"
      >
        {#each beltOptions as opt}
          <option value={opt.rank}>{opt.rank}</option>
        {/each}
      </select>
      <input type="hidden" name="belt_order" value={belt_order} />
    </div>

    <!-- Date Joined -->
    <div class="flex flex-col gap-1.5">
      <label for="date_joined" class="text-sm font-semibold text-gray-700"
        >Date Joined</label
      >
      <input
        id="date_joined"
        name="date_joined"
        type="date"
        value={data.student.date_joined}
        class="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
      />
    </div>

    <button
      type="submit"
      class="bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm"
    >
      Save Changes
    </button>
  </form>

  <!-- Delete -->
  <div class="mt-8 p-6 bg-red-50 border border-red-100 rounded-2xl">
    <h3 class="text-sm font-bold text-red-700 mb-2 uppercase tracking-wide">
      Danger Zone
    </h3>
    <p class="text-sm text-red-600 mb-4">
      Permanently remove this student from the roster. This cannot be undone.
    </p>

    {#if !confirmDelete}
      <button
        type="button"
        onclick={() => (confirmDelete = true)}
        class="inline-flex items-center gap-2 bg-white border border-red-300 text-red-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
      >
        <Trash2 size={15} /> Remove Student
      </button>
    {:else}
      <p class="text-sm font-bold text-red-700 mb-3">
        Are you sure? This is permanent.
      </p>
      <div class="flex gap-3">
        <form
          method="POST"
          action="?/delete"
          use:enhance={() => {
            isDeleting = true;
          }}
        >
          <button
            type="submit"
            disabled={isDeleting}
            class="bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60"
          >
            {isDeleting ? "Deleting..." : "Yes, Delete"}
          </button>
        </form>
        <button
          type="button"
          onclick={() => (confirmDelete = false)}
          class="bg-white border border-gray-200 text-gray-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    {/if}
  </div>
</div>
