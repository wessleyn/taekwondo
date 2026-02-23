<script lang="ts">
    import Footer from '$lib/sections/Footer.svelte';
    import Navbar from '$lib/sections/Navbar.svelte';
    import type { Snippet } from 'svelte';
    import '../app.css';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();

    // State to track if the client has mounted
    let isLoaded = $state(false);

    $effect(() => {
        // We use a slight delay so the animation actually has time to play
        // and cover the initial hydration flash. 
        const timer = setTimeout(() => {
            isLoaded = true;
        }, 800); // 800ms feels snappy but visible

        return () => clearTimeout(timer);
    });
</script>

<div 
    class="fixed inset-0 z-100 flex flex-col items-center justify-center bg-secondary transition-all duration-500 ease-in-out
           {isLoaded ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'}"
>
    <div class="relative w-128 h-128 animate-pulse flex items-center justify-center">
        <img 
            src="/logo.png" 
            alt="Loading..." 
            class="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,165,0,0.4)]"
        />
    </div>
</div>

<div class="transition-opacity duration-700 delay-200 {isLoaded ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}">
    <Navbar />

    <main>
        {@render children()}
    </main>

    <Footer />
</div>