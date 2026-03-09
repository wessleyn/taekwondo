<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { supabase } from "$lib/supabaseClient";
  import type { Snippet } from "svelte";
  import "../../app.css";

  let {
    children,
    data,
  }: { children: Snippet; data: { userEmail: string | null } } = $props();

  const navItems = [
    { href: "/admin", label: "Roster" },
    { href: "/admin/students", label: "+ Add Student" },
  ];

  let mobileOpen = $state(false);
  // Seed from server — no flash, no client round-trip needed
  let userEmail = $state(data.userEmail);

  // Only needed to catch client-side sign-out
  $effect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      userEmail = session?.user?.email ?? null;
      if (!session && page.url.pathname !== "/admin/login") {
        goto("/admin/login");
      }
    });
    return () => subscription.unsubscribe();
  });

  async function signOut() {
    await supabase.auth.signOut();
    goto("/admin/login");
  }
</script>

<!-- Mobile top header -->
<header class="md:hidden sticky top-0 z-50 bg-secondary text-white shadow-lg">
  <div class="flex items-center justify-between px-4 py-3">
    <div class="flex items-center gap-3">
      <img src="/logo.png" alt="Logo" class="w-8 h-8 object-contain" />
      <div>
        <span
          class="font-bold font-heading uppercase tracking-widest text-xs text-white"
          >Bandong Ryok</span
        >
        <span class="block text-[10px] text-primary leading-none"
          >Admin Dashboard</span
        >
      </div>
    </div>
    <button
      type="button"
      onclick={() => (mobileOpen = !mobileOpen)}
      class="p-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label="Toggle menu"
    >
      <span
        class="block w-5 h-0.5 bg-white mb-1 transition-transform {mobileOpen
          ? 'rotate-45 translate-y-1.5'
          : ''}"
      ></span>
      <span
        class="block w-5 h-0.5 bg-white mb-1 transition-opacity {mobileOpen
          ? 'opacity-0'
          : ''}"
      ></span>
      <span
        class="block w-5 h-0.5 bg-white transition-transform {mobileOpen
          ? '-rotate-45 -translate-y-1.5'
          : ''}"
      ></span>
    </button>
  </div>

  {#if mobileOpen}
    <nav class="border-t border-white/10 px-4 py-3 flex flex-col gap-1">
      {#each navItems as item}
        <a
          href={item.href}
          onclick={() => (mobileOpen = false)}
          class="block px-4 py-3 rounded-lg font-bold text-sm transition-colors
            {page.url.pathname === item.href
            ? 'bg-primary/20 text-primary'
            : 'text-gray-300 hover:bg-white/10 hover:text-white'}"
        >
          {item.label}
        </a>
      {/each}
      <a
        href="/"
        onclick={() => (mobileOpen = false)}
        class="block px-4 py-3 text-sm text-gray-400 hover:text-white transition-colors border-t border-white/10 mt-1 pt-4"
      >
        ← Back to Live Site
      </a>
      {#if userEmail}
        <button
          type="button"
          onclick={signOut}
          class="block w-full text-left px-4 py-3 text-sm text-red-400 hover:text-red-300 transition-colors"
        >
          Sign Out
        </button>
      {/if}
    </nav>
  {/if}
</header>

<!-- Desktop layout -->
<div class="min-h-screen bg-gray-50 md:flex">
  <aside
    class="hidden md:flex md:w-64 bg-secondary text-white p-6 shrink-0 flex-col min-h-screen sticky top-0 h-screen"
  >
    <div class="mb-10 flex items-center gap-3">
      <img src="/logo.png" alt="Logo" class="w-10 h-10 object-contain" />
      <div>
        <h2
          class="font-bold font-heading uppercase tracking-widest text-sm text-white"
        >
          Bandong Ryok
        </h2>
        <span class="text-xs text-primary">Admin Dashboard</span>
      </div>
    </div>

    <nav class="space-y-2 flex-1 flex flex-col">
      {#each navItems as item}
        <a
          href={item.href}
          class="block px-4 py-3 rounded-lg font-bold transition-colors text-sm
            {page.url.pathname === item.href
            ? 'bg-primary/20 text-primary'
            : 'text-gray-300 hover:bg-white/10 hover:text-white'}"
        >
          {item.label}
        </a>
      {/each}
      {#if userEmail}
        <button
          type="button"
          onclick={signOut}
          class="block w-full text-left text-sm text-red-400 hover:text-red-300 transition-colors self-end mt-auto p-8"
        >
          Sign Out
        </button>
      {/if}
    </nav>

    <div class="mt-auto pt-6 border-t border-white/10 space-y-2">
      {#if userEmail}
        <p class="text-xs text-gray-500 truncate px-1">{userEmail}</p>
      {/if}
      <a
        href="/"
        class="block text-sm text-gray-400 hover:text-white transition-colors"
      >
        ← Back to Live Site
      </a>
    </div>
  </aside>

  <main class="flex-1 overflow-y-auto">
    {@render children()}
  </main>
</div>
