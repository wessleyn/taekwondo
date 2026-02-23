<!--
  Sensei.svelte
  Head instructor profile section with skill rings
-->
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
      { threshold: 0.3 },
    );
    observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section
  id="sensei"
  bind:this={sectionEl}
  class="py-20 lg:py-28 bg-body-bg relative overflow-hidden"
>
  <!-- Decorative cherry blossom accent (right side) -->
  <div
    class="absolute right-0 bottom-0 w-64 h-64 opacity-10 pointer-events-none"
  >
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="50" r="8" fill="var(--color-primary)" />
      <circle cx="170" cy="30" r="6" fill="var(--color-primary)" />
      <circle cx="130" cy="70" r="10" fill="var(--color-primary)" />
      <circle cx="160" cy="80" r="5" fill="var(--color-primary)" />
      <circle cx="140" cy="40" r="7" fill="var(--color-primary)" />
      <circle cx="180" cy="60" r="9" fill="var(--color-primary)" />
      <path
        d="M100 180 Q140 100 180 60"
        stroke="var(--color-secondary)"
        stroke-width="2"
        fill="none"
      />
      <path
        d="M120 190 Q150 120 170 80"
        stroke="var(--color-secondary)"
        stroke-width="1.5"
        fill="none"
      />
    </svg>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left: Image -->
      <div class="relative flex justify-center">
        <div
          class="relative w-80 h-80 lg:w-105 lg:h-105 rounded-full overflow-hidden
					       border-4 border-primary/20 shadow-2xl"
        >
          <!-- Placeholder for instructor photo -->
          <div
            class="w-full h-full bg-linear-to-br from-secondary via-secondary/90 to-primary/20
						       flex items-center justify-center"
          >
            <div class="text-center text-white">
              <span class="text-7xl block mb-2">🥋</span>
              <p class="text-lg font-heading font-bold">Sabumnim</p>
              <p class="text-sm text-gray-300">Yasini Saidi</p>
            </div>
          </div>
        </div>
        <!-- Decorative ring -->
        <div
          class="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]"
        ></div>
      </div>

      <!-- Right: Info -->
      <div>
        <span
          class="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]
					       text-primary mb-4"
        >
          <span>🥋</span> ITF Taekwondo Instructor
        </span>

        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight"
        >
          Sabumnim Yasini
        </h2>
        <h3 class="text-3xl md:text-4xl font-bold text-secondary mt-1">
          Saidi
        </h3>

        <p class="mt-6 text-body-text leading-relaxed max-w-lg">
          Highly skilled and experienced Taekwondo instructor with 10 years of
          teaching ITF Taekwondo. Proven track record of developing students'
          technical skills, physical fitness, and mental toughness. Holds the
          rank of <strong class="text-secondary">3rd Dan</strong>
          in ITF Taekwondo.
        </p>

        <p
          class="mt-4 text-body-text leading-relaxed max-w-lg italic border-l-4 border-primary pl-4"
        >
          "I focus on discipline, respect, and self-improvement, empowering
          students to reach their full potential."
        </p>

        <!-- Skill rings -->
        <div class="grid grid-cols-2 gap-6 mt-10">
          {#each skills as skill}
            <div class="flex items-center gap-4">
              <!-- Circular progress ring -->
              <div class="relative w-16 h-16 shrink-0">
                <svg class="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                  <!-- Background circle -->
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="var(--color-tertiary)"
                    stroke-width="4"
                    fill="none"
                  />
                  <!-- Progress circle -->
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
                <!-- Percentage text -->
                <span
                  class="absolute inset-0 flex items-center justify-center
									       text-xs font-bold text-primary"
                >
                  {skill.value}%
                </span>
              </div>
              <span
                class="text-sm font-bold text-secondary uppercase tracking-wider leading-tight"
              >
                {skill.label}
              </span>
            </div>
          {/each}
        </div>

        <div class="mt-10">
          <Button href="#contact" variant="primary">Know More</Button>
        </div>
      </div>
    </div>
  </div>
</section>
