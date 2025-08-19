export default async function getData() {
  try {
    const res = await fetch("/api/passages", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const results = await res.json();

    return results.slice(0, 10).map(item => ({
      id: item.id,
      title: item.title,
      content: item.content,
      source: item.source,
      language: item.language
    }));
  } catch (error) {
    console.error("Error in getData:", error);
    return [];
  }
}
