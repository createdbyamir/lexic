// POST
export async function POST(request) {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
  const key = process.env.API_KEY;
  const apiUrl = process.env.API_URL;
  const body = await request.json();
  console.log("🟢 Received body in route.js:", body);

  const response = await fetch(`${apiUrl}/passages`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  console.log("POST response:", data);
  return Response.json(data, { status: response.status });
}

// GET
export async function GET(request) {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
  const key = process.env.API_KEY;
  const apiUrl = process.env.API_URL;
  const { searchParams } = new URL(request.url);
  const offset = searchParams.get("offset") || 0;
  const limit = searchParams.get("limit") || 10;


  const response =  await fetch(`${apiUrl}/passages?offset=${offset}&limit=${limit}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`
    }
  }); 

  const data = await response.json();
  console.log("GET response:", data);
  return Response.json(data, { status: response.status });
}

// PUT
export async function PUT(request) {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
  const key = process.env.API_KEY;
  const apiUrl = process.env.API_URL;
  const body = await request.json();
  console.log("🟡 Received body in route.js for PUT:", body);

  if (!body.id) {
    return Response.json({ error: "ID is required for updating a passage." }, { status: 400 });
  }

  const response = await fetch(`${apiUrl}/passages/${body.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  console.log("PUT response:", data);
  return Response.json(data, { status: response.status });
}