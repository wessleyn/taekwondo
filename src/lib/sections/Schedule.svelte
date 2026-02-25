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
    duration: string;
  };

  const days = scheduleConfig.trainingDays;

  const sessionColors = [
    "bg-primary/10 text-primary",
    "bg-secondary/10 text-secondary",
    "bg-amber-100 text-amber-700",
    "bg-rose-100 text-rose-700",
    "bg-emerald-100 text-emerald-700",
  ];

  const sessionEntries: ClassEntry[] = scheduleConfig.sessions.map((s, i) => ({
    name: s.name,
    time: s.time,
    color: sessionColors[i % sessionColors.length],
    duration: s.duration,
  }));

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
          {#each sessionEntries as _, i}
            <tr>
              {#each days as day}
                <td class="px-3 py-3 border border-tertiary align-top">
                  {#if schedule[day]?.[i]}
                    <div class="rounded-lg p-3 {schedule[day][i].color}">
                      <p class="text-xs font-bold">{schedule[day][i].name}</p>
                      <p class="text-xs opacity-70 mt-1">
                        {schedule[day][i].time}
                      </p>
                      <p class="text-[10px] opacity-50 mt-0.5">
                        {schedule[day][i].duration}
                      </p>
                    </div>
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
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
