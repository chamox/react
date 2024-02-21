import { Link } from "../Link";

export default function Page404() {
  return (
    <>
      <div>
        <h1>404: Page not found</h1>
        <img
          src="https://midu.dev/images/this-is-fine-404.gif"
          alt="This is fine Dog burning"
        />
        <p>Bad route</p>
      </div>
      <Link to="/">Go back to Home</Link>
    </>
  );
}
