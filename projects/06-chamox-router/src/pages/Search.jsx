import { useEffect } from "react";

export function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `You searched for ${routeParams.query}`;
  }, []);
  return <h1>You searched for {routeParams.query}</h1>;
}
