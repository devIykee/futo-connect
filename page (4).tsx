import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 px-6 py-14 text-white shadow-lg sm:px-12">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-100">
            For FUTO Students
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Connect. Get Help. Get Paid.
          </h1>
          <p className="mt-4 text-lg text-emerald-50">
            Post assignments with a price, join clubs & events, raise funds, and
            settle everything with crypto — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/assignments"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow hover:bg-emerald-50"
            >
              Browse Assignments
            </Link>
            <Link
              href="/assignments/new"
              className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Post an Assignment
            </Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          title="Assignment Marketplace"
          description="Post coursework with a price tag. Other students can reach out and get paid in crypto when the work is delivered."
          href="/assignments"
          icon="📝"
        />
        <FeatureCard
          title="Events & Clubs"
          description="Create or join campus events and student clubs. Stay updated on what’s happening around FUTO."
          href="/events"
          icon="🎉"
        />
        <FeatureCard
          title="Fundraisers"
          description="Raise crypto for club projects, events, or departmental needs with transparent progress tracking."
          href="/fundraisers"
          icon="💰"
        />
        <FeatureCard
          title="Crypto Wallet"
          description="Built-in wallet for USDT and other tokens. Pay and receive without leaving the app."
          href="/wallet"
          icon="👛"
        />
      </section>

      {/* How it works */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">How the Assignment flow works</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          <Step number={1} title="Post">
            Describe the assignment, set a price in USDT, and add a deadline.
          </Step>
          <Step number={2} title="Connect">
            Interested students message you. Agree on terms and lock funds in escrow.
          </Step>
          <Step number={3} title="Deliver & Pay">
            Work is submitted. You confirm and the crypto is released to the helper.
          </Step>
        </ol>
      </section>

      {/* Disclaimer */}
      <section className="mt-16 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
        <strong>Academic Integrity Notice:</strong> Submitting work completed by
        another person as your own may violate FUTO’s academic regulations and
        can lead to disciplinary action. Use this platform responsibly.
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700"
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 font-semibold group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </Link>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
        {number}
      </div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{children}</p>
    </li>
  );
}
