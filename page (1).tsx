import Link from "next/link";
import { assignments } from "@/lib/mock-data";

export default function AssignmentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Assignment Marketplace</h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Browse open tasks or post your own. Payments in USDT.
          </p>
        </div>
        <Link
          href="/assignments/new"
          className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          + Post Assignment
        </Link>
      </div>

      {/* Filters (UI only for now) */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["All", "100L", "200L", "300L", "400L", "500L"].map((level) => (
          <button
            key={level}
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              level === "All"
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="mt-8 grid gap-4">
        {assignments.map((a) => (
          <article
            key={a.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                    {a.level}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {a.course}
                  </span>
                  <span className="text-xs text-slate-500">
                    Posted {a.postedAt} by {a.postedBy}
                  </span>
                </div>
                <h2 className="mt-2 text-lg font-semibold">{a.title}</h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {a.description}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Deadline: <strong>{a.deadline}</strong>
                </p>
              </div>

              <div className="flex flex-col items-end gap-2 sm:min-w-[120px]">
                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    ${a.price}
                  </p>
                  <p className="text-xs text-slate-500">USDT</p>
                </div>
                <button className="w-full rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700 sm:w-auto">
                  Contact Poster
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {assignments.length === 0 && (
        <p className="mt-12 text-center text-slate-500">
          No open assignments yet. Be the first to post one!
        </p>
      )}
    </div>
  );
}
