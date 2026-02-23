<!-- 
  SectionHeading.svelte
  Reusable section heading with subtitle + title 
-->
<script lang="ts">
  interface Props {
    subtitle: string;
    title: string;
    align?: "center" | "left";
    light?: boolean;
  }

  let { subtitle, title, align = "center", light = false }: Props = $props();
</script>

<div class={align === "center" ? "text-center" : "text-left"}>
  <span
    class="inline-block text-sm font-semibold uppercase tracking-[0.2em] mb-2
		       {light ? 'text-border-accent' : 'text-primary'}"
  >
    {subtitle}
  </span>
  <h2
    class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
		       {light ? 'text-white' : 'text-secondary'}"
  >
    {title}
  </h2>
</div>
