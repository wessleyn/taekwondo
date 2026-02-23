<!--
  Testimonials.svelte
  "How We're Perceived" section with rotating testimonials (dark bg)
-->
<script lang="ts">
  import SectionHeading from "$lib/components/SectionHeading.svelte";

  const testimonials = [
    {
      quote: "Teachers are excellent and genuinely kind",
      body: "The training environment is welcoming and professional. Instructor Yasini pushes you to improve while always making sure technique comes first. My children love every session.",
      name: "Joe",
      role: "Parent & Student",
      stars: 5,
    },
    {
      quote: "Discipline and respect in every lesson",
      body: "Since joining Bandong Ryok, my confidence has grown tremendously. The structured belt progression keeps me motivated, and the community feels like family.",
      name: "Amina",
      role: "Advanced Student",
      stars: 5,
    },
    {
      quote: "Best Taekwondo club in the region",
      body: "Instructor Yasini has a gift for teaching. He breaks down complex patterns so everyone can understand. The atmosphere is focused yet encouraging.",
      name: "Hassan",
      role: "Blue Belt",
      stars: 5,
    },
  ];

  let activeIndex = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      activeIndex = (activeIndex + 1) % testimonials.length;
    }, 6000);
    return () => clearInterval(interval);
  });

  const current = $derived(testimonials[activeIndex]);
</script>

<section
  id="testimonials"
  class="py-20 lg:py-28 bg-secondary relative overflow-hidden"
>
  <!-- Decorative ink brush bg -->
  <div
    class="absolute left-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none"
    style="background: radial-gradient(ellipse at 20% 50%, white 0%, transparent 70%);"
  ></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: text content -->
      <div class="text-center lg:text-left">
        <SectionHeading
          subtitle="Testimonials"
          title="How We're Perceived"
          align="left"
          light
        />

        <!-- Stars -->
        <div
          class="flex items-center gap-1 mt-8 justify-center lg:justify-start"
        >
          {#each Array(current.stars) as _}
            <span class="text-primary text-xl">★</span>
          {/each}
        </div>

        <!-- Quote -->
        <blockquote class="mt-4">
          <p
            class="text-2xl md:text-3xl font-bold font-heading text-white leading-tight uppercase"
          >
            "{current.quote}"
          </p>
          <p class="mt-4 text-gray-400 text-sm leading-relaxed max-w-lg">
            "{current.body}"
          </p>
        </blockquote>

        <!-- Author -->
        <div
          class="mt-6 flex items-center gap-3 justify-center lg:justify-start"
        >
          <div
            class="w-10 h-10 rounded-full bg-quaternary flex items-center justify-center text-white font-bold text-sm"
          >
            {current.name[0]}
          </div>
          <div>
            <p class="text-white font-bold text-sm uppercase">
              {current.name},
              <span class="text-primary">{current.role}</span>
            </p>
          </div>
        </div>

        <!-- Dots -->
        <div
          class="flex items-center gap-2 mt-8 justify-center lg:justify-start"
        >
          {#each testimonials as _, i}
            <button
              onclick={() => (activeIndex = i)}
              aria-label="View testimonial {i + 1}"
              class="h-2 rounded-full transition-all duration-300 cursor-pointer
							       {i === activeIndex
                ? 'w-8 bg-primary'
                : 'w-2 bg-white/20 hover:bg-white/40'}"
            ></button>
          {/each}
        </div>
      </div>

      <!-- Right: image -->
      <div class="relative flex justify-center lg:justify-end">
        <!-- Circular image frame -->
        <div
          class="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden
					       border-4 border-white/10 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1514050566906-8d077bae7046?w=600&h=600&fit=crop"
            alt="Taekwondo training session"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <!-- Decorative cherry blossom accent -->
        <div
          class="absolute -bottom-8 -left-4 text-6xl opacity-30 pointer-events-none"
        >
          🌸
        </div>
      </div>
    </div>
  </div>
</section>
