export async function POST(request) {
  const body = await request.json();

  const res = await fetch("https://staging.lexic.cloud/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return Response.json(data, { status: res.status });
}

export async function GET() {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
  const key = process.env.API_KEY;
  const apiUrl = process.env.API_URL;

  const response = await fetch(`https://staging.lexic.cloud/sanctum/csrf-cookie`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();
  console.log("GET response:", data);
  return Response.json(data, { status: response.status });
}