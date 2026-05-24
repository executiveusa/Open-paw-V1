'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import {
  PawPrint,
  LayoutDashboard,
  Heart,
  Users,
  CheckSquare,
  Search,
  DollarSign,
  BookOpen,
  BarChart2,
  Settings,
  Moon,
  Sun,
  Menu,
  X,
  Stethoscope,
  ArrowLeftRight,
} from 'lucide-react';

const navItems = [
  { label: 'Overview', href: '/app', icon: LayoutDashboard, exact: true },
  { label: 'Animals', href: '/app/animals', icon: PawPrint },
  { label: 'Intake', href: '/app/intake', icon: ArrowLeftRight },
  { label: 'Medical', href: '/app/medical', icon: Stethoscope },
  { label: 'Fosters', href: '/app/fosters', icon: Heart },
  { label: 'Adoptions', href: '/app/adoptions', icon: Users },
  { label: 'Lost & Found', href: '/app/lost-found', icon: Search },
  { label: 'Funding Radar', href: '/app/funding', icon: DollarSign },
  { label: 'Resources', href: '/app/resources', icon: BookOpen },
  { label: 'Reports', href: '/app/reports', icon: BarChart2 },
  { label: 'Settings', href: '/app/settings', icon: Settings },
];

function NavItem({ item, onClick }: { item: typeof navItems[0]; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = item.exact
    ? pathname === item.href
    : pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={clsx(
        'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
        isActive
          ? 'bg-paw-50 dark:bg-paw-950/50 text-paw-700 dark:text-paw-400'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
      )}
    >
      <item.icon className="w-4 h-4 shrink-0" aria-hidden />
      {item.label}
    </Link>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setDark(next);
  }

  const sidebar = (
    <aside className="w-60 shrink-0 border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col h-full">
      <div className="h-14 flex items-center gap-2.5 px-5 border-b border-gray-100 dark:border-gray-800">
        <PawPrint className="w-5 h-5 text-paw-500" aria-hidden />
        <span className="font-semibold text-gray-900 dark:text-white text-sm">Open Paw</span>
        <span className="ml-auto text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-400">
          Demo
        </span>
      </div>

      <div className="px-3 py-3 border-b border-gray-100 dark:border-gray-800">
        <div className="px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800">
          <div className="text-xs font-medium text-gray-900 dark:text-white truncate">
            Happy Paws Rescue
          </div>
          <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">demo@openpaw.org</div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto" aria-label="Dashboard navigation">
        {navItems.map((item) => (
          <NavItem key={item.href} item={item} onClick={() => setMobileOpen(false)} />
        ))}
      </nav>

      <div className="p-3 border-t border-gray-100 dark:border-gray-800 space-y-1">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors w-full"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun className="w-4 h-4" aria-hidden /> : <Moon className="w-4 h-4" aria-hidden />}
          {dark ? 'Light mode' : 'Dark mode'}
        </button>
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          ← Public site
        </Link>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-col">{sidebar}</div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative flex flex-col w-60">{sidebar}</div>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-14 flex items-center gap-3 px-4 sm:px-6 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shrink-0">
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" aria-hidden />
          </button>
          <div className="flex-1 text-xs text-gray-400 dark:text-gray-500">
            Happy Paws Rescue
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden"
            aria-hidden={!mobileOpen}
          >
            {mobileOpen && <X className="w-5 h-5" aria-hidden />}
          </button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
