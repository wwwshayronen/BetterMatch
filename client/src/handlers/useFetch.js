import React from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  const getData = async () => {
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      console.log(json);
      setResponse(json);
    } catch (error) {
      setError(error);
    }
  };

  const postData = async () => {
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      console.log(json);
      setResponse(json);
    } catch (error) {
      setError(error);
    }
  };

  return { response, error, getData, postData };
};
export default useFetch;
