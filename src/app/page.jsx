"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Banner from "./components/Banner";
import Form from "./posts/components/Form";
import List from "./posts/components/List";
import Skeleton from "./posts/components/Skeleton";
import getData from "./posts/lib/api";
import PassagePage from "./passages/page";

function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <Banner />

      {/* Main content area */}
      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form (left column) */}
        <div className="lg:col-span-1">
          <Form onSuccess={handleAdd} />
        </div>

        {/* List (right column) */}
        {/* 
        <div className="list">
          {loading ? <Skeleton /> : <List data={data} />}
          <Link href="/passages" className="text-blue-500 hover:underline mt-4">
            View All Passages
          </Link>
        </div>
        */}
        <div className="lg:col-span-2">
          {loading ? <Skeleton /> :  <PassagePage />}
        </div>
      </div>

    </div>
  );
}

export default Page;
