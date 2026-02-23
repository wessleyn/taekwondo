<!-- 
  Hero.svelte
  Full-screen hero banner with slider-like content 
-->
<script lang="ts">
  import Button from "$lib/components/Button.svelte";

  const slides = [
    {
      subtitle: "Refine Your Skills",
      title: "Shaping Your\nKarate Future.",
      cta: "Read More",
    },
    {
      subtitle: "Building",
      title: "Tomorrow's\nLeaders.",
      cta: "Explore More",
    },
    {
      subtitle: "The Ultimate Karate",
      title: "Taking Karate\nto Next Level.",
      cta: "Join Now",
    },
  ];

  let activeIndex = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      activeIndex = (activeIndex + 1) % slides.length;
    }, 5000);
    return () => clearInterval(interval);
  });
</script>

<section
  id="hero"
  class="relative min-h-screen flex items-center overflow-hidden bg-secondary"
>
  <!-- Background gradient overlay -->
  <div
    class="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/40"
  ></div>

  <!-- Decorative background shapes -->
  <div
    class="absolute right-0 top-0 w-1/2 h-full opacity-10"
    style="background: radial-gradient(circle at 70% 50%, var(--color-primary) 0%, transparent 60%);"
  ></div>

  <!-- Content -->
  <div
    class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full"
  >
    <div class="max-w-2xl">
      {#each slides as slide, i}
        <div
          class="transition-all duration-700
					       {i === activeIndex
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 absolute'}"
          style={i !== activeIndex ? "pointer-events: none;" : ""}
        >
          <span
            class="inline-block text-sm font-semibold uppercase tracking-[0.2em]
						       text-primary mb-4"
          >
            {slide.subtitle}
          </span>

          <h1
            class="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-8 whitespace-pre-line"
          >
            {slide.title}
          </h1>

          <Button href="#milestones" variant="primary">{slide.cta}</Button>
        </div>
      {/each}
    </div>

    <!-- Slide indicators -->
    <div class="flex items-center gap-3 mt-16">
      {#each slides as _, i}
        <button
          onclick={() => (activeIndex = i)}
          aria-label="Go to slide {i + 1}"
          class="h-1 rounded-full transition-all duration-300 cursor-pointer
					       {i === activeIndex
            ? 'w-10 bg-primary'
            : 'w-6 bg-white/30 hover:bg-white/50'}"
        ></button>
      {/each}
      <span class="ml-4 text-white/60 text-sm font-heading">
        {activeIndex + 1} / {slides.length}
      </span>
    </div>
  </div>

  <!-- Decorative bottom edge -->
  <div class="absolute bottom-0 left-0 right-0">
    <svg
      viewBox="0 0 1440 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full"
    >
      <path
        d="M0 60L1440 60L1440 0C1200 50 240 50 0 0L0 60Z"
        fill="var(--color-body-bg)"
      />
    </svg>
  </div>
</section>
