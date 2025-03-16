import { useEffect } from "react";
import { useState } from "react";

export function useFetch(baseUrl, initType) {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl(initType);
  }, []);

  return {
    data, fetchUrl
  };
}
