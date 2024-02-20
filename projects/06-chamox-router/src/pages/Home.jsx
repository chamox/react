import { Link } from "../Link";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is an example of how to create react router from scratch</p>
      <Link to="/about">About</Link>
    </>
  );
}
