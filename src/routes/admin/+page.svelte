<script lang="ts">
  let { data } = $props<{
    students: {
      id: string;
      name: string;
      belt_rank: string;
      belt_order: number;
      date_joined: string;
      image_url: string | null;
    }[];
  }>();

  const beltColors: Record<string, string> = {
    "Black Belt (Dan)": "bg-black text-white",
    "Red Belt": "bg-red-600 text-white",
    "Blue Belt": "bg-blue-600 text-white",
    "Green Belt": "bg-green-600 text-white",
    "Yellow Belt": "bg-yellow-400 text-black",
    "White Belt": "bg-gray-100 text-gray-800 border border-gray-300",
  };

  type Student = (typeof data.students)[number];
  type SortKey = 'name' | 'belt_order' | 'date_joined';

  let search = $state("");
  let sortKey = $state<SortKey>('belt_order');
  let sortDir = $state<'asc' | 'desc'>('asc');

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey = key;
      sortDir = 'asc';
    }
  }

  let filtered = $derived.by(() => {
    const q = search.trim().toLowerCase();
    const list: Student[] = q
      ? data.students.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.belt_rank.toLowerCase().includes(q),
        )
      : [...data.students];

    return list.sort((a, b) => {
      let av = a[sortKey] ?? '';
      let bv = b[sortKey] ?? '';
      if (typeof av === 'string') av = av.toLowerCase();
      if (typeof bv === 'string') bv = bv.toLowerCase();
      if (av < bv) return sortDir === 'asc' ? -1 : 1;
      if (av > bv) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  });
</script>

<div class="p-6 md:p-10">
  <div
    class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
  >
    <div>
      <h1
        class="text-2xl font-bold font-heading text-secondary uppercase tracking-widest"
      >
        Students
      </h1>
      <p class="text-sm text-gray-500 mt-1">
        {data.students.length} total members
      </p>
    </div>
    <div class="flex gap-3">
      <input
        bind:value={search}
        type="search"
        placeholder="Search name or belt..."
        class="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 w-56"
      />
      <a
        href="/admin/students"
        class="bg-primary text-white font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors whitespace-nowrap"
      >
        + Add Student
      </a>
    </div>
  </div>

  <div
    class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
  >
    <table class="w-full text-sm">
      <thead>
        <tr
          class="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100"
        >
          <th class="px-6 py-4">
            <button
              type="button"
              onclick={() => toggleSort('name')}
              class="inline-flex items-center gap-1 hover:text-secondary transition-colors"
            >
              Student
              <span class="text-[10px] {sortKey === 'name' ? 'text-primary' : 'opacity-30'}">
                {sortKey === 'name' ? (sortDir === 'asc' ? '▲' : '▼') : '⇅'}
              </span>
            </button>
          </th>
          <th class="px-6 py-4">
            <button
              type="button"
              onclick={() => toggleSort('belt_order')}
              class="inline-flex items-center gap-1 hover:text-secondary transition-colors"
            >
              Belt Rank
              <span class="text-[10px] {sortKey === 'belt_order' ? 'text-primary' : 'opacity-30'}">
                {sortKey === 'belt_order' ? (sortDir === 'asc' ? '▲' : '▼') : '⇅'}
              </span>
            </button>
          </th>
          <th class="px-6 py-4 hidden sm:table-cell">
            <button
              type="button"
              onclick={() => toggleSort('date_joined')}
              class="inline-flex items-center gap-1 hover:text-secondary transition-colors"
            >
              Date Joined
              <span class="text-[10px] {sortKey === 'date_joined' ? 'text-primary' : 'opacity-30'}">
                {sortKey === 'date_joined' ? (sortDir === 'asc' ? '▲' : '▼') : '⇅'}
              </span>
            </button>
          </th>
          <th class="px-6 py-4 text-right">Action</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        {#each filtered as student}
          <tr
            class="hover:bg-primary/5 transition-colors cursor-pointer group"
            onclick={() => (window.location.href = `/admin/${student.id}`)}
          >
            <td class="px-6 py-4">
              <div class="flex items-center gap-3">
                <img
                  src={student.image_url ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random`}
                  alt={student.name}
                  class="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                />
                <span class="font-semibold text-secondary">{student.name}</span>
              </div>
            </td>
            <td class="px-6 py-4">
              <span
                class="inline-block px-2.5 py-1 rounded-full text-xs font-bold {beltColors[
                  student.belt_rank
                ] ?? 'bg-gray-100 text-gray-700'}"
              >
                {student.belt_rank}
              </span>
            </td>
            <td class="px-6 py-4 hidden sm:table-cell text-gray-500">
              {student.date_joined
                ? new Date(student.date_joined).toLocaleDateString("en-ZA", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : "—"}
            </td>
            <td class="px-6 py-4 text-right">
              <a
                href="/admin/{student.id}"
                onclick={(e) => e.stopPropagation()}
                class="text-gray-500 hover:text-primary font-semibold text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
              >
                View / Edit →
              </a>
            </td>
          </tr>
        {:else}
          <tr>
            <td
              colspan="4"
              class="px-6 py-16 text-center text-gray-400 text-sm"
            >
              {search
                ? "No students match your search."
                : "No students yet. Add your first one!"}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
