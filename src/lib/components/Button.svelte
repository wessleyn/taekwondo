<!-- 
  Button.svelte
  Reusable CTA button with variants 
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href?: string;
    variant?: "primary" | "outline" | "white";
    children: Snippet;
  }

  let { href = "#", variant = "primary", children }: Props = $props();

  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold uppercase tracking-wider rounded transition-all duration-300 cursor-pointer";

  const variantClasses: Record<string, string> = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-secondary hover:bg-tertiary shadow-lg",
  };
</script>

<a {href} class="{baseClasses} {variantClasses[variant]}">
  {@render children()}
</a>
