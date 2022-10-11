import "./App.css";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import Startups from "./Components/Startups";
import Podcasts from "./Components/Podcasts";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home
                cardContent={{
                  card1:
                    "We are an incubation center that strives to promote innovations that have a direct impact on society, We do this by providing a platform for young and passionate innovators to incubate their startup and assist them at every step. From assisting innovators in acquiring the skills required to make their idea a reality to Intellectual Property Rights Cell, We have it all.",
                  card2:
                    "IG's most prestigious hackathon, Firefly is an accelerator program with the purpose of nurturing the entrepreneurial spirit, leadership qualities and industry awareness among innovative youth of our nation.",
                  card3:
                    "Artificial intelligence, Machine Learning, Robotics, Hacking, Design, etc.",
                }}
                videoUrl={{
                  card1: "https://www.youtube.com/watch?v=_x0h71EYVTw",
                  card2: "https://www.youtube.com/watch?v=punNYG_d0HE",
                  card3: "https://www.youtube.com/watch?v=4hfikvQviQQ",
                }}
              />
              <Footer/>
            </>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <Projects
                projectsInfo={[
                  {
                    heading: "Zenith",
                    para:
                      "Mechanization has taken over the world, and in a dash for modernization, the ethnicity of their res publica is now at stake. Accusations have been made and wars have been waged! Will the brave body politic be able to uphold their torch of dignity? Use menacing weapons to fight your way into the fierce battlegrounds. Wit, speed and zeal will be your only aid when friends turn into foes. Jump, slide, wall run – parkour your way to the flag and battle menacing weapons to fight for the sacred flag of Ze. Complete this quest to conquer the flag once and forever.But remember, the fight will not be easy and the battle shall not spare anyone. Capture the flag, save the res publica and see the body politic pay their obeisance to the hero that they’d hail as ‘Zenith’ or be banished to lifelong tribulation!",
                    status: "Status: work in progress",
                    imageUrl:"https://nitw.ac.in/cii/images/Zenith.png",
                    gameUrl:"https://gbitstudios.com/zenith/"
                  },
                  {
                    heading: "Maya",
                    para:
                      "Hailing from a family devoted to serving the nation, yet unknown to their true profession, Maya wakes up to find herself on a deserted island. A lush green island filled with beautiful flora but devoid of any sort of human traces.From waking up to a heartwarming smell of pancakes with cool breeze rushing in through the window nearby to waking up amidst a deserted island, all Maya can feel is despair and uncertainty. Completely disconnected from the outside world, she now has to do whatever it takes to survive until any sort of help arrives. Lost and broken, she wades her way through to what seems to be a… Survive through the desolation, keep your willpower high this isolation and fend off mortal enemies while you discover the hitherto unknown abilities that you possessed. Learn as much as you can, be it assassination or building a house, for you never know what might come in handy in the bewildered future that lies ahead of you.",
                    status: "Status: work in progress",
                    imageUrl:"https://nitw.ac.in/cii/images/Maya.png",
                    gameUrl:"https://gbitstudios.com/maya/"
                  },
                  {
                    heading: "3DX Wall",
                    para:
                      "With simplistic tap control, get ready to find yourselves in a realm of walls that are sworn of secrecy. But like every other vow, this one is meant to be broken too, tap away to find out the secrets hidden behind these walls. Smash through all the baileys and surpass all the fortifications to break all the high scores. Improve your focus! Balancing one ball will only get you so far into the game, unlock the extra hassle to reach greater depths and discover the secrets faster! Juggle between three balls without losing track of any of them to amp up your focus levels. Vibe! Revamps! Ranging from textures to health, every wall has a unique identity and secret to protect. Get a revamped look as you progress through the game!",
                    status: "Status: Coming Soon",
                    imageUrl:"https://nitw.ac.in/cii/images/3Dx-Wall.png",
                    gameUrl:"https://gbitstudios.com/3dxwall/"
                  },
                  {
                    heading: "Net it",
                    para:
                      "Practice winning all day long! Shoot across the half court line to make it count, and defend your hoop against the CPU genius by blocking the shots before the clock runs out. The cherished game of basketball is now available as a one-on-one shooting and blocking game on your mobiles. This unique take on your all time favourite sport now let’s you experience playing Basketball even through rain and snow! Keep shooting and blocking to perfect your skills with a plethora of available customizations and match duration. With Net It, winning is nothing but a habit that comes with a lot practice through rain and snow!",
                    status: "Status: April 23, 2020",
                    imageUrl:"https://nitw.ac.in/cii/images/Net-It-Screenshot-5.png",
                    gameUrl:"https://gbitstudios.com/net-it/"
                  },
                  {
                    heading: "Blade Demon",
                    para:
                      "A merciless warrior fought for the gods with great zeal and bravery. Seeing his devilish nature, the gods of heaven, although thankful and impressed, found his devilish deeds unworthy of deserving a place in their realm of virtue and morality. They collectively decided to banish him from their realm but reward him generously with powers and riches for his devilish deeds of heroism. Dejected and despondent, he set out on his journey to oblivion. There is only so much one can do to exist, living was a concept that he had let go of a long time ago. He was fuelled by madness. The anger he couldn’t contain. The kind of anger that overshadows both reasoning and virtue. He wielded his blade and vowed to rule over the gods and the demons alike to avenge his dishonor. Fuelled by his abyss filled with anger, the demon slayer slays everything that comes in his path to take over both the realms.",
                    status: "Status: Work in Progress",
                    imageUrl:"https://nitw.ac.in/cii/images/Blade-Demon.png",
                    gameUrl:"https://gbitstudios.com/blade-demon/"
                  },
                  {
                    heading: "Maximum Velocity",
                    para:
                      "Shatter highscores and dash through the endless cosmos with Maximum Velocity! Dash through space using your spacecraft's maximum velocity. Break through barriers and dash through distress! Feel the rush of adrenaline through your veins as you fight against our space manifesto while dashing through the cosmos. Distinct focus will help you break highscores with maximum velocity. Let the dash of adrenaline rush begin!",
                    status: "Status: October 21, 2019",
                    imageUrl:"https://nitw.ac.in/cii/images/Maximum-Velocity.png",
                    gameUrl:"https://gbitstudios.com/maximum-velocity/"
                  },
                  {
                    heading: "Flick to Kick Rugby",
                    para:
                      "Flick to simulate a kick! Aim to perfection! This unique new take on your standard game of Rugby allows the player to enjoy playing even through rain and snow. Flick your finger to shoot, lob, hurl, fling or kick the rugby through the goal post. Your record breaking kick is just a flick away! Win something every day! With daily and weekly available loot boxes, one can make full use of the opportunity to win coins or unlock cool and otherwise coin heavy customizations in a shorter span of time. Also allows one to test their luck every day. Keep flicking and kicking in any of the 3 available Game Modes to sweep your way to the top of the leaderboard.",
                    status: "Status: August 1, 2019",
                    imageUrl:"https://nitw.ac.in/cii/images/Flick-To-Kick-Rugby.png",
                    gameUrl:"https://gbitstudios.com/flick-to-kick-rugby/"
                  },
                  {
                    heading: "Revenge of the Sudoku",
                    para:
                      "This twist of Sudoku finally lets you enjoy your favourite number’s game against your friends or against your phone. Players take turns entering numbers on the Sudoku battlefield while keeping the classic rules of the game in mind, with one addition rule – last one standing wins. Be sure to read the in-game help page before getting started. Bonne chance! What more could you ask for, it also lets you enjoy it against your phone. Players take turns entering numbers on the Sudoku battlefield while keeping the classic rules of the game in mind, with one addition rule – the last one standing wins.",
                    status: "Status: July 5, 2019",
                    imageUrl:"https://nitw.ac.in/cii/images/Revenge-of-The-Sudoku.png",
                    gameUrl:"https://gbitstudios.com/revenge-of-the-sudoku/"
                  },
                  {
                    heading: "Orbit Rush",
                    para:
                      "The apocalypse is real; the obstreperous black hole is expanding at the speed of light. Your ship is your only safe haven now, and finding a new abode your sole goal. Cruising from one orbit to the other, exploring the hitherto unexplored multiverse, competing against the others affected, beating high scores on your way, the dash to the perfect planet is going to be one hell of a voyage. Bon Voyage! Tap to blast into space and escape the apocalyptic black hole with agility! From an array of available choices, the players are free to customize their ship to suit their mood and help them beat high scores. Revamp the look of the game and continue that winning streak!",
                    status: "Status: April 19, 2019",
                    imageUrl:"https://nitw.ac.in/cii/images/Orbit-Rush.png",
                    gameUrl:"https://gbitstudios.com/orbit-rush/"
                  },
                ]}

                roboticProjects={[
                  {
                    project_name:"Autonomous Wheeled Robot",
                    project_info:"It is a mobile robot which moves on wheels and senses it’s immediate surroundings and develops a map using the technique of SLAM and can navigate autonomously. Use Case include dispensing sanitizer to passersby and wider applications exist",
                    project_status:"Status: work in progress"
                  },
                  {
                    project_name:"Intelligent Industrial Warehousing Mechanism",
                    project_info:"Recognize discrete objects in a dynamic environment using a unique algorithm with the aim of transferring the objects to their designated places. Use Cases include retrieving and depositing objects within storage facilities. Transferring complex shaped products from production lines into storage and/or delivery lines",
                    project_status:"Status: work in progress"
                  },
                  {
                    project_name:"Bionic Butterfly",
                    project_info:"Bionics is the application of biological methods and systems found in nature to study and design of engineering systems and modern technology.",
                    project_status:"Status: work in progress"
                  }
                ]}
                MultimediaProjects={[
                  {
                    project_name:"Trademanza",
                    project_info:"Trademanza a fintech app that focuses on teaching students how the stock market works via a simulation environment and daily stock market challenges.",
                    project_status:"Status: work in progress"
                  },
                  {
                    project_name:"Nest and Spoon",
                    project_info:"Nest and Spoon a b2c2c company that sells travel packages to their guides who then resell the package for a profit margin of their own.",
                    project_status:"Status: work in progress"
                  },
                  {
                    project_name:"Workerhub",
                    project_info:"Workerhub a startup by students of IIM-A that provides a seamless on-demand hire of unskilled labour eliminating the commission loss incurred by firms when they do the same via contractors. Due to the stellar performance of the team, the project head Avinash Pulugurtha was later offered a full-time startup core team position as the head of product development and currently leads a team of 2 IIM Rohtak students.",
                    project_status:"Status: work in progress"
                  },
                  {
                    project_name:"Saevus",
                    project_info:"Saevus India's premium print magazine & web portal, showcasing the best of Photography, Travel, Nature, bio-diversity & wildlife of India and the world.",
                    project_status:"Status: work in progress"
                  },
                  {
                    project_name:"Elite Mart",
                    project_info:"Elite Mart is an upcoming chain of supermarkets targetted at tier 2 and tier 3 cities. The USP of elite marts is a door to door delivery and an app interface and website for local residents to order, these features have not yet penetrated their target market and elite mart is leading the transformation.",
                    project_status:"Status: work in progress"
                  },
                  {
                    project_name:"Grub Shack",
                    project_info:"Grub Shack a personal project of the team that is under development for the students of NITW. The app has features that enable students to order food from the stalls present within our campus and notifies students when their order is ready. The app has an inbuilt payment gateway and also has a delivery option should a student choose to get the item delivered to their hostels.",
                    project_status:"Status: work in progress"
                  }
                ]}
                cyberInfo={[
                  {
                    heading: "CynuxSecurity OS",
                    para:
                      "Cynux Security is built to help security enthusiasts and penetration testers, designed to perform pentesting with security tools, and give great interface.",
                    status: "Status: Released with v2021.0.1",
                    imageUrl:"https://nitw.ac.in/cii/images/cynuxlogo.png",
                    gameUrl:"https://www.cynuxsecurity.org/"
                  },
                  {
                    heading: "Kaumodaki",
                    para:
                      "Kaumodaki is a tool which has a collection of all the popular hacking tools at one place. Purpose: All in one pentesting tool. Kaumodaki contains all relevant tools which can be used in pen-testing Company Infrastructure.",
                    status: "Status: Work in progress",
                    imageUrl:"https://nitw.ac.in/cii/images/Kaumodaki.jpg",
                    gameUrl:"https://github.com/CybSec-NITW/kaumodaki"
                  },
                  {
                    heading: "WeaponHEX",
                    para:
                      "All in one tool kit for CTF players. Contains all important tools useful for CTFs.",
                    status: "Status: work in progress",
                    imageUrl:"https://nitw.ac.in/cii/images/weapon%20hex.png",
                    gameUrl:"https://github.com/CybSec-NITW/WeaponHEX"
                  },
                  {
                    heading: "BadUSB Implementation",
                    para:
                      "We CybSec NITW have developed a Bad USB script for social Engineering Attack. This Script uses very low space around 4kB and can be used as a low cost Bad USB. Bad USB is a tool which is detected by a computer as a Keyboard and it executes commands with super fast speed which can be used to exploit PCs. It can be further used for development of our own Rubber Ducky To hack PCs and remote administer them from our servers",
                    status: "Status: Work in progress",
                    imageUrl:"https://nitw.ac.in/cii/images/badUSB%20Implementation.png",
                  },
                  {
                    heading: "Bug Analysing Project",
                    para:
                      "Team worked on analysis of different types of bugs and reported some of them.",
                    status: "Status: Work in progress",
                    imageUrl:"https://nitw.ac.in/cii/images/Bug%20Analysing%20Project_1.png",
                  },
                  {
                    heading: "Malware Analysis",
                    para:
                      "We created and analysed some malicious files like virus, trojans and ransomware, and noted functionalities like Darth Vader, KingLockerRansomWare, etc",
                    status: "Status: Work in Progress",
                  },
                  {
                    heading: "CTF Platform",
                    para:
                      "Since CTFs are very popular in cybersecurity Team CybSec wants to develop their own Open Source CTF platform for effective conduction and management. The Framework will be focusing on ease of use and customizability. The Platform is Currently private and under development.",
                    status: "Status: October 21, 2019",
                    imageUrl:"https://nitw.ac.in/cii/images/CTF%20Platform.png",
                  },
                  
                ]}
                NevrónasInfo={[
                  {
                    heading: "Space Debris Tracking",
                    para:
                      "This is an ongoing project of Nevrónas. We're trying to use ML models, specifically Recurrent Neural Networks to predict the future position of objects in orbit around the Earth for quick and accurate tracking of space debris.",
                    status: "Status: February, 2019- Present",
                    imageUrl:"https://nitw.ac.in/cii/images/Space%20Debris%20Tracking-Nevronas.jpg",
                  },
                  {
                    heading: "Artistic Image Generation using GAN",
                    para:
                      "In this project we're working on generation of artistic image using Generative Adversarial Network. Considering the existence various types of artistic images, we are focusing on abstract art as of now.",
                    status: "Status: May, 2019-Present",
                    imageUrl:"https://nitw.ac.in/cii/images/Artistic%20Image%20Generation%20using%20GAN-Nevronas.jpg",
                  },
                  {
                    heading: "Musical Instrument Clusturing",
                    para:
                      "In Nevrónas, we're working on Clusturing of Musical Instruments. Though promising results have been obtained with convolutional architecture, more extensive research is going on to improve it further.",
                    status: "Status: April, 2019- Present",
                    imageUrl:"https://nitw.ac.in/cii/images/Musical%20Instrument%20Clusturing%20-%20Nevronas.jpg",
                  },
                  
                  
                ]}
              />
              <Footer/>
            </>
          }
        />
        <Route
        path="/podcasts"
        element={<><Navbar/><Podcasts/><Footer/></>}
        />
        <Route
        path="/startups"
        element={<><Navbar/>
        <Startups
          startupcard={[
            {
              startupImgUrl:"data:image/png;base64,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",
              startupName:"Skylark Labs",
              startupInfo:"Skylark Labs develops continuously evolving and customizable threat detection systems for enhanced physical security. Clients (CCTV or Drone companies) can customize proprietary AI solutions at the time of deployment or continuously evolve them if needed after deployment making them preferable to other comparable market solutions.",
              buttonUrl:"https://skylarklabs.ai/"
            },
            {
              startupImgUrl:"https://www.cusmat.com/images/home/logo.svg",
              startupName:"Cusmat Technologies",
              startupInfo:"Enable organizations to Onboard, Assess, Train, Upskill, Plan Learning Tracks for the employees/ workforce to maximize retention rates and on the Job Performance by using our AR/VR, Cloud-based Learning Management system.",
              buttonUrl:"https://cusmat.com/"
            },
            {
              startupImgUrl:"https://www.virtualrealitymarketing.com/wp-content/uploads/2018/06/archphillic-300x208.jpg",
              startupName:"Archphillic",
              startupInfo:"ArchPhillic is a Virtual Reality Company which provides Virtual Reality and other immersive solutions to visualize and customize their Pre-constructed properties.",
              buttonUrl:"https://www.virtualrealitymarketing.com/company/archphillic/"
            },
            {
              startupImgUrl:"https://media-exp1.licdn.com/dms/image/C4D0BAQH2c9aSLEu5Nw/company-logo_200_200/0/1599817685979?e=2147483647&v=beta&t=1ct-mNNsDWHa2Tjj9aXt5u7eVvt16S3mTWYgxOfeTrQ",
              startupName:"Epick Bikes ( Centaur Automotive )",
              startupInfo:"Centaur Automotive Pvt Ltd. is a technology based Indian EV company with a strong vision of development, implementation & commercialization of a sustainable transportation solution for daily commute. Epick Bikes is an affiliated brand under Centaur, which manufactures smart electric bikes for city range personal transportation. Keeping Convenience, Affordability & Customer Centricity as the core DNA, currently the company offers its smart e-bike solutions for B2B applications thus contributing to India's vision of building EV eco-system.",
              buttonUrl:"https://www.linkedin.com/company/epick-bikes/"
            },
            {
              startupImgUrl:"data:image/jpeg;base64,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",
              startupName:"Kalam Notebooks",
              startupInfo:"A startup that focuses on 'notebook advertising. Successfully sold over 25K Notebooks within a year",
              buttonUrl:"https://www.linkedin.com/in/ghanshyam-s/"
            },
            {
              startupImgUrl:"https://nitw.ac.in/cii/static/media/gbit.c9656ca5.png",
              startupName:"GBit Studios",
              startupInfo:"GBit Studios consists of a group of individuals who share a common passion and love for making games. We design and develop games from scratch for the various niches of the gaming world, learning and growing together in the process.",
              buttonUrl:"https://gbitstudios.com/"
            },
            {
              startupImgUrl:"https://nitw.ac.in/cii/static/media/flohrex.0d87d482.png",
              startupName:"Flowhrex Technologies",
              startupInfo:"To make process intensification and flow chemistry, available, applicable and affordable for chemical industries and create a greener impact over Indian Chemical Industry",
              buttonUrl:"https://www.flowrhex.com/"
            }
          ]}
        
        />
        <Footer/>
        </>}
        />
      </Routes>
    </>
  );
}

export default App;
