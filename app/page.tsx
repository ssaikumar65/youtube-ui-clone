import Card from "./components/Card";
import { feed } from "./util";

export default function Home() {
  return (
    <div className=" flex flex-wrap gap-6 p-4 justify-center transition-all">
      {feed.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}
