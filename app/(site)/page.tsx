import { getProjects } from "@/sanity/sanity-utils";
import NextImage from "next/image";
import Link from "next/link";
export default async function Home() {
  const projects = await getProjects();

  return (
    <div>

      <h1 className="text-7xl font-extrabold">Hello I&apos;m <span className="bg-gradient-to-r from-purple-400 via-red-500 to-orange-600 bg-clip-text text-transparent">Aromi!</span></h1>

      <p className="mt-3 text-xl text-gray-600">Jambo everyone! Check out my Projects!</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {projects.map((_project) => (

          <Link 
            href={`/projects/${_project.slug}`} 

              key={_project._id} 
              className="border-2 border-gray-500 rounded-1g p-1 hover:scale-105 hover:border-blue-500 transition">
            
            
             {_project.image && (
               <NextImage
                  src={_project.image}
                  alt={_project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-1g border border-gray-500"
                />  
              )}
              

             <div className="mt-2 font-extrabold bg-gradient-to-r from-purple-400 via-red-500 to-orange-600 bg-clip-text text-transparent ">
                {_project.name}
             </div>
          
          </Link>

       ))}
       </div>

    </div>

    

    
  );
  
}




/*interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps) {
  console.log("Projects:", projects); //checking project data in browser tab
  return (
    <div>
      {Array.isArray(projects) ? (
        projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))
      ) : (
        <div>Error Fetching Projects</div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const projects = await getProjects();
    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        projects: [], // Return an empty array in case of an error
      },
    };
  }
} //next js version

export default async function Home() {
  try {
  const projects = await getProjects();
  console.log("Projects:", projects); //checking structure of projects array
  
  return (
    <div>
      {Array.isArray(projects)} &&
        projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
    </div>
  );
        } catch (error){
          console.error("Error Fetching Projects:", error);
          //Handling error properly
          return <div>Error Fetching Projects</div>;
        }
      }


  return <div>
    {projects.map((project) => (

      <div key={project._id}>{project.name}</div>
    ))}
  </div>
} */


