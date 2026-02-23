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
      title: "ITF Patterns (Tul)",
      description:
        "Master the traditional patterns of ITF Taekwondo — building technique, discipline, and precision at every belt level.",
    },
    {
      icon: "🧠",
      title: "Mental Discipline",
      description:
        "Develop focus, respect, and self-improvement. We empower students to reach their full potential on and off the mat.",
    },
    {
      icon: "🦶",
      title: "Sparring & Self-Defense",
      description:
        "Train in controlled sparring and practical self-defense techniques under the guidance of a 3rd Dan instructor.",
    },
    {
      icon: "💪",
      title: "Physical Fitness",
      description:
        "Build endurance, flexibility, and total-body strength through rigorous Taekwondo conditioning drills.",
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
