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
  return data?.profile?.activity || [];
}

export async function getHTBMachines() {
  const activity = await getHTBActivity();
  if (!activity) return [];

  // Extract unique machine IDs where the user got root
  const rootedMachineIds = Array.from(new Set(
    activity
      .filter((a: any) => a.object_type === 'machine' && (a.type === 'root' || a.type === 'user'))
      .map((a: any) => a.id)
  ));

  // Fetch details for each machine to get OS and Difficulty
  // We use Promise.all to fetch them in parallel. Next.js will cache these.
  try {
    const machineDetails = await Promise.all(
      rootedMachineIds.slice(0, 50).map(async (id) => {
        const data = await htbFetch(`/machine/profile/${id}`);
        return data?.info || null;
      })
    );

    return machineDetails.filter(m => m !== null);
  } catch (error) {
    console.error("Error fetching machine details:", error);
    return [];
  }
}
