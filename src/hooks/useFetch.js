import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [response, setReponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setLoading(false);
      setReponse(response?.data);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return [response, error, isLoading];
};

export default useFetch;
