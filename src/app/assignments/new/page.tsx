"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewAssignmentPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In a real app this would call an API / Supabase
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <div className="text-5xl">✅</div>
        <h1 className="mt-4 text-2xl font-bold">Assignment Posted!</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Other students can now see it and reach out to you.
        </p>
        <Link
          href="/assignments"
          className="mt-6 inline-block rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Back to Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <h1 className="text-2xl font-bold">Post an Assignment</h1>
      <p className="mt-1 text-slate-600 dark:text-slate-400">
        Set a clear price and deadline. Funds can later be locked in escrow.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            required
            type="text"
            placeholder="e.g. CSC 101 – Python Assignment"
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Course Code</label>
            <input
              required
              type="text"
              placeholder="CSC 101"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Level</label>
            <select
              required
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900"
            >
              <option value="">Select</option>
              <option>100L</option>
              <option>200L</option>
              <option>300L</option>
              <option>400L</option>
              <option>500L</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            required
            rows={4}
            placeholder="What needs to be done? Any specific requirements?"
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Price (USDT)</label>
            <input
              required
              type="number"
              min="1"
              step="0.5"
              placeholder="15"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Deadline</label>
            <input
              required
              type="date"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900"
            />
          </div>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
          By posting you confirm you understand university rules on academic work.
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Post Assignment
        </button>
      </form>
    </div>
  );
}
