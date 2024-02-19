import { useState } from "react";
import "./App.css";

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is an example of how to create react router from scratch</p>
      <a href="/about">About</a>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/36252872?s=400&u=64b4d7a1c46f23c3fe6c3af31647881352525aca&v=4"
          alt="Chamox photo"
        />
        <p>Hello, I'm chamo and I'm creating a react router clone</p>
      </div>
      <a href="/">Home</a>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
