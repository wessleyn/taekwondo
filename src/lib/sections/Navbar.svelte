<!-- 
  Navbar.svelte
  Sticky navigation header with mobile menu 
-->
<script lang="ts">
  let mobileOpen = $state(false);
  let scrolled = $state(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Instructor", href: "#sensei" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  function handleScroll() {
    scrolled = window.scrollY > 50;
  }

  function closeMobile() {
    mobileOpen = false;
  }
</script>

<svelte:window onscroll={handleScroll} />

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
	       {scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}"
>
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="#hero" class="flex items-center gap-2 group">
        <img src="/logo.png" alt="Bandong Ryok Logo" class="w-20 h-20" />
        <span
          class="text-xl font-bold font-heading tracking-tight
					       {scrolled ? 'text-secondary' : 'text-white'}
					       group-hover:text-primary transition-colors"
        >
          Bandong Ryok
        </span>
      </a>

      <!-- Desktop nav -->
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

      <!-- CTA + Mobile toggle -->
      <div class="flex items-center gap-4">
        <a
          href="#contact"
          class="hidden sm:inline-flex items-center px-6 py-2 text-xs font-semibold
					       uppercase tracking-wider rounded bg-primary text-white
					       hover:bg-primary-dark transition-colors"
        >
          Join Now
        </a>

        <!-- Hamburger -->
        <button
          class="lg:hidden p-2 rounded-md {scrolled
            ? 'text-secondary'
            : 'text-white'}"
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

    <!-- Mobile menu -->
    {#if mobileOpen}
      <div
        class="lg:hidden bg-white rounded-b-2xl shadow-xl border-t border-tertiary pb-4"
      >
        <ul class="flex flex-col px-4 py-2">
          {#each navLinks as link}
            <li>
              <a
                href={link.href}
                onclick={closeMobile}
                class="block py-3 text-sm font-medium uppercase tracking-wider
								       text-secondary hover:text-primary border-b border-tertiary
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
						       rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            Join Now
          </a>
        </div>
      </div>
    {/if}
  </nav>
</header>
