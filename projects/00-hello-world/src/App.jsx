import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./index.css";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "samuelzavila",
    name: "Samuel Zúñiga",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          isFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
