<!-- 
  Pricing.svelte
  Three-tier pricing section 
-->
<script lang="ts">
  import PricingCard from "$lib/components/PricingCard.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";

  const tiers = [
    {
      plan: "Monthly Plans",
      duration: "30 Days",
      price: "$25",
      unit: "month",
      features: [
        "Unlimited group classes",
        "Access to basic training equipment",
        "Monthly progress assessment",
      ],
      highlighted: false,
    },
    {
      plan: "Pay-Per-Class",
      duration: "2 Hours",
      price: "$10",
      unit: "class",
      features: [
        "Flexible scheduling — attend any class",
        "No long-term commitment required",
        "Includes locker and equipment rental",
      ],
      highlighted: true,
    },
    {
      plan: "Membership Plans",
      duration: "30 Days",
      price: "$65",
      unit: "month",
      features: [
        "All Monthly Plan benefits included",
        "1-on-1 personal training sessions",
        "Priority belt testing registration",
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
