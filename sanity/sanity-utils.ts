import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

/*import { Project as SanityProject } from "./types"; //using an alias

interface Project {
    _id: string;
    _createdAt:string;
    name: string;
    slug: {current: string};
    image: {asset: {url: string}};
    url: {_type: "block"; children: { _type: "span"; text: string} []}[];
    content: { _type: "block"; children: {_type: "span"; text: string }[] }[];
}

export async function getProjects(): Promise<Project[]> {
    try {
      const client = createClient({
        projectId: "91nm5tao",
        dataset: "production",
        apiVersion: "1",
      });
  
      return await client.fetch(
        groq`*[_type == "project"]{
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          url,
          content
        }`
      );
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  }*/

export async function getProjects(): Promise<Project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url, 
            url,
            content

        }`
    );
}

export async function getProject(slug: string): Promise<Project> {

  return createClient(clientConfig).fetch(

    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url, 
        url,
        content

    }`,
    {slug}

  );

}

export async function getPages(): Promise<Page[]>{
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current

    }`
  )
}

export async function getPage(slug:string) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content

    }`,
    {slug}
  )
}
