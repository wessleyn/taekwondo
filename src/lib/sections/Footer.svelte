<script lang="ts">
  import {
    brand,
    contact,
    footer as footerConfig,
    socials as socialLinks
  } from "$lib/site-config";
  // 1. Import the specific icons from Lucide Svelte
  import {
    Facebook,
    Instagram,
    Twitter,

    Youtube
  } from "lucide-svelte";

  let showScrollTop = $state(false);

  function handleScroll() {
    showScrollTop = window.scrollY > 500;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const quickLinks = [
    { label: "Instructor", href: "/#sensei" },
    { label: "Students", href: "/students" },
    { label: "Schedule", href: "/#schedule" },
    { label: "Pricing", href: "/#pricing" },
  ];

  const legalLinks = [
    { label: "Policies", href: "/policies" },
    { label: "Contact Us", href: "/#contact" },
    { label: "About", href: "/#milestones" },
    { label: "Gallery", href: "/#gallery" },
  ];

  // 2. Update the socials array to hold the imported component reference, not a string
  const socials = [
    { label: "Facebook", icon: Facebook, href: socialLinks.facebook },
    { label: "Instagram", icon: Instagram, href: socialLinks.instagram },
    { label: "Twitter/X", icon: Twitter, href: socialLinks.twitterX },
    // Replaced Pinterest with a generic chat bubble since WhatsApp is often more relevant for Dojangs, 
    // but you can swap this back if you specifically need Pinterest!
    { label: "YouTube", icon: Youtube, href: socialLinks.youtube }, 
  ];
</script>

<svelte:window onscroll={handleScroll} />

<footer class="bg-secondary text-gray-400 pt-16 pb-6 border-t border-white/5">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10"
    >
      <div>
        <a href="/#hero" class="flex items-center gap-2 mb-4 group">
          <img src="/logo.png" alt="Bandong Ryok Logo" class="w-12 h-12 object-contain" />
          <span class="text-xl font-bold font-heading text-white group-hover:text-primary transition-colors"
            >{brand.nameShort}</span
          >
        </a>
        <p class="text-sm leading-relaxed">
          {brand.description}
        </p>
      </div>

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

      <div>
        <h4
          class="text-white text-sm font-semibold uppercase tracking-wider mb-4"
        >
          Contact Us
        </h4>
        <ul class="space-y-3 text-sm">
          <li class="flex items-start gap-2">
            <span class="text-primary mt-0.5">✉️</span>
            <a
              href="mailto:{contact.email}"
              class="hover:text-primary text-gray-400 transition-colors">{contact.email}</a
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary mt-0.5">💬</span>
            <a
              href="https://wa.me/{contact.whatsapp.replace(/\s+/g, '')}"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary text-gray-400 transition-colors">WhatsApp: {contact.whatsapp}</a
            >
          </li>
        </ul>

        <div class="flex gap-3 mt-6">
          {#each socials as s}
            <a
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center
                     text-gray-400 hover:bg-primary hover:text-white hover:border-primary hover:scale-110
                     transition-all duration-300"
            >
              <!-- svelte-ignore svelte_component_deprecated -->
              <svelte:component this={s.icon} size={18} strokeWidth={2} />
            </a>
          {/each}
        </div>
      </div>
    </div>

    <div
      class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <p class="text-xs">
        {footerConfig.copyright}
      </p>
      <p class="text-xs">
        Made with <span class="text-primary animate-pulse inline-block">♥</span> by
        <a
          href={footerConfig.madeBy.url}
          target="_blank"
          class="hover:text-primary text-white transition-colors">{footerConfig.madeBy.name}</a
        >
      </p>
    </div>
  </div>
</footer>

{#if showScrollTop}
  <button
    onclick={scrollToTop}
    aria-label="Back to top"
    class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-white
           shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)] hover:bg-white hover:text-primary hover:shadow-xl
           flex items-center justify-center transition-all duration-300 cursor-pointer
           animate-bounce"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
{/if}