import { useEffect, useState, Children } from "react";
import { EVENTS } from "./consts";
import { match } from "path-to-regexp";

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  // add routes from children <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === "Route";
    if (!isRoute) return null;

    return props;
  });

  const routesToUse = routes.concat(routesFromChildren);

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true;
    //   hemos usado path - to - regexp
    //   para detectar rutas dinamicas como / search /: query
    //   donde query es un parametro dinamico

    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) return false;

    // search/:query
    //   guardar los parametros de la ruta que eran dinamicos
    //   y que hemos extraido con path - to - regexp
    //   por ejemplo si la ruta es / search / : query
    //   y la URL es / search / javascript
    //   matched.params.query sera igual a "javascript"
    routeParams = matched.params; // { query: "javascript" } // search/javascript
    return true;
  })?.component;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
}
