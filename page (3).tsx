import { fundraisers } from "@/lib/mock-data";

export default function FundraisersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Fundraisers</h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Support campus projects and events with crypto donations.
          </p>
        </div>
        <button className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
          + Start a Fundraiser
        </button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {fundraisers.map((f) => {
          const percent = Math.min(100, Math.round((f.raised / f.goal) * 100));
          return (
            <article
              key={f.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-lg font-semibold">{f.title}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {f.description}
              </p>

              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    ${f.raised} raised
                  </span>
                  <span className="text-slate-500">Goal ${f.goal}</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-slate-500">{percent}% funded</p>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>By {f.organizer}</span>
                <span>Ends {f.endsAt}</span>
              </div>

              <button className="mt-5 w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
                Donate USDT
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
