import React from 'react'
import { HeroParallax } from './ui/HeroParallax'
import dice from "../assets/dice.jpg";
import learning from "../assets/learning.jpg";
import parking from "../assets/parking.jpg";
import exam from "../assets/exam.jpg";
import jarvis from "../assets/jarvis.png";
import quiz from "../assets/quiz.jpeg";
import student from "../assets/student.jpg";
import voting from "../assets/voting.jpg";
import weather from "../assets/weather.jpg";
import game from "../assets/pong.png";
import uno from "../assets/uno.jpg";
import oop from "../assets/oop.png";
import portfolio from "../assets/portfolio.jpeg";
import laravel from "../assets/laravel.png";
import pdf from "../assets/pdf.png";
import ds from "../assets/images.png";
import "../../src/index.css"
const Projects = () => {
  const projects = [
    { 
        title: "RollDices", 
        description: "A simple dice rolling game built with HTML, CSS, and JavaScript. User roll upto 6 dices",
        tags: ["html", "html-css-javascript", "css"], 
        link: "https://github.com/Maham-Fatima/RollDices" ,
        thumnail: dice
    },
    { 
        title: "Smart PDF maker", 
        description: "An AI-powered PDF generator that intelligently crops pages and enhances view quality for an optimized reading experience.",
        tags: ["react", "django", "open-cv","bootstrap"], 
        link: "https://github.com/Maham-Fatima/SmartPDFMaker" ,
        thumnail: pdf
    },
    { 
        title: "Datascience Course", 
        description: "Compilation of datascience course from fast university, including assignmnets and material",
        tags: ["Data Science", "ML", "Visualization","Data analytics", "data cleaning"], 
        link: "https://github.com/Maham-Fatima/DataScience" ,
        thumnail: ds
    },
    { 
        title: "Polling System", 
        description: "A Django-based polling system where users can vote and view poll results.",
        tags: ["python", "django"], 
        link: "https://github.com/Maham-Fatima/pollingSystem" ,
        thumnail: voting
    },
    { 
        title: "Parkify FYP", 
        description: "An AI-powered smart parking surveillance system using React and Django.",
        tags: ["javascript", "AI", "React", "Django"], 
        link: "https://github.com/Maham-Fatima/Parkify_FYP" ,
        thumnail: parking
    },
    { 
        title: "Quiz Wiz Hub MVC", 
        description: "A Java-based quiz management system using JSP and Jakarta EE. User can enroll in courses and give quizzes. Project has admin and student panel. It provides real time difficulty level for quizzes. This project can be implemented at for conducting quizzes.",
        tags: ["java", "jsp", "jakarta-ee"], 
        link: "https://github.com/Maham-Fatima/quiz_wiz_hub_mvc" ,
        thumnail: exam
    },
    { 
        title: "Laravel CRUD App", 
        description: "A simple CRUD application built with Laravel and PHP.",
        tags: ["php", "laravel"], 
        link: "https://github.com/Maham-Fatima/laravel-crud-app" ,
        thumnail: laravel
    },
    { 
        title: "Socket Quiz App", 
        description: "A real-time quiz application using Python sockets and Tkinter. ALlows to set server. UPto 4 players and play the quiz game",
        tags: ["python", "socket", "tkinter"], 
        link: "https://github.com/Maham-Fatima/socket-quiz-app" ,
        thumnail: quiz
    },
    { 
        title: "Learning Website", 
        description: "An educational website with interactive learning features, built with Tailwind CSS.",
        tags: ["html", "javascript", "tailwind"], 
        link: "https://github.com/Maham-Fatima/Learning-Website" ,
        thumnail: learning
    },
    { 
        title: "Algorithm Convex Hull", 
        description: "An implementation of convex hull and line intersection algorithms in Java.",
        tags: ["java", "algorithms", "data-structures", "geometric-algorithms"], 
        link: "https://github.com/Maham-Fatima/Algorithm-Convex-hull-and-line-intersection-" ,
        thumnail: jarvis
    },
    { 
        title: "Student Management System", 
        description: "A web-based student management system using PHP, MySQL, and AJAX. It has admin, faculty and student panel. It includes student registeration, attendance, sessional marks, course enrollment, course assignment features etc",
        tags: ["php", "ajax", "jquery", "mysql", "tailwind"], 
        link: "https://github.com/Maham-Fatima/Student-Managment-System" ,
        thumnail: student
    },
    { 
        title: "Weather Robo", 
        description: "A Python-based weather chatbot using OpenWeatherMap API.",
        tags: ["python", "api", "openweathermap"], 
        link: "https://github.com/Maham-Fatima/WeatherRobo" ,
        thumnail: weather
    },
    { 
        title: "Java Swing Game", 
        description: "A simple 2D game developed using Java Swing and OOP concepts.",
        tags: ["java", "swing-gui", "game", "oops-in-java"], 
        link: "https://github.com/Maham-Fatima/Java_swing_Game" ,
        thumnail: game
    },
    { 
        title: "UNO Game", 
        description: "A console-based UNO card game implemented in Java with data structures.",
        tags: ["java", "data-structures"], 
        link: "https://github.com/Maham-Fatima/UNOgame" ,
        thumnail: uno

    },
    { 
        title: "Portfolio", 
        description: "My personal portfolio showcasing my skills and projects.",
        tags: ["html", "css", "aceternity ui", "tailwind", "react", "js"], 
        link: "https://github.com/Maham-Fatima/MyPortfolio.git" ,
        thumnail: portfolio
    },
    { 
        title: "Console-Based Quiz Management System", 
        description: "A Java console-based quiz system with file handling and OOP principles.",
        tags: ["java", "oop", "filing"], 
        link: "https://github.com/Maham-Fatima/Console-Based-Quiz-Management-System-Java",
        thumnail: oop 
    }
];

  return (

    <div className="w-full min-h-screen bg-gray-200 overflow-hidden"> {/* Removed max-w-[100vw] */}
  <HeroParallax products={projects} />
</div>
  )
}

export default Projects