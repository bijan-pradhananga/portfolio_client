export interface CategoryType {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface ProjectType {
    _id: string;
    name: string;
    image: string;
    link: string;
    createdAt: string;
    updatedAt: string;
    category: CategoryType; // Add category field with type CategoryType
    description?: string; // Optional description field
  }
  
  export interface ProjectApiResponse {
    projects: ProjectType[]; // Array of ProjectType objects
  }

// export const projects:projectType[] = [
//     {name:'Speed Design',image:'/projects/speed.png',link:'https://speed-client.vercel.app/'},
//     {name:'Simple ChatApp',image:'/projects/chatApp.png',link:'https://chat-app-client-cyan.vercel.app/'},
//     {name:'Music Player',image:'/projects/musicPlayer.png',link:'https://bijan-musicplayer.netlify.app'},
//     {name:'Simple Piano',image:'/projects/simplePiano.png',link:'https://simple-pianofy.netlify.app'},
//     {name:'Simple Calculator',image:'/projects/calc.png',link:'https://bijan-calc.netlify.app'},
// ]