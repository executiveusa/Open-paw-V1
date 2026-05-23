import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockAnimals } from '../data/mock';
import { StatusBadge } from '../components/ui/Badge';

export function AnimalDetailPage() {
  const { id } = useParams<{ id: string }>();
  const animal = mockAnimals.find(a => a.id === id);

  if (!animal) {
    return (
      <div className="text-center py-16">
        <div className="text-3xl mb-3" aria-hidden>🐾</div>
        <p className="text-gray-500 dark:text-gray-400">Animal not found.</p>
        <Link to="/app/animals" className="mt-4 inline-block text-sm text-orange-600 dark:text-orange-400 hover:underline">Back to Animals</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/app/animals" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Back">
          <ArrowLeft className="w-4 h-4" aria-hidden />
        </Link>
        <div className="flex-1 flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{animal.name}</h1>
          <StatusBadge status={animal.status} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Details</h2>
          <dl className="space-y-3">
            {[
              { label: 'Species', value: animal.species },
              { label: 'Breed', value: animal.breed },
              { label: 'Sex', value: animal.sex },
              { label: 'Age', value: animal.age_estimate_months ? `${animal.age_estimate_months} months` : null },
              { label: 'Weight', value: animal.weight_kg ? `${animal.weight_kg} kg` : null },
              { label: 'Color', value: animal.color },
              { label: 'Microchip', value: animal.microchip_id },
              { label: 'Location', value: animal.location },
              { label: 'Intake Source', value: animal.intake_source },
              { label: 'Intake Date', value: new Date(animal.intake_date).toLocaleDateString() },
            ].map(({ label, value }) => value ? (
              <div key={label} className="flex justify-between gap-4">
                <dt className="text-xs text-gray-500 dark:text-gray-400 shrink-0">{label}</dt>
                <dd className="text-xs text-gray-900 dark:text-white text-right capitalize">{value}</dd>
              </div>
            ) : null)}
          </dl>
        </div>

        <div className="space-y-4">
          {animal.public_bio && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Adoption Bio</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{animal.public_bio}</p>
            </div>
          )}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Medical Records</h2>
            <p className="text-xs text-gray-400 dark:text-gray-500">No medical records on file.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
