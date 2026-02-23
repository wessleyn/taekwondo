<!--
  +page.svelte — Home page
  Assembles all sections into the complete landing page
-->
<script lang="ts">
  import BookingForm from "$lib/sections/BookingForm.svelte";
  import Gallery from "$lib/sections/Gallery.svelte";
  import Hero from "$lib/sections/Hero.svelte";
  import Milestones from "$lib/sections/Milestones.svelte";
  import Pricing from "$lib/sections/Pricing.svelte";
  import Schedule from "$lib/sections/Schedule.svelte";
  import Sensei from "$lib/sections/Sensei.svelte";
  import Stats from "$lib/sections/Stats.svelte";
  import TailoredClasses from "$lib/sections/TailoredClasses.svelte";
  import Testimonials from "$lib/sections/Testimonials.svelte";
</script>

<svelte:head>
  <title>Bandong Ryok I.T.F Taekwon-Do Club</title>
  <meta
    name="description"
    content="Bandong Ryok I.T.F Taekwon-Do Club — Discipline, respect, and self-improvement through ITF Taekwondo."
  />
</svelte:head>

<Hero />
<Sensei />
<Stats />
<TailoredClasses />
<Milestones />
<Pricing />
<Testimonials />
<Schedule />
<BookingForm />
<Gallery />
