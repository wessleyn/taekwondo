<!-- 
  Schedule.svelte
  Weekly class timetable 
-->
<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';

	type ClassEntry = {
		name: string;
		time: string;
		color: string;
	};

	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const schedule: Record<string, ClassEntry[]> = {
		Monday: [
			{ name: 'Karate Fundamentals', time: '9:00 – 10:30', color: 'bg-primary/10 text-primary' },
			{ name: 'Black Belt Focus', time: '17:00 – 18:30', color: 'bg-secondary/10 text-secondary' }
		],
		Tuesday: [
			{ name: 'Black Belt Focus', time: '10:00 – 12:00', color: 'bg-secondary/10 text-secondary' },
			{ name: 'Karate Fundamentals', time: '14:00 – 15:30', color: 'bg-primary/10 text-primary' }
		],
		Wednesday: [
			{ name: 'Karate Fundamentals', time: '9:00 – 10:30', color: 'bg-primary/10 text-primary' },
			{ name: 'Weapons Training', time: '16:00 – 17:30', color: 'bg-amber-100 text-amber-800' }
		],
		Thursday: [
			{ name: 'Black Belt Focus', time: '10:00 – 12:00', color: 'bg-secondary/10 text-secondary' },
			{ name: 'Karate Fundamentals', time: '13:00 – 14:15', color: 'bg-primary/10 text-primary' }
		],
		Friday: [
			{ name: 'Karate Fundamentals', time: '12:30 – 14:00', color: 'bg-primary/10 text-primary' },
			{ name: 'Fitness Integration', time: '16:00 – 17:00', color: 'bg-emerald-100 text-emerald-800' }
		],
		Saturday: [
			{ name: 'Black Belt Focus', time: '9:00 – 11:00', color: 'bg-secondary/10 text-secondary' },
			{ name: 'Karate Fundamentals', time: '13:00 – 14:30', color: 'bg-primary/10 text-primary' }
		]
	};
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
										<p class="text-xs opacity-70 mt-1">{schedule[day][0].time}</p>
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
										<p class="text-xs opacity-70 mt-1">{schedule[day][1].time}</p>
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
				<div class="bg-white rounded-xl shadow-sm border border-tertiary overflow-hidden">
					<div class="bg-secondary text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider">
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
