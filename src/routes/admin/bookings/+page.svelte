<script lang="ts">
  import { enhance } from "$app/forms";

  let { data } = $props<{
    data: {
      bookings: {
        id: string;
        student_name: string;
        contact_email: string;
        phone: string | null;
        preferred_date: string | null;
        class_type: string | null;
        message: string | null;
        status: "pending" | "confirmed" | "cancelled";
        created_at: string;
      }[];
    };
  }>();

  type Booking = (typeof data.bookings)[number];
  type StatusFilter = "all" | "pending" | "confirmed" | "cancelled";

  let statusFilter = $state<StatusFilter>("all");

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    confirmed: "bg-green-100 text-green-800 border border-green-300",
    cancelled: "bg-red-100 text-red-800 border border-red-300",
  };

  let filtered = $derived(
    statusFilter === "all"
      ? data.bookings
      : data.bookings.filter((b: Booking) => b.status === statusFilter),
  );

  const counts = $derived({
    all: data.bookings.length,
    pending: data.bookings.filter((b: Booking) => b.status === "pending")
      .length,
    confirmed: data.bookings.filter((b: Booking) => b.status === "confirmed")
      .length,
    cancelled: data.bookings.filter((b: Booking) => b.status === "cancelled")
      .length,
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
        Bookings
      </h1>
      <p class="text-sm text-gray-500 mt-1">
        {counts.all} total · {counts.pending} pending
      </p>
    </div>
  </div>

  <!-- Filter tabs -->
  <div class="flex gap-2 mb-6 flex-wrap">
    {#each ["all", "pending", "confirmed", "cancelled"] as StatusFilter[] as tab}
      <button
        type="button"
        onclick={() => (statusFilter = tab)}
        class="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors
          {statusFilter === tab
          ? 'bg-secondary text-white'
          : 'bg-white border border-gray-200 text-gray-500 hover:border-secondary hover:text-secondary'}"
      >
        {tab} ({counts[tab]})
      </button>
    {/each}
  </div>

  <div
    class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
  >
    <table class="w-full text-sm">
      <thead>
        <tr
          class="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100"
        >
          <th class="px-6 py-4">Name</th>
          <th class="px-6 py-4 hidden md:table-cell">Contact</th>
          <th class="px-6 py-4 hidden lg:table-cell">Date Requested</th>
          <th class="px-6 py-4 hidden lg:table-cell">Class</th>
          <th class="px-6 py-4">Status</th>
          <th class="px-6 py-4 text-right">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        {#each filtered as booking (booking.id)}
          <tr class="hover:bg-gray-50 transition-colors group">
            <td class="px-6 py-4">
              <p class="font-semibold text-secondary">{booking.student_name}</p>
              {#if booking.message}
                <p
                  class="text-xs text-gray-400 mt-0.5 max-w-45 truncate"
                  title={booking.message}
                >
                  {booking.message}
                </p>
              {/if}
              <p class="text-xs text-gray-400 mt-0.5">
                {new Date(booking.created_at).toLocaleDateString("en-ZA", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </td>
            <td class="px-6 py-4 hidden md:table-cell">
              <a
                href="mailto:{booking.contact_email}"
                class="text-primary hover:underline block"
                >{booking.contact_email}</a
              >
              {#if booking.phone}
                <a
                  href="tel:{booking.phone}"
                  class="text-gray-500 text-xs hover:underline"
                  >{booking.phone}</a
                >
              {/if}
            </td>
            <td class="px-6 py-4 hidden lg:table-cell text-gray-500">
              {booking.preferred_date
                ? new Date(booking.preferred_date).toLocaleDateString("en-ZA", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "—"}
            </td>
            <td class="px-6 py-4 hidden lg:table-cell text-gray-500 capitalize">
              {booking.class_type ?? "—"}
            </td>
            <td class="px-6 py-4">
              <span
                class="inline-block px-2.5 py-1 rounded-full text-xs font-bold capitalize {statusStyles[
                  booking.status as keyof typeof statusStyles
                ]}"
              >
                {booking.status}
              </span>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2 justify-end flex-wrap">
                {#if booking.status !== "confirmed"}
                  <form method="POST" action="?/updateStatus" use:enhance>
                    <input type="hidden" name="id" value={booking.id} />
                    <input type="hidden" name="status" value="confirmed" />
                    <button
                      type="submit"
                      class="px-3 py-1.5 text-xs font-bold rounded-lg bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors whitespace-nowrap"
                    >
                      Confirm
                    </button>
                  </form>
                {/if}
                {#if booking.status !== "cancelled"}
                  <form method="POST" action="?/updateStatus" use:enhance>
                    <input type="hidden" name="id" value={booking.id} />
                    <input type="hidden" name="status" value="cancelled" />
                    <button
                      type="submit"
                      class="px-3 py-1.5 text-xs font-bold rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors whitespace-nowrap"
                    >
                      Cancel
                    </button>
                  </form>
                {/if}
                {#if booking.status !== "pending"}
                  <form method="POST" action="?/updateStatus" use:enhance>
                    <input type="hidden" name="id" value={booking.id} />
                    <input type="hidden" name="status" value="pending" />
                    <button
                      type="submit"
                      class="px-3 py-1.5 text-xs font-bold rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200 hover:bg-yellow-100 transition-colors whitespace-nowrap"
                    >
                      Reset
                    </button>
                  </form>
                {/if}
              </div>
            </td>
          </tr>
        {:else}
          <tr>
            <td
              colspan="6"
              class="px-6 py-16 text-center text-gray-400 text-sm"
            >
              {statusFilter === "all"
                ? "No bookings yet."
                : `No ${statusFilter} bookings.`}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
