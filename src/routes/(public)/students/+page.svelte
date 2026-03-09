<script lang="ts">
  import {
    Circle,
    Cloud,
    Leaf,
    Mountain,
    Shield,
    TriangleAlert,
  } from "lucide-svelte";
  import { fade } from "svelte/transition";

  let { data } = $props();

  const beltDefinitions = [
    {
      level: "Black Belt",
      meaning:
        "Signifies maturity and proficiency in Taekwondo. Impervious to darkness and fear.",
      colorClass: "bg-black text-white",
      borderClass: "border-black",
      icon: Shield,
    },
    {
      level: "Black Stripe",
      meaning:
        "Approaching black belt — the student has mastered red belt and stands at the threshold.",
      colorClass: "bg-red-900 text-white",
      borderClass: "border-red-900",
      icon: Shield,
    },
    {
      level: "Red Belt",
      meaning:
        "Signifies danger, cautioning the student to exercise control and warning the opponent.",
      colorClass: "bg-red-600 text-white",
      borderClass: "border-red-600",
      icon: TriangleAlert,
    },
    {
      level: "Red Stripe",
      meaning:
        "Blue-red transition — the student's power increases as they near the red belt level.",
      colorClass: "bg-purple-700 text-white",
      borderClass: "border-purple-700",
      icon: TriangleAlert,
    },
    {
      level: "Blue Belt",
      meaning:
        "Signifies the Heaven, towards which the plant matures into a towering tree.",
      colorClass: "bg-blue-600 text-white",
      borderClass: "border-blue-600",
      icon: Cloud,
    },
    {
      level: "Blue Stripe",
      meaning:
        "Green-blue transition — the student's knowledge deepens as they reach toward the sky.",
      colorClass: "bg-teal-600 text-white",
      borderClass: "border-teal-600",
      icon: Cloud,
    },
    {
      level: "Green Belt",
      meaning:
        "Signifies the plant's growth as Taekwondo skills begin to develop.",
      colorClass: "bg-green-600 text-white",
      borderClass: "border-green-600",
      icon: Leaf,
    },
    {
      level: "Green Stripe",
      meaning:
        "Yellow-green transition — the foundations are set and the student begins to grow.",
      colorClass: "bg-lime-500 text-black",
      borderClass: "border-lime-500",
      icon: Leaf,
    },
    {
      level: "Yellow Belt",
      meaning:
        "Signifies the Earth, from which a plant sprouts and takes root as the foundation is laid.",
      colorClass: "bg-yellow-400 text-black",
      borderClass: "border-yellow-400",
      icon: Mountain,
    },
    {
      level: "Yellow Stripe",
      meaning:
        "The first step — the beginner has shown commitment and earned their first stripe.",
      colorClass: "bg-yellow-200 text-black border border-yellow-400",
      borderClass: "border-yellow-300",
      icon: Mountain,
    },
    {
      level: "White Belt",
      meaning:
        "Signifies innocence, as that of a beginner student who has no previous knowledge.",
      colorClass: "bg-white text-secondary border border-gray-300",
      borderClass: "border-gray-300",
      icon: Circle,
    },
  ];

  // 3. Dynamically group the database students into the correct rank arrays
  // This automatically updates if the database data changes
  let groupedRanks = $derived(
    beltDefinitions
      .map((def) => {
        return {
          ...def,
          // Filter students from the database that match this belt level
          students: data.students.filter(
            (student: any) => student.belt_rank === def.level,
          ),
        };
      })
      .filter((rank) => rank.students.length > 0), // Only show belts that actually have students
  );
</script>

<div class="min-h-screen bg-body-bg pt-32 pb-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-20">
      <span
        class="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4"
      >
        Bandong Ryok Family
      </span>
      <h1
        class="text-5xl md:text-6xl font-bold font-heading text-secondary mb-6 uppercase tracking-tight"
      >
        Student Roster
      </h1>
      <p class="text-body-text text-lg leading-relaxed">
        From our dedicated senior black belts down to our newest white belts,
        meet the martial artists who make up our Dojang.
      </p>
    </div>

    <div
      class="space-y-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 before:to-transparent"
    >
      {#each groupedRanks as rank, i}
        {@const RankIcon = rank.icon}
        <div
          class="relative z-10 flex flex-col items-center md:items-center"
          in:fade={{ delay: i * 150, duration: 600 }}
        >
          <div
            class="flex flex-col items-start md:items-center mb-10 w-full md:w-auto pl-12 md:pl-0 group relative z-10"
          >
            <div
              class="flex items-center gap-4 bg-white pr-6 pl-2 py-2 rounded-full shadow-md border border-gray-100 transition-transform duration-300 group-hover:scale-105 z-20"
            >
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center shadow-inner {rank.colorClass}"
              >
                <RankIcon size={20} strokeWidth={2.5} />
              </div>
              <h2
                class="text-xl font-bold font-heading text-secondary uppercase tracking-widest"
              >
                {rank.level}
              </h2>
            </div>

            <div
              class="mt-3 md:mt-4 bg-white/80 backdrop-blur-md px-5 py-3 rounded-xl border border-gray-200 shadow-sm max-w-xs md:max-w-sm text-left md:text-center transition-transform duration-300 group-hover:-translate-y-1 z-10"
            >
              <p
                class="text-xs sm:text-sm text-body-text italic font-medium leading-relaxed"
              >
                "{rank.meaning}"
              </p>
            </div>
          </div>

          <div
            class="flex flex-wrap justify-center gap-6 md:gap-10 px-8 md:px-0 w-full z-10"
          >
            {#each rank.students as student}
              <div
                class="flex flex-col items-center w-32 sm:w-40 group cursor-pointer"
              >
                <div
                  class="relative w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full p-1 bg-white shadow-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"
                >
                  <div
                    class="absolute inset-0 rounded-full border-4 {rank.borderClass} opacity-80 group-hover:opacity-100 transition-opacity"
                  ></div>

                  <img
                    src={student.image_url ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random`}
                    alt={student.name}
                    class="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>

                <h3
                  class="text-sm sm:text-base font-bold text-secondary text-center leading-tight mb-1 group-hover:text-primary transition-colors"
                >
                  {student.name}
                </h3>
                <span
                  class="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400 text-center"
                >
                  {student.belt_rank}
                </span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
