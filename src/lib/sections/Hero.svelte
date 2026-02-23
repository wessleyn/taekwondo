<script lang="ts">
  import Button from "$lib/components/Button.svelte";

  const slides = [
    {
      subtitle: "Train With Purpose",
      title: "ITF Taekwondo\nExcellence.",
      cta: "Join Now",
      image: "/purpose.png",
    },
    {
      subtitle: "Building",
      title: "Tomorrow's\nChampions.",
      cta: "Explore More",
      image: "/champion.png",
    },
    {
      subtitle: "Bandong Ryok I.T.F Taekwon-Do",
      title: "Discipline.\nRespect. Power.",
      cta: "Read More",
      image: "/discipline.png",
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
  class="relative min-h-screen flex items-center overflow-hidden bg-secondary pt-16 lg:pt-0"
>
  <div
    class="absolute inset-0 bg-linear-to-r from-secondary/95 via-secondary/80 to-secondary/40 lg:via-secondary/70"
  ></div>

  <div
    class="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-10"
    style="background: radial-gradient(circle at 70% 50%, var(--color-primary) 0%, transparent 60%);"
  ></div>

  <div
    class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
  >
    <div
      class="relative h-75 sm:h-100 lg:h-150 w-full lg:w-[120%] lg:-mr-[10%] items-center justify-center flex order-first lg:order-last z-10"
    >
      {#each slides as slide, i}
        <img
          src={slide.image}
          alt={slide.subtitle}
          class="absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out
                 {i === activeIndex
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-105'}"
        />
      {/each}
    </div>

    <div
      class="flex flex-col justify-center max-w-2xl order-last lg:order-first"
    >
      <div class="relative min-h-62.5 sm:min-h-75 lg:min-h-87.5">
        {#each slides as slide, i}
          <div
            class="transition-all duration-700 w-full
                   {i === activeIndex
              ? 'opacity-100 translate-y-0 relative'
              : 'opacity-0 translate-y-4 absolute top-0 left-0'}"
            style={i !== activeIndex ? "pointer-events: none;" : ""}
          >
            <div class="flex items-center gap-3 mb-4 lg:mb-6">
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute inset-0 bg-primary/40 blur-xs rounded-full"
                ></div>
                <svg
                  class="relative w-5 h-5 text-primary drop-shadow-md"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a5 5 0 0 0 0 10 5 5 0 0 1 0 10" />
                  <circle
                    cx="12"
                    cy="7"
                    r="2"
                    fill="currentColor"
                    stroke="none"
                  />
                  <circle cx="12" cy="17" r="2" fill="none" />
                </svg>
              </div>

              <span
                class="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary drop-shadow-sm"
              >
                {slide.subtitle}
              </span>

              <div
                class="h-0.5 w-12 sm:w-24 bg-linear-to-r from-primary to-transparent opacity-80"
              ></div>
            </div>
            <h1
              class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 lg:mb-8 whitespace-pre-line"
            >
              {slide.title}
            </h1>

            <Button href="#milestones" variant="primary">{slide.cta}</Button>
          </div>
        {/each}
      </div>

      <div class="flex items-center gap-3 mt-4 sm:mt-8">
        {#each slides as _, i}
          <button
            onclick={() => (activeIndex = i)}
            aria-label="Go to slide {i + 1}"
            class="h-1 rounded-full transition-all duration-300 cursor-pointer
                   {i === activeIndex
              ? 'w-8 sm:w-10 bg-primary'
              : 'w-4 sm:w-6 bg-white/30 hover:bg-white/50'}"
          ></button>
        {/each}
        <span class="ml-4 text-white/60 text-xs sm:text-sm font-heading">
          {activeIndex + 1} / {slides.length}
        </span>
      </div>
    </div>
  </div>

  <div class="absolute bottom-0 left-0 right-0 z-20">
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
