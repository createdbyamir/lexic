
export default async function updateData( id, title, content, source, language) {
  const res = await fetch("/api/passages", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title, content, source, language })
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return res.json();
}