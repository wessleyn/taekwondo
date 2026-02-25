<!--
  Policies.svelte
  Participation liability release and medical authorization
-->
<script lang="ts">
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import { brand, instructor } from "$lib/site-config";

  let expanded = $state(false);
</script>

<section id="policies" class="py-20 lg:py-28 bg-tertiary/40">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      subtitle="Important Notice"
      title="Policies & Liability Release"
    />

    <div
      class="mt-14 bg-white rounded-2xl shadow-md border border-tertiary overflow-hidden"
    >
      <!-- Header -->
      <div class="bg-secondary text-white px-6 py-4">
        <h3 class="text-lg font-bold font-heading uppercase tracking-wider">
          Participation Liability Release & Medical Authorization
        </h3>
      </div>

      <!-- Content -->
      <div class="px-6 py-8 space-y-5 text-sm text-body-text leading-relaxed">
        <p>
          By participating in <strong class="text-secondary"
            >{brand.nameFull.toUpperCase()}</strong
          >
          activities, I'm aware that martial arts training carries some risk of injury
          that may occur during training, competitions, or related events. I'm responsible
          for my own safety and well-being.
        </p>

        <p>
          I release <strong class="text-secondary"
            >{brand.nameFull.toUpperCase()}</strong
          >, its sponsors, employees, agents, officers, and directors from any
          liability for injuries or losses I or my child/children may sustain
          while participating in club activities.
        </p>

        {#if expanded}
          <p>
            I've had a medical check-up within the last 12 months and confirm
            I'm capable of participating in I.T.F TAEKWON-DO training.
          </p>

          <p>
            I authorize <strong class="text-secondary"
              >{instructor.fullName.toUpperCase()}</strong
            > (Instructor and Head Coach) to administer first aid and/or seek medical
            treatment if needed.
          </p>

          <p>
            I'm responsible for my own medical expenses and those of my
            child/children, and I agree to cover any costs incurred.
          </p>

          <p>
            If I or my child/children are absent from classes for a month
            without a valid reason, we understand that re-affiliation or
            re-registration will be required.
          </p>

          <div
            class="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg"
          >
            <p class="text-xs text-body-text italic">
              By participating, I acknowledge that I've read, understood, and
              agree to these terms.
            </p>
          </div>
        {/if}

        <button
          onclick={() => (expanded = !expanded)}
          class="inline-flex items-center gap-2 text-primary font-semibold text-sm
					       hover:text-primary-dark transition-colors cursor-pointer"
        >
          {expanded ? "Show Less" : "Read Full Policy"}
          <svg
            class="w-4 h-4 transition-transform duration-300 {expanded
              ? 'rotate-180'
              : ''}"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
