export interface Animal {
  id: string;
  tenant_id: string;
  name: string;
  species: string;
  breed: string | null;
  sex: string;
  age_estimate_months: number | null;
  weight_kg: number | null;
  color: string | null;
  microchip_id: string | null;
  intake_date: string;
  intake_source: string | null;
  status: AnimalStatus;
  location: string | null;
  public_bio: string | null;
  is_restricted: boolean;
  created_at: string;
  updated_at: string;
}

export type AnimalStatus =
  | 'intake'
  | 'quarantine'
  | 'medical_hold'
  | 'behavior_hold'
  | 'foster_needed'
  | 'in_foster'
  | 'adoptable'
  | 'adoption_pending'
  | 'adopted'
  | 'transferred'
  | 'returned'
  | 'lost'
  | 'found'
  | 'deceased';

export interface Person {
  id: string;
  tenant_id: string;
  name: string;
  email: string | null;
  phone: string | null;
  role: string;
  is_active: boolean;
  created_at: string;
}

export interface Task {
  id: string;
  tenant_id: string;
  animal_id: string | null;
  title: string;
  description: string | null;
  status: 'todo' | 'in_progress' | 'done' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  due_date: string | null;
  created_at: string;
}

export interface GrantOpportunity {
  id: string;
  title: string;
  description: string | null;
  award_min: number | null;
  award_max: number | null;
  deadline_at: string | null;
  status: string;
  funder_name: string;
}

export interface LostFoundReport {
  id: string;
  report_type: 'lost' | 'found';
  species: string;
  breed: string | null;
  description: string;
  location: string;
  incident_date: string;
  contact_name: string;
  match_status: 'open' | 'potential_match' | 'reunited' | 'closed';
  created_at: string;
}

export interface DashboardStats {
  animalsInCare: number;
  adoptable: number;
  medicalHold: number;
  fosterPlacements: number;
  openLostFound: number;
  grantOpportunities: number;
}
