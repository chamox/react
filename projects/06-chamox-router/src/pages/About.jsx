import { Link } from "../Link";

export default function AboutPage() {
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
      <Link to="/">Home</Link>
    </>
  );
}
