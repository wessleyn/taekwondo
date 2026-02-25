<!-- 
  Schedule.svelte
  Weekly class timetable 
-->
<script lang="ts">
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import { schedule as scheduleConfig } from "$lib/site-config";

  type ClassEntry = {
    name: string;
    time: string;
    color: string;
  };

  const days = scheduleConfig.trainingDays;

  const sessionEntries: ClassEntry[] = [
    {
      name: scheduleConfig.sessions[0].name,
      time: scheduleConfig.sessions[0].time,
      color: "bg-primary/10 text-primary",
    },
    {
      name: scheduleConfig.sessions[1].name,
      time: scheduleConfig.sessions[1].time,
      color: "bg-secondary/10 text-secondary",
    },
  ];

  const schedule: Record<string, ClassEntry[]> = Object.fromEntries(
    days.map((day) => [day, sessionEntries]),
  );

  // Private lessons also available — pricing by negotiation
</script>

<section id="schedule" class="py-20 lg:py-28 bg-body-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading subtitle="Weekly Timetable" title="Class Schedule" />

    <!-- Desktop table -->
    <div class="mt-14 overflow-x-auto hidden md:block">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            {#each days as day}
              <th
                class="px-4 py-3 text-sm font-semibold uppercase tracking-wider
								       text-white bg-secondary first:rounded-tl-lg last:rounded-tr-lg"
              >
                {day}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody>
          <!-- Row for first class -->
          <tr>
            {#each days as day}
              <td class="px-3 py-3 border border-tertiary align-top">
                {#if schedule[day]?.[0]}
                  <div class="rounded-lg p-3 {schedule[day][0].color}">
                    <p class="text-xs font-bold">{schedule[day][0].name}</p>
                    <p class="text-xs opacity-70 mt-1">
                      {schedule[day][0].time}
                    </p>
                  </div>
                {/if}
              </td>
            {/each}
          </tr>
          <!-- Row for second class -->
          <tr>
            {#each days as day}
              <td class="px-3 py-3 border border-tertiary align-top">
                {#if schedule[day]?.[1]}
                  <div class="rounded-lg p-3 {schedule[day][1].color}">
                    <p class="text-xs font-bold">{schedule[day][1].name}</p>
                    <p class="text-xs opacity-70 mt-1">
                      {schedule[day][1].time}
                    </p>
                  </div>
                {/if}
              </td>
            {/each}
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="mt-14 md:hidden space-y-4">
      {#each days as day}
        <div
          class="bg-white rounded-xl shadow-sm border border-tertiary overflow-hidden"
        >
          <div
            class="bg-secondary text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider"
          >
            {day}
          </div>
          <div class="p-4 space-y-3">
            {#each schedule[day] as cls}
              <div class="rounded-lg p-3 {cls.color}">
                <p class="text-sm font-bold">{cls.name}</p>
                <p class="text-xs opacity-70 mt-1">{cls.time}</p>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
