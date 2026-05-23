import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NewAnimalPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', species: 'dog', breed: '', sex: 'unknown', location: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In real app, would call API here
    navigate('/app/animals');
  }

  return (
    <div className="max-w-lg">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/app/animals" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Back">
          <ArrowLeft className="w-4 h-4" aria-hidden />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add Animal</h1>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name <span className="text-red-500">*</span></label>
            <input id="name" type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label htmlFor="species" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Species <span className="text-red-500">*</span></label>
            <select id="species" value={form.species} onChange={e => setForm(f => ({ ...f, species: e.target.value }))}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="breed" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Breed</label>
            <input id="breed" type="text" value={form.breed} onChange={e => setForm(f => ({ ...f, breed: e.target.value }))}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label htmlFor="sex" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sex</label>
            <select id="sex" value={form.sex} onChange={e => setForm(f => ({ ...f, sex: e.target.value }))}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="unknown">Unknown</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
            <input id="location" type="text" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
              placeholder="Foster home, shelter area, etc."
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="submit" className="flex-1 py-2.5 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors">
              Add Animal
            </button>
            <Link to="/app/animals" className="flex-1 py-2.5 px-4 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
