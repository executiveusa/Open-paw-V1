import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { StatusBadge } from '@/components/ui/Badge';
import { getMockAnimal, mockAnimals } from '@/lib/api/mockClient';

export function generateStaticParams() {
  return mockAnimals.map((a) => ({ id: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const animal = getMockAnimal(id);
  return { title: animal?.name ?? 'Animal' };
}

function Field({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div>
      <dt className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{label}</dt>
      <dd className="text-sm text-gray-900 dark:text-white">{value ?? '—'}</dd>
    </div>
  );
}

export default async function AnimalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const animal = getMockAnimal(id);
  if (!animal) notFound();

  const age = animal.age_estimate_months
    ? animal.age_estimate_months >= 12
      ? `${Math.floor(animal.age_estimate_months / 12)} yr${Math.floor(animal.age_estimate_months / 12) !== 1 ? 's' : ''}`
      : `${animal.age_estimate_months} mo`
    : null;

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-3">
        <Link
          href="/app/animals"
          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Back to animals"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{animal.name}</h1>
            <StatusBadge status={animal.status} />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 capitalize mt-0.5">
            {animal.species}
            {animal.breed ? ` · ${animal.breed}` : ''}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Details</h2>
        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <Field label="Sex" value={animal.sex} />
          <Field label="Age" value={age} />
          <Field label="Weight" value={animal.weight_kg ? `${animal.weight_kg} kg` : null} />
          <Field label="Color" value={animal.color} />
          <Field label="Microchip" value={animal.microchip_id} />
          <Field label="Location" value={animal.location} />
          <Field label="Intake Date" value={animal.intake_date.split('T')[0]} />
          <Field label="Intake Source" value={animal.intake_source} />
        </dl>
      </div>

      {animal.public_bio && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Public Bio</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{animal.public_bio}</p>
        </div>
      )}

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Medical Records</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No medical records on file.{' '}
          <Link href="/app/medical" className="text-gray-700 dark:text-gray-300 hover:underline">
            Go to Medical →
          </Link>
        </p>
      </div>
    </div>
  );
}
