<script lang="ts">
  import type { Snippet } from "svelte";
  import "../../app.css";
  let { children }: { children: Snippet } = $props();
</script>

<div class="min-h-screen bg-gray-50 flex flex-col md:flex-row">
  <aside
    class="w-full md:w-64 bg-secondary text-white p-6 shrink-0 flex flex-col"
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

    <nav class="space-y-2 flex-1">
      <a
        href="/admin/students"
        class="block px-4 py-3 rounded-lg bg-primary/20 text-primary font-bold transition-colors"
      >
        Manage Students
      </a>
    </nav>

    <div class="mt-auto pt-6 border-t border-white/10">
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
