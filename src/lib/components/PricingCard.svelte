<!-- 
  PricingCard.svelte
  Pricing tier card 
-->
<script lang="ts">
  interface Props {
    plan: string;
    duration: string;
    price: string;
    unit: string;
    features: string[];
    highlighted?: boolean;
  }

  let {
    plan,
    duration,
    price,
    unit,
    features,
    highlighted = false,
  }: Props = $props();
</script>

<div
  class="rounded-2xl p-8 transition-all duration-300 flex flex-col
	       {highlighted
    ? 'bg-secondary text-white shadow-2xl scale-105 border-2 border-primary'
    : 'bg-white text-secondary shadow-md hover:shadow-xl border border-tertiary'}"
>
  <!-- Header -->
  <div class="text-center mb-6">
    <span
      class="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full mb-4
			       {highlighted ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}"
    >
      {plan}
    </span>
    <p class="text-sm {highlighted ? 'text-gray-300' : 'text-body-text'} mb-2">
      {duration}
    </p>
  </div>

  <!-- Price -->
  <div class="text-center mb-8">
    <span class="text-5xl font-bold font-heading">{price}</span>
    <span class="text-sm {highlighted ? 'text-gray-300' : 'text-body-text'}"
      >/{unit}</span
    >
  </div>

  <!-- Features -->
  <ul class="space-y-3 mb-8 flex-1">
    {#each features as feature}
      <li class="flex items-start gap-3 text-sm">
        <span class="text-primary mt-0.5 shrink-0">✓</span>
        <span class={highlighted ? "text-gray-200" : "text-body-text"}
          >{feature}</span
        >
      </li>
    {/each}
  </ul>

  <!-- CTA -->
  <a
    href="#contact"
    class="block text-center py-3 px-6 rounded-lg text-sm font-semibold uppercase tracking-wider
		       transition-all duration-300 cursor-pointer
		       {highlighted
      ? 'bg-primary text-white hover:bg-primary-dark'
      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}"
  >
    Get Started
  </a>
</div>
