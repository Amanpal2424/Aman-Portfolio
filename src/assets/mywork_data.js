import project1_img from '../assets/project_1.png'
import project2_img from '../assets/project_2.png'
import project3_img from '../assets/project_3.png'
import project4_img from '../assets/project_4.jpg'
import project_5img from '../assets/project_5.png'
import project6_img from '../assets/project_6.png'

const mywork_data = [
   
    {
        w_no: 1,
        w_name: "Ticket Booking System",
        w_img: project2_img,
        description: "A web app for booking tickets with seat selection .",
        technologies: ["React", "Node.js", "MongoDB", "Express","Bootstrap 5"],
         link: "https://bookify-y731.vercel.app/" 
    },
    {
        w_no: 2,
        w_name: "Hackathon Platform for College Students",
        w_img: project1_img,
        description: "A platform to host and manage hackathons with team collaboration features.",
        technologies: ["React", "CSS", "JavaScript","node.js","express","mongodb"],
        link: "https://hackathon-p-uens.vercel.app/"   // 🔥 Added live link here
    },
    
    
    {
        w_no: 3,
        w_name: "Weather App",
        w_img: project_5img,
        description: "Displays live weather using an API with search functionality.",
        technologies: ["Html", "CSS", "Javascript"],
         link: "https://weather-app-rosy-ten-23.vercel.app/" 
    },
    {
        w_no: 4,
        w_name: "News App",
        w_img: project4_img,
        description: "Display random news using a news API.",
        technologies: ["HTML", "CSS", "JavaScript", "OpenNews API"],
         link: "https://news-app-rust-eight.vercel.app/" 
    },
    {
        w_no: 5,
        w_name: "Todo list",
        w_img: project6_img,
        description: "Updates daily task with an adding option.",
        technologies: ["Html", "CSS", "Javascript"],
         link: "https://todo-app-phi-lime.vercel.app/" 
    },
    {
        w_no: 6,
        w_name: "Gym App",
        w_img: project3_img,
        description: "Mobile app to manage workouts, diet plans, and progress.",
        technologies: ["Dart", "Flutter"],
         link: "/" 
    },
]

export default mywork_data;
