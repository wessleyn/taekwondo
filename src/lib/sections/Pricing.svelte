<!-- 
  Pricing.svelte
  Three-tier pricing section 
-->
<script lang="ts">
  import PricingCard from "$lib/components/PricingCard.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";

  const tiers = [
    {
      plan: "Joining Fee",
      duration: "One-Time",
      price: "$10",
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
      price: "$10",
      unit: "month",
      features: [
        "5 training days per week (Sat–Wed)",
        "Two sessions daily: 5–7 PM & 7–9 PM",
        "Instruction by 3rd Dan Sabumnim",
      ],
      highlighted: true,
    },
    {
      plan: "Private Lessons",
      duration: "By Appointment",
      price: "TBD",
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
