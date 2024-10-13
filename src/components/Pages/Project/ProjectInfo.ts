export interface projectType{
    name:string,
    image:string,
    link:string
}

export const projects:projectType[] = [
    {name:'Speed Design',image:'/projects/speed.png',link:'https://speed-client.vercel.app/'},
    {name:'Simple ChatApp',image:'/projects/chatApp.png',link:'https://chat-app-client-cyan.vercel.app/'},
    {name:'Music Player',image:'/projects/musicPlayer.png',link:'https://bijan-musicplayer.netlify.app'},
    {name:'Simple Piano',image:'/projects/simplePiano.png',link:'https://simple-pianofy.netlify.app'},
    {name:'Simple Calculator',image:'/projects/calc.png',link:'https://bijan-calc.netlify.app'},
]