export interface projectType {
    _id: string
    name: string;
    image: string;
    link: string;
    description?: string; 
}

interface ProjectApiResponse {
    projects: projectType[]; 
}

let projectCollection: projectType[] = []; // Use let to allow reassignment

const fetchProjects = async (): Promise<void> => {
    try {
        const res = await fetch('https://portfolio-server-qjh8.onrender.com/project', {
            cache: 'no-store' 
        });
        if (!res.ok) {
            throw new Error('Failed to fetch projects');
        }
        const projectData: ProjectApiResponse = await res.json();
        projectCollection = projectData.projects; // Reassign the collection
        // console.log(projectCollection);
        
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

// Call the function
fetchProjects();

export { projectCollection };

// export const projects:projectType[] = [
//     {name:'Speed Design',image:'/projects/speed.png',link:'https://speed-client.vercel.app/'},
//     {name:'Simple ChatApp',image:'/projects/chatApp.png',link:'https://chat-app-client-cyan.vercel.app/'},
//     {name:'Music Player',image:'/projects/musicPlayer.png',link:'https://bijan-musicplayer.netlify.app'},
//     {name:'Simple Piano',image:'/projects/simplePiano.png',link:'https://simple-pianofy.netlify.app'},
//     {name:'Simple Calculator',image:'/projects/calc.png',link:'https://bijan-calc.netlify.app'},
// ]