<!-- 
  Stats.svelte
  Counter statistics section 
-->
<script lang="ts">
  import CounterStat from "$lib/components/CounterStat.svelte";

  const stats = [
    { target: 10, suffix: "+", label: "Years Teaching" },
    { target: 3, suffix: "rd Dan", label: "Instructor Rank" },
    { target: 5, suffix: "", label: "Training Days / Week" },
    { target: 100, suffix: "+", label: "Students Trained" },
    { target: 2, suffix: "", label: "Sessions Daily" },
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
