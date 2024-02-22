import { Router } from "./Router";
import { Route } from "./Route";
import { lazy, Suspense } from "react";

import HomePage from "./pages/Home";
// import AboutPage from "./pages/About";
import Page404 from "./pages/404";
import { SearchPage } from "./pages/Search";

const AboutPage = lazy(() => import("./pages/About"));

const appRoutes = [
  // {
  //   path: "/",
  //   component: HomePage,
  // },
  // {
  //   path: "/about",
  //   component: AboutPage,
  // },
  {
    path: "/search/:query",
    component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          {/* <Route path="/search/:query" component={SearchPage} /> */}
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
