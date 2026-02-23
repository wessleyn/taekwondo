<!-- 
  Stats.svelte
  Counter statistics section 
-->
<script lang="ts">
  import CounterStat from "$lib/components/CounterStat.svelte";

  const stats = [
    { target: 14, suffix: "K", label: "Black Belts Earned" },
    { target: 4.9, suffix: "+", label: "Happy Members" },
    { target: 35, suffix: "+", label: "Years Experience" },
    { target: 120, suffix: "+", label: "Expert Trainers" },
    { target: 50, suffix: "+", label: "Training Programs" },
  ];
</script>

<section class="py-16 bg-body-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {#each stats as stat}
        <CounterStat
          target={stat.target}
          suffix={stat.suffix}
          label={stat.label}
        />
      {/each}
    </div>
  </div>
</section>
