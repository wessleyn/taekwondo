<!-- 
  Pricing.svelte
  Three-tier pricing section 
-->
<script lang="ts">
  import PricingCard from "$lib/components/PricingCard.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import { instructor, pricing, schedule } from "$lib/site-config";

  const tiers = [
    {
      plan: "Joining Fee",
      duration: "One-Time",
      price: pricing.joiningFee,
      unit: "once",
      features: [
        "Registration & club membership",
        "Access to all scheduled sessions",
        "Official club affiliation",
      ],
      highlighted: false,
    },
    {
      plan: "Monthly Fee",
      duration: "30 Days",
      price: pricing.monthlyFee,
      unit: "month",
      features: [
        `${schedule.trainingDaysPerWeek} training days per week (${schedule.hoursDisplay.split(":")[0].trim()})`,
        `Two sessions daily: ${schedule.sessions[0].shortTime} & ${schedule.sessions[1].shortTime}`,
        `Instruction by ${instructor.rank} ${instructor.title}`,
      ],
      highlighted: true,
    },
    {
      plan: "Private Lessons",
      duration: "By Appointment",
      price: pricing.privateLessons,
      unit: "session",
      features: [
        "1-on-1 personal training",
        "Custom program tailored to your goals",
        "Pricing by negotiation",
      ],
      highlighted: false,
    },
  ];
</script>

<section id="pricing" class="py-20 lg:py-28 bg-tertiary/40">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      subtitle="Choose Your Package"
      title="Affordable Plans for All"
    />

    <div class="grid md:grid-cols-3 gap-8 mt-14 items-center">
      {#each tiers as tier}
        <PricingCard {...tier} />
      {/each}
    </div>
  </div>
</section>
