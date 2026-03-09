<!--
  /policies — Dedicated policies page
-->
<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { brand, instructor, pricing } from "$lib/site-config";
</script>

<svelte:head>
  <title>Policies — {brand.nameFull}</title>
  <meta
    name="description"
    content="Participation liability release, medical authorization, and club policies for {brand.nameFull}."
  />
</svelte:head>

<section class="pt-32 pb-20 bg-body-bg min-h-screen">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <span
        class="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2"
      >
        Important Notice
      </span>
      <h1
        class="text-4xl md:text-5xl font-bold font-heading text-secondary leading-tight"
      >
        Policies & Liability Release
      </h1>
    </div>

    <!-- Policy document -->
    <div
      class="bg-white rounded-2xl shadow-lg border border-tertiary overflow-hidden"
    >
      <!-- Document header -->
      <div class="bg-secondary text-white px-8 py-5">
        <h2 class="text-lg font-bold font-heading uppercase tracking-wider">
          Participation Liability Release & Medical Authorization
        </h2>
        <p class="text-gray-400 text-xs mt-1">
          {brand.nameFull}
        </p>
      </div>

      <!-- Document body -->
      <div class="px-8 py-10 space-y-6 text-sm text-body-text leading-relaxed">
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

        <hr class="border-tertiary" />

        <p>
          I've had a medical check-up within the last 12 months and confirm I'm
          capable of participating in I.T.F TAEKWON-DO training.
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

        <hr class="border-tertiary" />

        <p>
          If I or my child/children are absent from classes for a month without
          a valid reason, we understand that re-affiliation or re-registration
          will be required.
        </p>

        <div class="mt-8 p-5 bg-primary/5 border border-primary/20 rounded-xl">
          <p class="text-body-text italic text-sm">
            By participating, I acknowledge that I've read, understood, and
            agree to these terms.
          </p>
        </div>

        <!-- Fee summary -->
        <div
          class="mt-6 p-5 bg-secondary/5 border border-secondary/10 rounded-xl"
        >
          <h3
            class="text-base font-bold font-heading text-secondary mb-3 uppercase"
          >
            Fee Structure
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div
              class="text-center p-3 bg-white rounded-lg border border-tertiary"
            >
              <p class="text-2xl font-bold font-heading text-primary">
                {pricing.joiningFee}
              </p>
              <p class="text-xs text-body-text uppercase tracking-wider mt-1">
                Joining Fee
              </p>
            </div>
            <div
              class="text-center p-3 bg-white rounded-lg border border-tertiary"
            >
              <p class="text-2xl font-bold font-heading text-primary">
                {pricing.monthlyFee}
              </p>
              <p class="text-xs text-body-text uppercase tracking-wider mt-1">
                Monthly Fee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Back to home -->
    <div class="text-center mt-10">
      <Button href="/" variant="primary">← Back to Home</Button>
    </div>
  </div>
</section>
