import Name from "@/components/Name";
import Particle from "@/components/Particle";
import { decode } from "@/util/enc";

export async function generateMetadata({ params: { slug, type } }) {
  const [emoji, ...rest] = slug;
  const title = rest.map((x) => decode(x)).join(" ");
  return {
    title,
    description: `${title} from hardik`,
  };
}

export default function Page({ params: { slug } }) {
  const [emoji, ...rest] = slug;
  return (
    <main className="h-screen overflow-hidden">
      <Particle emoji={decode(emoji)} />
      <Name slug={rest} />
    </main>
  );
}
