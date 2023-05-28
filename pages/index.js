/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import avatar from "../public/avataaars.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
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
      <main className=" bg-white px-10 dark:bg-zinc-900 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons hover:animate-bounce"><a href="https://github.com/teppley?tab=repositories" target="_blank" rel="noreferrer">Created By: teppley</a></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl hover:animate-spin hover:fill-indigo-600" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-pink-500 text- to-cyan-600 text-white px-4 py-2 border-none rounded-md ml-12 hover:animate-pulse" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-6xl py-2 text-purple-500 font-medium font-burtons">Tyler Eppley</h2>
            <h3 className="text-3xl py-2 dark:text-white font-burtons">Full Stack Web Developer</h3>
            <p className="text-lg py-5 leading-6 dark:text-white">
              An aspiring programmer with an interest in creative design.
            </p>
          </div>
          <div className="text-6xl text-zinc-600 flex justify-center gap-20 py-3">
          <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-100 hover:bg-cyan-600 duration-300"><a href="https://www.linkedin.com/in/tyler-eppley-b2483426b/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></div>
          <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 rounded-full"><a href="https://github.com/teppley?tab=repositories" target="_blank" rel="noreferrer"><AiFillGithub /></a></div>
          </div>
          <div className="mx-auto bg-gradient-to-b from-purple-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl py-1 dark:text-white text-center font-burtons">About Me:</h3>
            <p className="text-md py-2 leading-8 dark:text-white text-center">
              I began my coding journey as a full time student enrolled at University of Central Florida, UCF Coding Bootcamp. While enrolled, I have learned multiple coding languages ranging from front end development to back end server management. I have a passion for simple yet elegant designs and data management. 
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-xl shadow-purple-400 p-10 rounded-xl my-10 dark:bg-zinc-800 flex-1">
              <Image src={design} width={100} height={100}/>
              <h3 className="text-lg font-medium underline my-10 dark:text-white font-burtons">Designs:</h3>
              <p className="py-2 dark:text-white mb-10">Creating front end designs using differnet styling languages.</p>
              <p className="dark:text-white py-1">CSS stlying</p>
              <p className="dark:text-white py-1">Tailwind styling</p>
            </div>
            <div className="text-center shadow-xl shadow-purple-400 p-10 rounded-xl my-10 dark:bg-zinc-800 flex-1">
              <Image src={code} width={100} height={100}/>
              <h4 className="text-lg font-medium my-10 underline dark:text-white font-burtons">Coding Languages:</h4>
              <p className="py-2 dark:text-white mb-10">I have experience in many programming languages and technologies.</p>
              <p className="dark:text-white py-1">HTML</p>
              <p className="dark:text-white py-1">Java Script</p>
              <p className="dark:text-white py-1">MySQL</p>
              <p className="dark:text-white py-1">Node.js</p>
              <p className="dark:text-white py-1">MongoDB</p>
              <p className="dark:text-white py-1">React</p>
              <p className="dark:text-white py-1">Next.JS </p>
            </div>
            <div className="text-center shadow-xl shadow-purple-400 p-10 rounded-xl my-10 dark:bg-zinc-800 flex-1">
            <Image src={consulting} width={100} height={100}/>
            <h5 className="text-lg font-medium my-10 underline dark:text-white font-burtons">Projects:</h5>
            <p className="py-2 dark:text-white mb-10">Here are some applications I have made.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
