const BASE_URL = import.meta.env.VITE_API_URL || '/api';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: { message: res.statusText } }));
    throw new Error(err?.error?.message || 'Request failed');
  }
  const json = await res.json();
  return json.data as T;
}

export const api = {
  animals: {
    list: (tenantId: string) => request<unknown[]>(`/v1/tenants/${tenantId}/animals`),
    get: (tenantId: string, id: string) => request<unknown>(`/v1/tenants/${tenantId}/animals/${id}`),
    create: (tenantId: string, data: { name: string; species: string }) =>
      request<unknown>(`/v1/tenants/${tenantId}/animals`, { method: 'POST', body: JSON.stringify(data) }),
    updateStatus: (tenantId: string, id: string, status: string) =>
      request<unknown>(`/v1/tenants/${tenantId}/animals/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) }),
  },
  grants: {
    listOpportunities: (tenantId: string) => request<unknown[]>(`/v1/tenants/${tenantId}/grant-opportunities`),
    listFunders: (tenantId: string) => request<unknown[]>(`/v1/tenants/${tenantId}/funders`),
  },
  tenants: {
    list: () => request<unknown[]>('/v1/tenants'),
    get: (id: string) => request<unknown>(`/v1/tenants/${id}`),
  },
};
