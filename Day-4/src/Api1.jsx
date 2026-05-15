import React, { useEffect, useState } from "react";

export default function Api1() {
  const [data, setFirst] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(json=>setFirst(json))
      .catch(error => console.log("Error :", error));
  }, []);
  return 
  <div>
    {data ? data : "Loding..."}
  </div>;
}
