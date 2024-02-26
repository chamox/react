import { Link } from "../Link";

const i18n = {
  es: {
    title: "Sobre nosotros",
    button: "Ir a la home",
    description: "Hola, soy chamo y estoy creando un clon de react router",
  },
  en: {
    title: "About us",
    button: "Go to home page",
    description: "Hello, I'm chamo and I'm creating a react router clone",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "en");
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/36252872?s=400&u=64b4d7a1c46f23c3fe6c3af31647881352525aca&v=4"
          alt="Chamox photo"
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.button}</Link>
    </>
  );
}
