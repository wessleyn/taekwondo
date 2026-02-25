<!-- 
  IconBox.svelte 
  Feature card with icon, title, description
-->
<script lang="ts">
  import type { ComponentType } from "svelte";

  interface Props {
    icon: ComponentType;
    title: string;
    description: string;
  }

  let { icon: Icon, title, description }: Props = $props();
</script>

<div
  class="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl
	       border border-tertiary hover:border-primary/20
	       transition-all duration-300 text-center"
>
  <div
    class="w-16 h-16 mx-auto mb-6 flex items-center justify-center
		       rounded-full bg-primary/10 text-primary text-3xl
		       group-hover:bg-primary group-hover:text-white
		       transition-all duration-300"
  >
    <Icon size={32} />
  </div>
  <h4 class="text-xl font-bold text-secondary mb-3">{title}</h4>
  <p class="text-body-text text-sm leading-relaxed">{description}</p>
</div>
