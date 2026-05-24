import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import {
  PawPrint,
  Heart,
  Syringe,
  Search,
  DollarSign,
  Megaphone,
  CheckCircle,
  HardDrive,
  Key,
  ClipboardList,
  Ban,
  Monitor,
  Server,
  Cloud,
  Github,
  Download,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Open Paw — Free Animal Welfare Software for Rescues and Shelters',
};

const features = [
  {
    icon: PawPrint,
    title: 'Animal Records',
    desc: 'Complete intake records, status pipeline from intake to adoption, microchip IDs, photos, and private notes.',
  },
  {
    icon: Heart,
    title: 'Foster & Adoption Workflows',
    desc: 'Track foster placements, adoption applications, and volunteer tasks in one clear board.',
  },
  {
    icon: Syringe,
    title: 'Veterinary-Lite Records',
    desc: 'Vaccinations, medications, procedures, weight history, and restricted medical notes — all role-controlled.',
  },
  {
    icon: Search,
    title: 'Lost & Found',
    desc: 'Public report intake, description matching, internal review workflow, and reunification tracking.',
  },
  {
    icon: DollarSign,
    title: 'Funding Radar',
    desc: 'Funder database, grant calendar, eligibility checker, and AI-assisted narrative drafts with human approval.',
  },
  {
    icon: Megaphone,
    title: 'Public Adoption Pages',
    desc: 'Publish polished adoption profiles with approved fields only. Private notes never leak to the public.',
  },
];

const audiences = [
  { emoji: '🐕', title: 'Animal Rescues', desc: 'From one-person operations to multi-state networks' },
  { emoji: '🏢', title: 'Shelters', desc: 'Municipal and private shelter management' },
  { emoji: '🏠', title: 'Foster Networks', desc: 'Coordinate fosters, track placements, manage tasks' },
  { emoji: '⚕️', title: 'Vet Welfare Clinics', desc: 'Medical records, spay/neuter tracking, continuity of care' },
  { emoji: '🩺', title: 'Spay/Neuter Programs', desc: 'Intake, procedure tracking, and follow-up workflows' },
  { emoji: '📊', title: 'Fiscal Sponsors', desc: 'Multi-tenant support for sponsored animal welfare programs' },
];

const grantPipeline = [
  { name: 'Petco Love Lost Grant', amount: '$25,000', status: 'Identified', color: 'bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-400' },
  { name: 'ASPCA Saving Lives Grant', amount: '$50,000', status: 'Drafting', color: 'bg-brand-100 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400' },
  { name: 'PetSmart Charities', amount: '$15,000', status: 'Submitted', color: 'bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-400' },
  { name: 'Local Foundation Grant', amount: '$5,000', status: 'Awarded', color: 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400' },
];

const securityCards = [
  { icon: HardDrive, title: 'Local SQLite', desc: 'Your database lives on your machine. No cloud required.' },
  { icon: Key, title: 'Role-based access', desc: 'Volunteers, vets, admins — each sees only what they need.' },
  { icon: ClipboardList, title: 'Full audit log', desc: 'Every write is logged. Know who changed what and when.' },
  { icon: Ban, title: 'No diagnosis AI', desc: 'Medical diagnoses are never automated. Humans stay in control.' },
];

const deployModes = [
  { icon: Monitor, title: 'Desktop App', desc: 'One-click install on Mac, Windows, or Linux. Local encrypted database. Works offline.', badge: 'Coming Soon' },
  { icon: Server, title: 'Local Network', desc: 'Run on a shelter office server. Multiple staff access from their desktops without internet.', badge: 'V1' },
  { icon: Cloud, title: 'Self-hosted Cloud', desc: 'Docker Compose deployment with PostgreSQL and object storage for multi-location teams.', badge: 'Roadmap' },
];

const blogPreviews = [
  { slug: 'why-animal-welfare-software-should-be-local-first', title: 'Why Animal Welfare Software Should Be Local-First', category: 'Technology', date: 'Jan 15, 2025' },
  { slug: 'funding-radar-finding-grants-without-losing-the-plot', title: 'Funding Radar: Finding Grants Without Losing the Plot', category: 'Funding', date: 'Jan 22, 2025' },
  { slug: 'track-foster-capacity-without-spreadsheet-explosion', title: 'Track Foster Capacity Without a Spreadsheet Explosion', category: 'Operations', date: 'Jan 29, 2025' },
];

export default function LandingPage() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paw-50 dark:bg-paw-950/40 border border-paw-200 dark:border-paw-800 text-paw-700 dark:text-paw-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-paw-500 animate-pulse" aria-hidden="true" />
            Open-source &amp; Free Forever
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6 balance">
            Open-source software for animal welfare teams.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Track animals, find funding, publish adoptable pets, and keep your data local.
            Free, open-source, and built for real rescue teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-base hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Download className="w-4 h-4" aria-hidden />
              Download Free
            </Link>
            <a
              href="https://github.com/executiveusa/Open-paw-V1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-base hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Local-first', emoji: '💾', desc: 'Your data stays on your machine' },
              { label: 'Open-source', emoji: '🔓', desc: 'Auditable and forkable forever' },
              { label: 'Grant-ready', emoji: '📋', desc: 'Built-in Funding Radar module' },
              { label: 'One-click install', emoji: '⚡', desc: 'No server setup required' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl" aria-hidden="true">{item.emoji}</span>
                <dt className="font-semibold text-gray-900 dark:text-white text-sm">{item.label}</dt>
                <dd className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything your team needs in one place
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From intake to adoption, from lost pets to grant applications — Open Paw handles the
              operational work so your team can focus on the animals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-shadow"
              >
                <f.icon className="w-6 h-6 text-paw-500 mb-4" aria-hidden />
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT HELPS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built for the people doing the work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Whether you&apos;re a solo rescuer, a mid-size shelter, or a fiscal sponsor supporting
              multiple programs, Open Paw scales with your organization.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="text-2xl mb-3" aria-hidden="true">{a.emoji}</div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{a.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDING RADAR */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-400 text-xs font-medium mb-6">
                First-class feature
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Funding Radar
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Animal welfare organizations leave money on the table because grant research is slow
                and disorganized. Funding Radar keeps your funder database, deadlines, and
                applications in one place — with AI-assisted drafting that requires human review.
              </p>
              <ul className="space-y-3">
                {[
                  'Funder database with focus areas and contact info',
                  'Grant calendar with deadline alerts',
                  'Eligibility checklist against your org profile',
                  'AI narrative draft — reviewed before submission',
                  'Budget builder and impact report generator',
                  'Application workspace and status tracking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-paw-500 mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/funding"
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
              >
                Learn more about Funding Radar
                <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-brand-50 to-paw-50 dark:from-brand-950/30 dark:to-paw-950/30 rounded-3xl p-8 border border-brand-100 dark:border-brand-900">
              <div className="space-y-4">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Grant Pipeline
                </div>
                {grantPipeline.map((grant) => (
                  <div
                    key={grant.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                  >
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{grant.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Up to {grant.amount}</div>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${grant.color}`}>
                      {grant.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY / LOCAL-FIRST */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityCards.map((c) => (
                <div
                  key={c.title}
                  className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                >
                  <c.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 mb-3" aria-hidden />
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{c.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Your data, your rules.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Open Paw is local-first by default. Your animal records, medical notes, and donor
                information are stored on your machine — not sold to a cloud provider, not
                accessible without your permission.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Cloud sync is optional. Self-hosted deployment is supported. The source code is open
                and auditable. You are never locked in.
              </p>
              <Link
                href="/security"
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:underline"
              >
                Read our security model
                <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DEPLOY OPTIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Run it your way
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
            Desktop app, shelter office server, or self-hosted cloud — Open Paw fits how your
            organization works.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deployModes.map((m) => (
              <div
                key={m.title}
                className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
              >
                <m.icon className="w-8 h-8 text-gray-400 dark:text-gray-500 mb-4 mx-auto" aria-hidden />
                <div className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 inline-block mb-4">
                  {m.badge}
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{m.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Open Paw Field Notes
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Practical guides for animal welfare teams.</p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              All posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreviews.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all"
              >
                <div className="text-xs font-medium text-brand-600 dark:text-brand-400 mb-3">
                  {post.category}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                  {post.title}
                </h3>
                <time className="text-xs text-gray-400 dark:text-gray-500">{post.date}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPER CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Help us build it
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Open Paw is built by volunteers who care about animal welfare. If you write Rust,
            TypeScript, or just have strong opinions about animal welfare workflows — we want to
            hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/executiveusa/Open-paw-V1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-base hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden />
              View on GitHub
            </a>
            <a
              href="https://github.com/executiveusa/Open-paw-V1/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-base hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Good First Issues
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Help animal welfare teams spend less time fighting software and more time helping animals.
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
            Download Open Paw for free. No account required. Your data stays yours.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-white text-gray-900 font-semibold text-base hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Download className="w-4 h-4" aria-hidden />
            Download Open Paw — Free
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
