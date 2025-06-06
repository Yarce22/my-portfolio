import Projects from "@/components/Projects";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;

  return (
    <section className="flex flex-col items-center pt-[180px] pb-32 px-6 bg-BackgroundHero">
      <h1 className="mt-5 mb-10 lg:w-[500px] text-Titles text-5xl lg:text-8xl font-Geist-Mono font-bold">
        {lang == 'es' ? "Portafolio" : "Portfolio"}
      </h1>

      <Projects />
    </section>
  );
}