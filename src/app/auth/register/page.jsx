"use client";

import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    async function run() {
      try {
        // Step 1: Get CSRF cookie
        const csrfRes = await fetch("https://staging.lexic.cloud/sanctum/csrf-cookie", {
          method: "GET",
          credentials: "include", // make sure cookie is stored
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        console.log("🔵 CSRF Status:", csrfRes.status);

        // Step 2: Register request through your Next.js API route
        const registerRes = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "testuser",
            email: "test@fox.com",
            password: "testpassword",
            password_confirmation: "testpassword",
          }),
        });

        console.log("🔵 Register Status:", registerRes.status);
        const data = await registerRes.json();
        console.log("🟢 Register Data:", data);
      } catch (err) {
        console.error("Error connecting:", err);
      }
    }

    run();
  }, []);

  return <h1>Register Test</h1>;
}
