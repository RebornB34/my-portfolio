const HTB_ID = "2252974";
const BASE_URL = "https://labs.hackthebox.com/api/v4";

async function htbFetch(endpoint: string) {
  const token = process.env.HTB_API_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error(`HTB API Error (${endpoint}):`, error);
    return null;
  }
}

export async function getHTBProfile() {
  const data = await htbFetch(`/user/profile/basic/${HTB_ID}`);
  return data?.profile || null;
}

export async function getHTBActivity() {
  const data = await htbFetch(`/user/profile/activity/${HTB_ID}`);
  return data?.activity || [];
}

export async function getHTBMachines() {
  const data = await htbFetch(`/user/profile/progress/machines/${HTB_ID}`);
  return data?.profile?.content || [];
}
