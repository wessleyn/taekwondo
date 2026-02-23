<!-- 
  Milestones.svelte
  Feature boxes highlighting key qualities 
-->
<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import IconBox from "$lib/components/IconBox.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";

  const milestones = [
    {
      icon: "🥋",
      title: "Belt Testing",
      description:
        "Structured progression through belt ranks with regular testing to measure discipline and skill growth.",
    },
    {
      icon: "🧠",
      title: "Mental Resilience",
      description:
        "Build unshakable focus, confidence, and inner strength through martial arts training and meditation.",
    },
    {
      icon: "⚔️",
      title: "Weapons Training",
      description:
        "Master traditional weapons techniques including bo staff, nunchaku, and sai with expert instruction.",
    },
    {
      icon: "💪",
      title: "Fitness Integration",
      description:
        "Combine martial arts with modern fitness to build endurance, flexibility, and total-body strength.",
    },
  ];
</script>

<section id="milestones" class="py-20 lg:py-28 bg-body-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      subtitle="Key Qualities"
      title="Milestones That Define Us"
    />

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
      {#each milestones as ms}
        <IconBox icon={ms.icon} title={ms.title} description={ms.description} />
      {/each}
    </div>

    <div class="text-center mt-12">
      <Button href="#contact" variant="primary">Join Us Today</Button>
    </div>
  </div>
</section>
