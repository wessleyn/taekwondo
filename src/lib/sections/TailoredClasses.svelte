<!--
  TailoredClasses.svelte
  "Beginner to Advanced" section with class category cards (dark bg)
-->
<script lang="ts">
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import { instructor } from "$lib/site-config";

  const classes = [
    {
      tag: "Foundation",
      title: "Kids Taekwondo Program",
      description:
        "Fun, structured ITF Taekwondo classes for children. Building confidence, discipline, and coordination from white belt onward.",
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&h=500&fit=crop",
      date: "Ages 5–12",
      author: instructor.shortName,
    },
    {
      tag: "Main Event",
      title: "Taekwondo Grading Ceremony",
      description:
        "Regular belt testing and grading ceremonies for all students. Demonstrate patterns, sparring, and theory knowledge.",
      image:
        "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=500&h=500&fit=crop",
      date: "Quarterly",
      author: instructor.shortName,
    },
  ];

  const featured = {
    tag: "Development",
    title: "Mindful Taekwondo",
    description:
      "Combining mental discipline with physical technique. Focus on patterns (Tul), self-defense, and sparring at advanced levels.",
    image: "/girl.jpeg",
    date: "Ongoing",
    author: `${instructor.title} ${instructor.fullName}`,
    covers: [
      "ITF Patterns from Chon-Ji to advanced",
      "Controlled sparring & self-defense drills",
      "Physical conditioning & flexibility training",
    ],
  };
</script>

<section id="classes" class="py-20 lg:py-28 bg-secondary">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      subtitle="Tailored Classes"
      title="Beginner to Advanced"
      light
    />

    <p
      class="text-center text-gray-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed"
    >
      Our programs are designed for all skill levels — from first-time students
      to advanced practitioners preparing for competition and grading.
    </p>

    <div class="grid lg:grid-cols-2 gap-6 mt-14">
      <!-- Left column: stacked cards -->
      <div class="space-y-6">
        {#each classes as cls}
          <div
            class="group bg-quaternary rounded-2xl overflow-hidden
						       border border-white/5 hover:border-primary/30
						       transition-all duration-300 flex flex-col sm:flex-row"
          >
            <!-- Text -->
            <div class="p-6 flex-1">
              <span
                class="text-xs font-semibold uppercase tracking-wider text-primary"
              >
                {cls.tag}
              </span>
              <h3
                class="text-2xl font-bold font-heading text-white mt-2 leading-tight"
              >
                {cls.title}
              </h3>
              <p class="text-gray-400 text-sm mt-3 leading-relaxed">
                {cls.description}
              </p>
              <div class="flex items-center gap-4 mt-4 text-xs text-gray-500">
                <span class="flex items-center gap-1">
                  <span class="text-primary">📅</span>
                  {cls.date}
                </span>
                <span class="flex items-center gap-1">
                  <span class="text-primary">👤</span>
                  {cls.author}
                </span>
              </div>
            </div>
            <!-- Image -->
            <div class="w-full sm:w-40 h-40 sm:h-auto shrink-0">
              <img
                src={cls.image}
                alt={cls.title}
                loading="lazy"
                class="w-full h-full object-cover rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl
								       group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        {/each}
      </div>

      <!-- Right column: featured card -->
      <div
        class="group bg-quaternary rounded-2xl overflow-hidden
				       border border-white/5 hover:border-primary/30
				       transition-all duration-300 relative"
      >
        <!-- Image portion -->
        <div class="relative h-64 lg:h-72 overflow-hidden">
          <img
            src={featured.image}
            alt={featured.title}
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-quaternary via-quaternary/60 to-transparent"
          ></div>

          <!-- Overlay text -->
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <span
              class="text-xs font-semibold uppercase tracking-wider text-primary"
            >
              {featured.tag}
            </span>
            <h3
              class="text-3xl font-bold font-heading text-white mt-1 leading-tight"
            >
              {featured.title}
            </h3>
          </div>
        </div>

        <!-- Text content -->
        <div class="p-6">
          <p class="text-gray-400 text-sm leading-relaxed">
            {featured.description}
          </p>

          <div class="flex items-center gap-4 mt-4 text-xs text-gray-500">
            <span class="flex items-center gap-1">
              <span class="text-primary">📅</span>
              {featured.date}
            </span>
            <span class="flex items-center gap-1">
              <span class="text-primary">👤</span>
              {featured.author}
            </span>
          </div>

          <!-- Training covers list -->
          <h4 class="text-lg font-bold font-heading text-white mt-6 uppercase">
            Training Covers:
          </h4>
          <ul class="mt-3 space-y-2">
            {#each featured.covers as item}
              <li class="flex items-start gap-2 text-sm text-gray-400">
                <span class="text-primary mt-0.5 shrink-0">✦</span>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
