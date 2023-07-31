import { getProject, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import NextImage from 'next/image';


type Props = {
    params: { project: string}
};

export default async function Project({params }: Props) {

    const slug = params.project;
    const project = await getProject(slug);
   
   
    return ( 
    <div className="max-w-3xl mx-auto py-20">

       <header className="flex items-center justify-between">
             <h1 className="bg-gradient-to-r from-purple-400 via-red-500 to-orange-600 bg-clip-text 
             text-transparent text-5xl drop-shadow font-extrabold" >
                {project.name}
             </h1>

               <a href={project.url} 
                  title="View Project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-200 rounded-1g text-gray-500 font-bold py-3 px-4 whitespace nowrap
                  hover:bg-pink-400 hover:text-pink-100 transition"
                >
                  View Project
               </a>

        </header>

        {/*content goes here */}
        <div className="text-1g text-gray-700 mt-5">
            <PortableText value={project.content}/>
        </div>    

        {/*image goes here */}
        <NextImage 
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />

        
    </div>
 );
}