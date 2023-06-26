import Name from "@/components/Name";
import Particle from "@/components/Particle";
import { decode } from "@/util/enc";

export async function generateMetadata({ params: { slug, type } }) {
  const title = slug.map((x) => decode(x)).join(" ");
  return {
    title,
    description: title,
  };
}

export default function Page({ params: { slug } }) {
  return (
    <main className="h-screen">
      <Particle />
      <Name slug={slug} />
    </main>
  );
}
