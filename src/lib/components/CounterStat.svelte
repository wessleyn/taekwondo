<!--
  CounterStat.svelte
  Animated counter that counts up when visible 
-->
<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    target: number;
    suffix?: string;
    label: string;
  }

  let { target, suffix = "", label }: Props = $props();

  let current = $state(0);
  let element: HTMLDivElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  });

  function animateCount() {
    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * target);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }
</script>

<div bind:this={element} class="text-center">
  <div class="text-4xl md:text-5xl font-bold font-heading text-primary mb-1">
    {current}{suffix}
  </div>
  <p class="text-sm text-body-text uppercase tracking-wider">{label}</p>
</div>
