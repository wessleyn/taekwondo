<script lang="ts">
  import { brand, contact, instructor } from "$lib/site-config";
  import { fade, fly } from "svelte/transition";

  let mobileOpen = $state(false);
  let sidebarOpen = $state(false);
  let scrolled = $state(false);

  const navLinks = [
    { label: "Instructor", href: "#sensei" },
    { label: "Students", href: "/students" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  function handleScroll() {
    scrolled = window.scrollY > 50;
  }

  function closeMobile() {
    mobileOpen = false;
  }

  function closeSidebar() {
    sidebarOpen = false;
  }
</script>

<svelte:window onscroll={handleScroll} />

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
         {scrolled
    ? 'bg-white/70 backdrop-blur-lg shadow-lg border-b border-white/20'
    : 'bg-transparent'}"
>
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <a href="#hero" class="flex items-center gap-2 group">
        <img
          src={scrolled ? brand.logos.dark : brand.logos.light}
          alt={brand.logoAlt}
          class="w-20 h-20 object-contain"
        />
        <span
          class="text-xl font-bold font-heading tracking-tight
                 {scrolled ? 'text-secondary' : 'text-white'}
                 group-hover:text-primary transition-colors"
        >
          {brand.name}
        </span>
      </a>

      <ul class="hidden lg:flex items-center gap-8">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class="text-sm font-medium uppercase tracking-wider
                     {scrolled ? 'text-secondary' : 'text-white'}
                     hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>

      <div class="flex items-center gap-4">
        <button
          class="hidden lg:flex flex-col justify-center items-end gap-1.5 w-10 h-10 group
                 {scrolled
            ? 'text-secondary hover:text-primary'
            : 'text-white hover:text-primary'} transition-colors"
          onclick={() => (sidebarOpen = true)}
          aria-label="Open Site Information"
        >
          <div
            class="h-0.5 bg-current w-8 transition-all duration-300 group-hover:w-6"
          ></div>
          <div
            class="h-0.5 bg-current w-6 transition-all duration-300 group-hover:w-8"
          ></div>
          <div
            class="h-0.5 bg-current w-4 transition-all duration-300 group-hover:w-6"
          ></div>
        </button>

        <button
          class="lg:hidden p-2 rounded-md transition-colors {scrolled
            ? 'text-secondary hover:bg-white/50'
            : 'text-white hover:bg-white/10'}"
          onclick={() => (mobileOpen = !mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {#if mobileOpen}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            {:else}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            {/if}
          </svg>
        </button>
      </div>
    </div>

    {#if mobileOpen}
      <div
        class="lg:hidden bg-white/80 backdrop-blur-lg rounded-b-2xl shadow-xl border-t border-white/20 pb-4"
      >
        <ul class="flex flex-col px-4 py-2">
          {#each navLinks as link}
            <li>
              <a
                href={link.href}
                onclick={closeMobile}
                class="block py-3 text-sm font-medium uppercase tracking-wider
                       text-secondary hover:text-primary border-b border-secondary/10
                       last:border-b-0 transition-colors"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
        <div class="px-4 pt-2">
          <a
            href="#contact"
            onclick={closeMobile}
            class="block text-center py-3 text-sm font-semibold uppercase tracking-wider
                   rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors shadow-md"
          >
            Join Now
          </a>
        </div>
      </div>
    {/if}
  </nav>
</header>

<!-- svelte-ignore a11y_click_events_have_key_events -->
{#if sidebarOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 bg-secondary/60 backdrop-blur-sm z-60"
    transition:fade={{ duration: 300 }}
    onclick={closeSidebar}
  ></div>

  <aside
    class="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-70 shadow-2xl border-l border-white/20 flex flex-col"
    transition:fly={{ x: 400, duration: 400, opacity: 1 }}
  >
    <div
      class="flex items-center justify-between p-6 border-b border-secondary/10"
    >
      <span class="text-xs font-bold uppercase tracking-widest text-primary"
        >About Us</span
      >
      <button
        onclick={closeSidebar}
        class="p-2 rounded-full hover:bg-secondary/5 text-secondary transition-colors"
        aria-label="Close sidebar"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div class="p-8 flex flex-col gap-8 overflow-y-auto">
      <div>
        <div class="flex flex-row gap-2 items-center">
          <img
            src="/bandong-ryok-logo.jpeg"
            alt="Bandong Ryok Logo"
            class="w-24 h-24 object-contain rounded-full"
          />
          <h3
            class="text-3xl font-heading font-bold text-secondary leading-tight"
          >
            {brand.name} <br /><span class="text-primary">ITF Taekwondo</span>
          </h3>
        </div>
        <p class="text-body-text text-sm leading-relaxed my-6">
          Welcome to {brand.name}. We are dedicated to teaching traditional ITF
          Taekwondo. Under the guidance of {instructor.displayName}, our Dojang
          focuses on building discipline, respect, and physical excellence in
          every student.
        </p>

        <a
          href="#contact"
          onclick={closeSidebar}
          class="inline-flex items-center justify-center w-full py-3 px-6 text-sm font-semibold uppercase tracking-wider
                 bg-secondary text-white rounded-lg hover:bg-primary transition-colors shadow-md"
        >
          Start Your Journey
        </a>
      </div>

      <div class="mt-auto pt-8 border-t border-secondary/10">
        <h4
          class="text-xs font-bold uppercase tracking-widest text-secondary mb-4"
        >
          Contact Info
        </h4>
        <ul class="space-y-3 text-sm text-body-text">
          <li class="flex items-center gap-3">
            <span>📍</span>
            <span>{contact.location}</span>
          </li>
          {#if contact.phone}
            <li class="flex items-center gap-3">
              <span>📞</span>
              <a
                href="tel:{contact.phone}"
                class="hover:text-primary transition-colors">{contact.phone}</a
              >
            </li>
          {/if}
          <li class="flex items-center gap-3">
            <span>✉️</span>
            <a
              href="mailto:{contact.email}"
              class="hover:text-primary transition-colors">{contact.email}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </aside>
{/if}
