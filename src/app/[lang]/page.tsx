import Hero from "components/Hero";
import About from "components/About";
import Portfolio from "@/components/Portfolio";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;

  return (
    <div className="pt-[88px]">
      <Hero lang={lang} />
      <About lang={lang} />
      <Portfolio lang={lang} />
    </div>
  );
}
