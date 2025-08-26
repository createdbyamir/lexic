"use client";

import List from "../posts/components/List";
import { useEffect, useState } from "react";
import getData from "../posts/lib/api";

function PassagePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const limit = 4;
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = (e) => {
    e.preventDefault();
    setLoading(true);
    getData({ offset: offset + limit, limit }).then(newData => {
      setData(prevData => [...prevData, ...newData]);
      setOffset(prevOffset => prevOffset + limit);
      setLoading(false);

      if (newData.length < limit) {
        setHasMore(false);
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    async function load() {
      const items = await getData({ offset: 0, limit });
      setData(items);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="w-full max-w-[1280px] mx-auto p-6">
      <List data={data} loading={loading} />
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="rounded-lg bg-sky-600 px-5 py-2.5 font-semibold text-white shadow hover:bg-sky-700 transition"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}

export default PassagePage;
