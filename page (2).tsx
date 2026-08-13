import { events } from "@/lib/mock-data";

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Events & Clubs</h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Discover what’s happening on campus and join student communities.
          </p>
        </div>
        <button className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
          + Create Event / Club
        </button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <article
            key={e.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center gap-2">
              <span
                className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                  e.type === "event"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
                    : "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300"
                }`}
              >
                {e.type === "event" ? "Event" : "Club"}
              </span>
              <span className="text-xs text-slate-500">{e.date}</span>
            </div>
            <h2 className="mt-3 text-lg font-semibold">{e.title}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {e.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>📍 {e.location}</span>
              <span>{e.organizer}</span>
            </div>
            <button className="mt-4 w-full rounded-lg border border-slate-200 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
              {e.type === "event" ? "RSVP / Interested" : "Join Club"}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
