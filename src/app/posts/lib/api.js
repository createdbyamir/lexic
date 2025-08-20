

export default async function getData({offset, limit} ) {
  try {
    const res = await fetch(`/api/passages?offset=${offset}&limit=${limit}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const results = await res.json();


    return results.map(item => ({
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
