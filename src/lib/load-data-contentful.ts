import { gql } from "@apollo/client";
import { getClient } from "@/lib/contentful";

export const loadData = async (lang: string) => {
  const { data } = await getClient().query({
    query: gql`
      query {
        aboutCollection (locale: "${lang}") {
          items {
            title,
            subtitle,
            description,
            description2,
            button
          }
        },
        navbarCollection (locale: "${lang}") {
          items {
            home,
            about,
            portfolio,
            contact
          }
        },
        heroCollection (locale: "${lang}") {
          items {
            title,
            subtitle,
            button
          }
        },
        portfolioCollection (locale: "${lang}") { 
          items {
            title,
            navPorjects,
            buttonProjects,
            navCertificates,
            buttonCertificates,
            navSkills
          }
        },
        contactCollection (locale: "${lang}") {
          items {
            title,
            description,
            inputName,
            inputEmail,
            inputMessage,
            button
          }
        }
      }
    `
  })
  return data;
}
