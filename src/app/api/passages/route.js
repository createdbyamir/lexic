
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

export async function GET() {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
  const key = process.env.API_KEY;
  const apiUrl = process.env.API_URL;

  const response = await fetch(`${apiUrl}/passages`, {
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
