"use client";

import List from "../posts/components/List";
import { useEffect,  useState } from "react";
import getData from "../posts/lib/api";

function PassagePage() {
  const [data, setData] = useState([]);
  
  const limit = 6;
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = (e) => {
    e.preventDefault();
    getData({ offset: offset + limit, limit }).then(newData => {
      setData(prevData => [...prevData, ...newData]);
      setOffset(prevOffset => prevOffset + limit);


    if (newData.length < limit) {
      setHasMore(false);
    }
      
    });
  };

  

  useEffect(() => {
    async function load() {
      const items = await getData({ offset: 0, limit: 6 });
      setData(items);
    }
    load();
  }, []);


  return (
    <div className=" flex flex-col items-center justify-center space-y-6 p-6">
      <h1 className="text-4xl font-bold text-center">Passages</h1>
      <List data={data} />
      {hasMore && (
        <a 
          onClick={loadMore} 
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Load more
        </a>
      )}
    </div>

  );
}

export default PassagePage