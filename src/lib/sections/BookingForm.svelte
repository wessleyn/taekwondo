<!-- 
  BookingForm.svelte
  Contact / booking appointment form 
-->
<script lang="ts">
  import SectionHeading from "$lib/components/SectionHeading.svelte";

  let name = $state("");
  let phone = $state("");
  let date = $state("");
  let classType = $state("taekwondo");
  let submitted = $state(false);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    submitted = true;
    // Reset after 3s
    setTimeout(() => {
      submitted = false;
      name = "";
      phone = "";
      date = "";
      classType = "karate";
    }, 3000);
  }
</script>

<section id="contact" class="py-20 lg:py-28 bg-secondary text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left: Info -->
      <div>
        <SectionHeading
          subtitle="Get In Touch"
          title="Join Our Dojang"
          align="left"
          light
        />

        <p class="mt-6 text-gray-300 leading-relaxed max-w-md">
          Ready to start your Taekwondo journey with Bandong Ryok I.T.F? Book a
          session or send us a message. Sabumnim Yasini Saidi will get back to
          you.
        </p>

        <div class="mt-10 space-y-4">
          <div class="flex items-center gap-4">
            <span
              class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"
              >📞</span
            >
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider">
                Phone
              </p>
              <p class="text-white font-medium">Contact us for details</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span
              class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"
              >✉️</span
            >
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider">
                Email
              </p>
              <p class="text-white font-medium">bandongryok.itf@gmail.com</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span
              class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"
              >🕐</span
            >
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider">
                Training Hours
              </p>
              <p class="text-white font-medium">Sat–Wed: 5 PM – 9 PM</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Form -->
      <div class="bg-quaternary rounded-2xl p-8 lg:p-10">
        {#if submitted}
          <div class="text-center py-12">
            <span class="text-5xl block mb-4">✅</span>
            <h3 class="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p class="text-gray-400">We'll contact you soon.</p>
          </div>
        {:else}
          <form onsubmit={handleSubmit} class="space-y-5">
            <div>
              <label
                for="name"
                class="block text-xs uppercase tracking-wider text-gray-400 mb-1"
              >
                Name *
              </label>
              <input
                id="name"
                type="text"
                bind:value={name}
                required
                placeholder="Your full name"
                class="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3
								       text-white placeholder:text-gray-500 text-sm
								       focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
								       transition-colors"
              />
            </div>

            <div>
              <label
                for="phone"
                class="block text-xs uppercase tracking-wider text-gray-400 mb-1"
              >
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                bind:value={phone}
                required
                placeholder="+1 (555) 000-0000"
                class="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3
								       text-white placeholder:text-gray-500 text-sm
								       focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
								       transition-colors"
              />
            </div>

            <div>
              <label
                for="date"
                class="block text-xs uppercase tracking-wider text-gray-400 mb-1"
              >
                Preferred Date *
              </label>
              <input
                id="date"
                type="date"
                bind:value={date}
                required
                class="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3
								       text-white text-sm
								       focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
								       transition-colors"
              />
            </div>

            <div>
              <label
                for="classType"
                class="block text-xs uppercase tracking-wider text-gray-400 mb-1"
              >
                Type of Class
              </label>
              <select
                id="classType"
                bind:value={classType}
                class="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3
								       text-white text-sm appearance-none
								       focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
								       transition-colors"
              >
                <option value="taekwondo">ITF Taekwondo</option>
                <option value="private">Private Lesson</option>
                <option value="session1">Session 1 (5–7 PM)</option>
                <option value="session2">Session 2 (7–9 PM)</option>
              </select>
            </div>

            <button
              type="submit"
              class="w-full py-3 px-6 rounded-lg text-sm font-semibold uppercase tracking-wider
							       bg-primary text-white hover:bg-primary-dark
							       transition-colors cursor-pointer"
            >
              Book Appointment
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>
