import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { EVENTS } from "./consts";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // console.log("App mounted");
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

  const Page = routes.find(({ path }) => path === currentPath)?.component;

  return Page ? <Page /> : <DefaultComponent />;
}

function App() {
  return (
    <main>
      <Router routes={routes} />
    </main>
  );
}

export default App;
