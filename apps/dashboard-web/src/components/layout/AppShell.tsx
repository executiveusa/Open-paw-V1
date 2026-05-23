import { NavLink, Outlet } from 'react-router-dom';
import {
  PawPrint, LayoutDashboard, Heart, Users, CheckSquare, Search,
  DollarSign, BookOpen, BarChart2, Settings, Moon, Sun,
} from 'lucide-react';
import { clsx } from 'clsx';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', href: '/app', icon: LayoutDashboard, exact: true },
  { label: 'Animals', href: '/app/animals', icon: PawPrint },
  { label: 'People', href: '/app/people', icon: Users },
  { label: 'Tasks', href: '/app/tasks', icon: CheckSquare },
  { label: 'Lost & Found', href: '/app/lost-found', icon: Search },
  { label: 'Grants', href: '/app/grants', icon: DollarSign },
  { label: 'Resources', href: '/app/resources', icon: BookOpen },
  { label: 'Reports', href: '/app/reports', icon: BarChart2 },
  { label: 'Settings', href: '/app/settings', icon: Settings },
];

// Heart is used in DashboardHome — suppress the unused import warning
void Heart;

export function AppShell() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setDark(next);
  }

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col">
        <div className="h-16 flex items-center gap-2 px-5 border-b border-gray-100 dark:border-gray-800">
          <PawPrint className="w-5 h-5 text-orange-500" aria-hidden />
          <span className="font-semibold text-gray-900 dark:text-white text-sm">Open Paw</span>
        </div>
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto" aria-label="Main navigation">
          {navItems.map(item => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.exact}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                )
              }
            >
              <item.icon className="w-4 h-4 shrink-0" aria-hidden />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-100 dark:border-gray-800">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-4 h-4" aria-hidden /> : <Moon className="w-4 h-4" aria-hidden />}
            {dark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 flex items-center gap-3 px-6 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shrink-0">
          <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
            <span>Happy Paws Rescue</span>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
