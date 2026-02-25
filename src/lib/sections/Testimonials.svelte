<script lang="ts">
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import { brand, instructor } from "$lib/site-config";
  import { fly } from "svelte/transition";
 // Added fade for smooth exiting

  const testimonials = [
    {
      quote: "Teachers are excellent and genuinely kind",
      body: `The training environment is welcoming and professional. ${instructor.shortName} pushes you to improve while always making sure technique comes first. My children love every session.`,
      name: "Joe",
      role: "Parent & Student",
      stars: 5,
      image: "/chug.jpeg",
    },
    {
      quote: "Discipline and respect in every lesson",
      body: `Since joining ${brand.name}, my confidence has grown tremendously. The structured belt progression keeps me motivated, and the community feels like family.`,
      name: "Amina",
      role: "Advanced Student",
      stars: 5,
      image: "/boy.jpeg",
    },
    {
      quote: "Best Taekwondo club in the region",
      body: `${instructor.shortName} has a gift for teaching. He breaks down complex patterns so everyone can understand. The atmosphere is focused yet encouraging.`,
      name: "Hassan",
      role: "Blue Belt",
      stars: 5,
      image: "/blue.jpeg",
    },
  ];

  let activeIndex = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      activeIndex = (activeIndex + 1) % testimonials.length;
    }, 6000);
    return () => clearInterval(interval);
  });
</script>

<section
  id="testimonials"
  class="py-20 lg:py-28 bg-secondary relative overflow-hidden"
>
  <div
    class="absolute left-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none"
    style="background: radial-gradient(ellipse at 20% 50%, white 0%, transparent 70%);"
  ></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      
      <div class="text-center lg:text-left flex flex-col items-center lg:items-start">
        <SectionHeading
          subtitle="Testimonials"
          title="How We're Perceived"
          align="left"
          light
        />

        <div class="relative grid mt-8 min-h-80 sm:min-h-62.5 w-full items-start">
          {#each testimonials as t, i (i)}
            {#if i === activeIndex}
              <div
                class="col-start-1 row-start-1 w-full flex flex-col items-center lg:items-start"
                in:fly={{ x: 80, duration: 600, delay: 200 }}
                out:fly={{ x: -80, duration: 400, opacity: 0 }}
              >
                <div class="flex items-center gap-1 justify-center lg:justify-start">
                  {#each Array(t.stars) as _}
                    <span class="text-primary text-xl">★</span>
                  {/each}
                </div>

                <blockquote class="mt-4">
                  <p
                    class="text-2xl md:text-3xl font-bold font-heading text-white leading-tight uppercase"
                  >
                    "{t.quote}"
                  </p>
                  <p class="mt-4 text-gray-400 text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
                    "{t.body}"
                  </p>
                </blockquote>

                <div class="mt-6 flex items-center gap-3 justify-center lg:justify-start">
                  <div
                    class="w-10 h-10 rounded-full bg-quaternary flex items-center justify-center text-white font-bold text-sm shrink-0"
                  >
                    {t.name[0]}
                  </div>
                  <div class="text-left">
                    <p class="text-white font-bold text-sm uppercase">
                      {t.name},
                      <span class="text-primary block sm:inline">{t.role}</span>
                    </p>
                  </div>
                </div>
              </div>
            {/if}
          {/each}
        </div>

        <div class="flex items-center gap-2 mt-4 justify-center lg:justify-start w-full">
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

      <div class="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
        <div
          class="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden
                 border-4 border-white/10 shadow-2xl bg-secondary"
        >
          {#each testimonials as t, i (i)}
            {#if i === activeIndex}
              <img
                src={t.image}
                alt="{t.name} Training"
                class="absolute inset-0 w-full h-full object-cover"
                in:fly={{ x: 100, duration: 600, delay: 200 }}
                out:fly={{ x: -100, duration: 400, opacity: 0 }}
                loading="lazy"
              />
            {/if}
          {/each}
        </div>

        <div
          class="absolute -bottom-8 -left-4 text-6xl opacity-30 pointer-events-none"
        >
          🌸
        </div>
      </div>
      
    </div>
  </div>
</section>