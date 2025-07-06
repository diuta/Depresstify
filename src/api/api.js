// Sample API utility for backend integration
export async function submitQuestionnaire(data) {
  // Replace with actual API endpoint
  return fetch("/api/questionnaire/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export async function fetchDashboardSummary() {
  return fetch("/api/dashboard/summary").then((res) => res.json());
}
