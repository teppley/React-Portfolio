/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import avatar from "../public/avataaars.png";
import design from "../public/design.png";
import code from "../public/code.png";
import scroll from "../public/scroll.png";
import arrdvarchive from "../public/arrdvarchive title.jpg"
import yeti from "../public/yeti-games-screenshot.jpg"
import blog from "../public/tech-blog.png"
import javascript from "../public/javascript-logo.png"
import mysql from "../public/logo-mysql.png"
import nodejs from "../public/nodejs-logo.png"
import csslogo from "../public/css-logo.png"
import tailwindlogo from "../public/Tailwind_CSS_Logo.svg.png"
import HTMLlogo from "../public/HTML5-logo.png"
import mongoDBlogo from "../public/MongoDB-logo.png"
import Reactlogo from "../public/React-icon.png"
import PersuadeMe from "../public/Screenshot 2023-06-12 164124.png"
import nextJS from "../public/next-js-logo.png"
import React from "react";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-zinc-900 md:px-20 lg:px-40">
        
        {/* Header */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between border rounded-lg border-whie bg-zinc-500 sticky top-0 dark:text-white dark:bg-zinc-800 dark:border-zinc-800">
            <h1 className="text-xl font-burtons pl-5 hover:animate-bounce text-white">
              <a href="https://github.com/teppley?tab=repositories" target="_blank" rel="noreferrer">Created By: teppley</a>
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl  hover:animate-spin hover:fill-indigo-600" />
              </li>
              <li>
  <a
    className="bg-gradient-to-r from-pink-500 text- to-cyan-600 text-white px-4 py-2 mr-5 border-none rounded-md ml-12 hover:animate-pulse"
    href="https://drive.google.com/file/d/1VpU5wxVsUFXNys6bUnprNWLTOvjGLyGD/view?usp=sharing" target="_blank" rel="noreferrer"
  >
    Resume
  </a>
</li>
            </ul>
          </nav>

          {/* Introduction */}
          <div className="text-center p-10">
            <h2 className="text-6xl py-2 text-purple-500 font-medium font-burtons">Tyler Eppley</h2>
            <h3 className="text-3xl py-2 dark:text-white font-burtons">Full Stack Web Developer</h3>
            <p className="text-lg py-5 leading-6 dark:text-white">
              An aspiring programmer with an interest in creative design.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-6xl text-zinc-600 flex justify-center gap-20 py-3">
            <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-100 hover:bg-cyan-600 duration-300">
              <a href="https://www.linkedin.com/in/tyler-eppley-b2483426b/" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 rounded-full">
              <a href="https://github.com/teppley?tab=repositories" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="mx-auto bg-gradient-to-b from-purple-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 mb-20 md:h-96 md:w-96">
            <Image src={avatar} layout="fill" objectFit="cover" />
          </div>

          {/* About Me */}
          <div className="lg:flex lg:flex-col lg:items-center">
            <h3 className="text-4xl py-1 dark:text-white text-center font-burtons">About Me:</h3>
            <p className="text-md py-2 leading-8 dark:text-white text-center">
              I began my coding journey as a full-time student enrolled at the University of Central Florida, UCF Coding Bootcamp.
              While enrolled, I have learned multiple coding languages ranging from front-end development to back-end server management.
              My experience has resulted in an interest for simple yet elegant designs and data management.
            </p>
          </div>

          {/* Skills */}
          <div className="lg:flex gap-10">
            <div className="text-center shadow-xl shadow-purple-400 p-10 rounded-xl my-10 dark:bg-zinc-800 flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium underline my-10 dark:text-white font-burtons">Design:</h3>
              <p className="py-2 dark:text-white mb-10">Creating front-end designs using styling languages.</p>
              <p className="dark:text-white py-1"><Image src={csslogo} width={20} height={20}/>CSS</p>
              <p className="dark:text-white py-1"><Image src={tailwindlogo} width={25} height={20}/>Tailwind</p>
            </div>
            <div className="text-center shadow-xl shadow-purple-400 p-10 rounded-xl my-10 dark:bg-zinc-800 flex-1">
              <Image src={code} width={100} height={100} />
              <h4 className="text-lg font-medium my-10 underline dark:text-white font-burtons">Coding:</h4>
              <p className="py-2 dark:text-white mb-10">I have experience in many programming languages and technologies.</p>
              <p className="dark:text-white py-1"><Image src={HTMLlogo} width={30} height={20}/>HTML</p>
              <p className="dark:text-white py-1"><Image src={javascript} width={50} height={20}/> JavaScript</p>
              <p className="dark:text-white py-1"><Image src={mysql} width={30} height={20}/>MySQL</p>
              <p className="dark:text-white py-1"><Image src={nodejs} width={30} height={20}/>Node.js</p>
              <p className="dark:text-white py-1"><Image src={mongoDBlogo} width={30} height={20}/>MongoDB</p>
              <p className="dark:text-white py-1"><Image src={Reactlogo} width={30} height={20}/>React</p>
              <p className="dark:text-white py-1"><Image src={nextJS} width={25} height={20}/>Next.js</p>
            </div>
            <div className="text-center shadow-xl shadow-purple-400 p-10 rounded-xl my-10 dark:bg-zinc-800 flex-1">
              <Image src={scroll} width={100} height={100} />
              <h5 className="text-lg font-medium my-10 underline dark:text-white font-burtons">Projects:</h5>
              <p className="py-2 dark:text-white mb-10">Here are some applications I have created.</p>
              <p className="pb-10 hover:animate-pulse">
                <a href="https://ancient-fortress-32796.herokuapp.com/" target="_blank" rel="noreferrer">
                  <Image src={arrdvarchive} width={200} height={50} />
                </a>
              </p>
              <p className="hover:animate-pulse">
                <a href="https://chemicalmodel.github.io/Yeti-Games/" target="_blank" rel="noreferrer">
                  <Image src={yeti} width={200} height={50} />
                </a>
              </p>
              <p className="mt-10 hover:animate-pulse">
                <a href="https://vast-hollows-79062.herokuapp.com/" target="_blank" rel="noreferrer">
                  <Image src={blog} width={200} height={50} />
                </a>
              </p>
              <p className="pt-10 hover:animate-pulse">
                <a href="https://github.com/teppley/Persuade-Me" target="_blank" rel="noreferrer">
                  <Image src={PersuadeMe} width={200} height={50} />
                </a>
              </p>
            </div>
          </div>

          {/* Contact */}
          <footer>
            <p className="text-4xl py-1 dark:text-white text-center font-burtons pt-10 pl">📧Contact:</p>
            <div className="dark:text-white text-center font-burtons text-2xl">Please feel free to contact me by email</div>
            <div className="dark:text-white text-center text-2xl underline pb-5">
              <a href="mailto:teppley300@gmail.com">teppley300@gmail.com</a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}