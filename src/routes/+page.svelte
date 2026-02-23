<!--
  +page.svelte — Home page
  Assembles all sections into the complete landing page
-->
<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import Stats from '$lib/sections/Stats.svelte';
	import Milestones from '$lib/sections/Milestones.svelte';
	import Pricing from '$lib/sections/Pricing.svelte';
	import Schedule from '$lib/sections/Schedule.svelte';
	import BookingForm from '$lib/sections/BookingForm.svelte';
	import Gallery from '$lib/sections/Gallery.svelte';
</script>

<svelte:head>
	<title>Jackie Karate — Shaping Your Karate Future</title>
	<meta
		name="description"
		content="Professional karate training academy. Build discipline, strength, and confidence with expert instructors."
	/>
</svelte:head>

<Hero />
<Stats />
<Milestones />
<Pricing />
<Schedule />
<BookingForm />
<Gallery />
