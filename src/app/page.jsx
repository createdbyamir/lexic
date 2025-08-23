"use client";

import Form from "./posts/components/Form";
import List from "./posts/components/List";
import { useEffect,  useState } from "react";
import getData from "./posts/lib/api";
import Link from "next/link";
import Skeleton from "./posts/components/Skeleton";
import Test from "./posts/components/Test"

  /**
   * Page component for the root route ("/").
   * Fetches four items from the API and displays them in a list.
   * Also displays a form to add a new item.
   * When the form is submitted, the new item is added to the list.
   * A link is provided to view all items.
   */
function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);  
    async function load() {
      const items = await getData({ offset: 0, limit: 4 });
      setData(items);
      setLoading(false);
    }
    load();
  }, []);



  function handleAdd(newItem) {
    setData((prevData) => [...prevData, newItem]);
  ;}

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-6">
      <Test />
      <h1 className="text-4xl font-bold text-center">Welcome to the Polyglot App!</h1>
      <Form onSuccess={handleAdd} />
      <div className="list">
        {loading ? <Skeleton /> : <List data={data} />}
          <Link href="/passages" className="text-blue-500 hover:underline mt-4">
            View All Passages
          </Link>
      </div>
    </div>
  );
}

export default Page