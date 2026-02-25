<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { onMount } from "svelte";

  const skills = [
    { label: "Extensive Knowledge", value: 99 },
    { label: "Technical Expertise", value: 98 },
    { label: "Teaching Ability", value: 90 },
    { label: "Demonstration Skills", value: 97 },
  ];

  let visible = $state(false);
  let sectionEl: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }, // Lowered to 0.2 so it triggers earlier on mobile
    );
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section
  id="sensei"
  bind:this={sectionEl}
  class="py-16 sm:py-20 lg:py-28 bg-body-bg relative overflow-hidden"
>
  <div class="absolute right-0 bottom-0 w-64 h-64 opacity-10 pointer-events-none">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="50" r="8" fill="var(--color-primary)" />
      <circle cx="170" cy="30" r="6" fill="var(--color-primary)" />
      <circle cx="130" cy="70" r="10" fill="var(--color-primary)" />
      <circle cx="160" cy="80" r="5" fill="var(--color-primary)" />
      <circle cx="140" cy="40" r="7" fill="var(--color-primary)" />
      <circle cx="180" cy="60" r="9" fill="var(--color-primary)" />
      <path d="M100 180 Q140 100 180 60" stroke="var(--color-secondary)" stroke-width="2" fill="none" />
      <path d="M120 190 Q150 120 170 80" stroke="var(--color-secondary)" stroke-width="1.5" fill="none" />
    </svg>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <div class="relative flex justify-center w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
        <div
          class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-105 lg:h-105 rounded-full overflow-hidden
                 border-4 border-primary/20 shadow-2xl z-10"
        >
          <!-- svelte-ignore a11y_img_redundant_alt -->
          <img src="/sensei.jpeg" alt="Instructor Photo" class="w-full h-full object-cover">
        </div>
        
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-70 h-70 sm:w-87.5 sm:h-87.5 lg:w-115 lg:h-115 
                 rounded-full border-[3px] border-dashed border-primary/30 animate-[spin_40s_linear_infinite] z-0"
        ></div>
      </div>

      <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
        <span
          class="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]
                 text-primary mb-3 sm:mb-4 bg-primary/10 px-4 py-1.5 rounded-full"
        >
          <span>🥋</span> ITF Taekwondo Instructor
        </span>

        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
          Sabumnim Yasini
        </h2>
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-1">
          Saidi
        </h3>

        <p class="mt-4 sm:mt-6 text-body-text leading-relaxed max-w-lg text-sm sm:text-base">
          Highly skilled and experienced Taekwondo instructor with years of
          teaching ITF Taekwondo. Proven track record of developing students'
          technical skills, physical fitness, and mental toughness. Holds the
          rank of <strong class="text-secondary font-bold">3rd Dan</strong>
          in ITF Taekwondo.
        </p>

        <div class="mt-6 sm:mt-8 relative p-4 sm:p-5 bg-white rounded-r-xl border-l-4 border-primary shadow-sm w-full max-w-lg">
          <svg class="absolute top-2 left-2 w-6 h-6 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p class="text-body-text leading-relaxed italic text-sm sm:text-base relative z-10 ml-4">
            "I focus on discipline, respect, and self-improvement, empowering
            students to reach their full potential."
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-10 w-full max-w-lg">
          {#each skills as skill}
            <div class="flex items-center gap-4 bg-white/50 p-2 rounded-xl">
              <div class="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                <svg class="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" stroke="var(--color-tertiary)" stroke-width="4" fill="none" />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="var(--color-primary)"
                    stroke-width="4"
                    fill="none"
                    stroke-linecap="round"
                    stroke-dasharray={2 * Math.PI * 28}
                    stroke-dashoffset={visible
                      ? 2 * Math.PI * 28 * (1 - skill.value / 100)
                      : 2 * Math.PI * 28}
                    class="transition-all duration-[2s] ease-out"
                  />
                </svg>
                <span class="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary">
                  {skill.value}%
                </span>
              </div>
              <span class="text-xs sm:text-sm font-bold text-secondary uppercase tracking-wider leading-tight text-left">
                {skill.label}
              </span>
            </div>
          {/each}
        </div>

        <div class="mt-8 sm:mt-10">
          <Button href="#contact" variant="primary">Know More</Button>
        </div>
      </div>
      
    </div>
  </div>
</section>