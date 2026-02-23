<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/sections/Navbar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<Navbar />

<main>
	{@render children()}
</main>

<Footer />
