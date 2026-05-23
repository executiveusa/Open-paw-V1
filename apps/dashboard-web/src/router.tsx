import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { LoginPage } from './pages/LoginPage';
import { DashboardHome } from './pages/DashboardHome';
import { AnimalsPage } from './pages/AnimalsPage';
import { AnimalDetailPage } from './pages/AnimalDetailPage';
import { NewAnimalPage } from './pages/NewAnimalPage';
import { PeoplePage } from './pages/PeoplePage';
import { TasksPage } from './pages/TasksPage';
import { LostFoundPage } from './pages/LostFoundPage';
import { GrantsPage } from './pages/GrantsPage';
import { GrantDetailPage } from './pages/GrantDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ReportsPage } from './pages/ReportsPage';
import { SettingsPage } from './pages/SettingsPage';

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/app" replace /> },
  { path: '/login', element: <LoginPage /> },
  {
    path: '/app',
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: 'animals', element: <AnimalsPage /> },
      { path: 'animals/new', element: <NewAnimalPage /> },
      { path: 'animals/:id', element: <AnimalDetailPage /> },
      { path: 'people', element: <PeoplePage /> },
      { path: 'tasks', element: <TasksPage /> },
      { path: 'lost-found', element: <LostFoundPage /> },
      { path: 'grants', element: <GrantsPage /> },
      { path: 'grants/:id', element: <GrantDetailPage /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);
