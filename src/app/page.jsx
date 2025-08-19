"use client";

import Form from "./posts/components/Form";
import List from "./posts/components/List";
import { useEffect,  useState } from "react";
import getData from "./posts/lib/api";
import Register from "./auth/register/page";

function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const items = await getData();
      setData(items);
    }
    load();
  }, []);


  function handleAdd(newItem) {
    setData((prevData) => [...prevData, newItem]);
  ;}

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-6">
      <h1 className="text-4xl font-bold text-center">Welcome to the Polyglot App!</h1>
      <Form onSuccess={handleAdd} />
      <List data={data} />
      <Register />
    </div>

  );
}

export default Page