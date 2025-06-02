import { useEffect, useState } from "react";
import { GET } from "@/app/api/netlify/route";
import Image from "next/image";
import Link from "next/link";

const Projects: React.FC =  () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const netlifyProjects = async () => {
      const res = await GET();
      const data = await res.json();
      setProjects(data.slice(0, 6));
    }

    netlifyProjects();
  }, [])

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project: NetlifyProjects) => (
          <div key={project.id} className="mb-10">
            <Link href={project.url} className="w-screen">
              <h3 className="pb-4 text-Text text-xl text-center font-Geist-Mono font-bold">{project.name.split("-").slice(0, -1).join(" ")}</h3>
              <Image src={project?.screen} alt={project.name} width={1} height={1} layout="responsive" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;