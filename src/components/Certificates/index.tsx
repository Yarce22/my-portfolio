"use client"
import { gql, useSuspenseQuery } from "@apollo/client"
import Image from "next/image";
import Link from "next/link";

interface CertificateProps {
  limit?: number;
}

const Certificates: React.FC<CertificateProps> = ({ limit }) => {
  const { data } = useSuspenseQuery<CertificatesCollection>(gql`
    query {
      certificatesCollection {
        items {
          title
          img {
            url
          }
        }
      }
    }
  `);

  const contentfulCertificates = data?.certificatesCollection?.items.slice(0, limit);

  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-center pb-30 px-6 lg:pt-0">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {contentfulCertificates.map((certificate: Certificate) => (
            <Link key={certificate.title} href={certificate.img.url} className="grid place-items-center grid-rows-[100px_1fr]">
              <h2 className="pb-4 text-Text text-xl text-center font-Geist-Mono font-bold">{certificate.title}</h2>
              <Image src={certificate.img.url} alt={certificate.title} width={1} height={1} layout="responsive" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates;