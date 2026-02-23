<!-- 
  Footer.svelte
  Site footer with links, contact info, and back-to-top 
-->
<script lang="ts">
  let showScrollTop = $state(false);

  function handleScroll() {
    showScrollTop = window.scrollY > 500;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "Instructor", href: "#sensei" },
    { label: "Schedule", href: "#schedule" },
    { label: "Pricing", href: "#pricing" },
  ];

  const legalLinks = [
    { label: "Policies", href: "/policies" },
    { label: "Contact Us", href: "#contact" },
    { label: "About", href: "#milestones" },
    { label: "Gallery", href: "#gallery" },
  ];

  const socials = [
    { label: "Facebook", icon: "fb", href: "#" },
    { label: "Instagram", icon: "ig", href: "#" },
    { label: "Twitter/X", icon: "x", href: "#" },
    { label: "Pinterest", icon: "pin", href: "#" },
  ];
</script>

<svelte:window onscroll={handleScroll} />

<footer class="bg-secondary text-gray-400 pt-16 pb-6">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10"
    >
      <!-- Brand -->
      <div>
        <a href="#hero" class="flex items-center gap-2 mb-4">
          <span class="text-3xl">🥋</span>
          <span class="text-xl font-bold font-heading text-white"
            >Bandong Ryok I.T.F</span
          >
        </a>
        <p class="text-sm leading-relaxed">
          Building tomorrow's champions through ITF Taekwondo. Discipline,
          respect, and self-improvement for every student.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4
          class="text-white text-sm font-semibold uppercase tracking-wider mb-4"
        >
          Quick Links
        </h4>
        <ul class="space-y-2">
          {#each quickLinks as link}
            <li>
              <a
                href={link.href}
                class="text-sm hover:text-primary text-gray-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h4
          class="text-white text-sm font-semibold uppercase tracking-wider mb-4"
        >
          Information
        </h4>
        <ul class="space-y-2">
          {#each legalLinks as link}
            <li>
              <a
                href={link.href}
                class="text-sm hover:text-primary text-gray-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4
          class="text-white text-sm font-semibold uppercase tracking-wider mb-4"
        >
          Contact Us
        </h4>
        <ul class="space-y-3 text-sm">
          <li class="flex items-start gap-2">
            <span class="text-primary mt-0.5">✉️</span>
            <span>bandongryok.itf@gmail.com</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary mt-0.5">🕐</span>
            <span>Sat–Wed: 5 PM – 9 PM</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary mt-0.5">🥋</span>
            <span>Instructor: Yasini Saidi (3rd Dan)</span>
          </li>
        </ul>

        <!-- Socials -->
        <div class="flex gap-3 mt-5">
          {#each socials as s}
            <a
              href={s.href}
              aria-label={s.label}
              class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
							       text-xs text-white hover:bg-primary hover:text-white
							       transition-colors"
            >
              {s.icon}
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div
      class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <p class="text-xs">
        © 2026 Bandong Ryok I.T.F Taekwon-Do Club. All Rights Reserved.
      </p>
      <p class="text-xs">
        Made with <span class="text-primary">♥</span>  by <a href="https://wessleyn.me" target="_blank" class="hover:text-primary text-white">Wessley N.</a>
        
      </p>
    </div>
  </div>
</footer>

<!-- Back to top button -->
{#if showScrollTop}
  <button
    onclick={scrollToTop}
    aria-label="Back to top"
    class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-white
		       shadow-lg hover:bg-primary-dark hover:shadow-xl
		       flex items-center justify-center transition-all duration-300 cursor-pointer
		       animate-bounce"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
{/if}
