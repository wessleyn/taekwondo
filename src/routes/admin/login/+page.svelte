<script lang="ts">
  import { ShieldAlert } from "lucide-svelte";
  let { form } = $props();
</script>

<div
  class="min-h-screen bg-secondary flex items-center justify-center px-4 relative overflow-hidden"
>
  <div
    class="absolute w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
  ></div>

  <div
    class="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl"
  >
    <div class="text-center mb-8">
      <div
        class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4"
      >
        <ShieldAlert size={32} />
      </div>
      <h1
        class="text-3xl font-bold font-heading text-white uppercase tracking-widest"
      >
        Admin Portal
      </h1>
      <p class="text-gray-400 mt-2 text-sm">Authorized personnel only.</p>
    </div>

    <form method="POST" class="space-y-6">
      <div>
        <label
          for="password"
          class="block text-sm font-medium text-gray-300 mb-2"
          >Master Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          required
          class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          placeholder="••••••••"
        />
      </div>

      {#if form?.incorrect}
        <p
          class="text-red-400 text-sm font-bold text-center bg-red-400/10 py-2 rounded"
        >
          Incorrect password. Try again.
        </p>
      {/if}

      <button
        type="submit"
        class="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors uppercase tracking-wider"
      >
        Authenticate
      </button>
    </form>
  </div>
</div>
