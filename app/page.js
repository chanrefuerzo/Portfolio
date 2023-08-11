"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import Chan from "../public/chan.png";
import gym from "../public/gym.png";
import wedding from "../public/wedding.png";
import His from "../public/his.png";
import Hollistic from "../public/Hollistic.png";
import ulrp from "../public/ulrp.png";
import cpdo from "../public/cpdo.png";
import blob from "../public/blob.svg";
import reactLogo from "../public/reactLogo.png";
import vueLogo from "../public/vueLogo.png";
import tailwindLogo from "../public/tailwindLogo.png";
import muiLogo from "../public/Mui.png";
import styledLogo from "../public/styled.png";
import sassLogo from "../public/sass.png";
import antDLogo from "../public/antD.png";
import avatar from "../public/avatar.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 ">
        <section className="">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <nav className=" py-10 mb-12 flex justify-end">
              <ul className="flex items-center gap-4 ">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl dark:text-slate-400"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    href="https://drive.google.com/file/d/17I_YyrjOgndkKQjFJR-IgD32sYP_tJmq/view?usp=drive_link"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        </section>
        <section className=" min-h-screen ">
          <div className="flex-none justify-center items-center sm:flex">
            <motion.div
              className=" relative rounded-full overflow-hidden mt-20 md:h-96 md:w-96    "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 0 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Image
                src={Chan}
                className="object-cover"
                layout="fill"
                alt="main picture"
              />
              <Image src={blob} alt="main blob" />
            </motion.div>
            <div className=" ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h2 className="text-3xl sm:text-5xl py-2 text-teal-600 font-medium text-center sm:text-left">
                  Front-End Developer
                </h2>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="sm:text-md text-center py-5 leading-8 text-gray-800 md:text-xl  mx-auto dark:text-gray-300">
                  Hi, I'm Christian Jan Refuerzo, React Front-End Developer
                  based on Philippines.
                </p>
              </motion.div>

              <div className=" flex-wrap sm:flex gap-2 ">
                <div className="  gap-2 text-gray-600 flex justify-center">
                  <motion.div
                    className="flex gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                  >
                    <AiFillFacebook className="w-8 h-8 sm:w-10 sm:h-10 " />
                    <AiFillLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />

                    <h3 className="text-3xl sm:flex justify-center hidden ">
                      |
                    </h3>
                  </motion.div>
                </div>

                <div className="  flex gap-4 -mt-0 sm:-mt-2 justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className=" bg-white shadow-xl rounded-full  p-2 cursor-pointer dark:bg-gray-400 "
                  >
                    <Image
                      src={reactLogo}
                      className="w-10 h-10 "
                      alt="react logo"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, type: "spring", bounce: 0.4 }}
                    className=" bg-white shadow-xl rounded-full  p-2 cursor-pointer dark:bg-gray-400 "
                  >
                    <Image
                      src={vueLogo}
                      className="w-10 h-10   "
                      alt="vue logo"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, type: "spring", bounce: 0.4 }}
                    className=" bg-white shadow-xl rounded-full  p-2 cursor-pointer dark:bg-gray-400 "
                  >
                    <Image
                      src={tailwindLogo}
                      className="w-10 h-10 "
                      alt="tailwind logo"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.9, type: "spring", bounce: 0.4 }}
                    className=" bg-white shadow-xl rounded-full  p-2 cursor-pointer dark:bg-gray-400 "
                  >
                    <Image
                      src={muiLogo}
                      className="w-10 h-10 "
                      alt="mui logo"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.1, type: "spring", bounce: 0.4 }}
                    className=" bg-white shadow-xl rounded-full  p-2 cursor-pointer dark:bg-gray-400 "
                  >
                    <Image
                      src={antDLogo}
                      className="w-10 h-10 "
                      alt="antd logo"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.4, type: "spring", bounce: 0.4 }}
                    className=" bg-white shadow-xl rounded-full  p-2 cursor-pointer dark:bg-gray-400 "
                  >
                    <Image
                      src={sassLogo}
                      className="w-10 h-10 "
                      alt="sass logo"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.7, type: "spring", bounce: 0.4 }}
                    className=" bg-white shadow-xl rounded-full  p-2 cursor-pointer dark:bg-gray-400 "
                  >
                    <Image
                      src={styledLogo}
                      className="w-10 h-10 "
                      alt="styled logo"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen">
          <div className="flex flex-col  py-10 lg:flex-row lg:flex-wrap  items-center  justify-center text-center sm:text-left">
            <div className="flex-1  flex justify-center pb-10 sm:pb-0 ">
              <Image src={avatar} className="w-96 " alt="avatar logo" />
            </div>
            <div className="basis-1/3 flex-1 px-10  ">
              <h3 className="text-sm font-bold py-1 dark:text-red-900">
                ABOUT ME
              </h3>
              <h2 className="text-3xl py-1 dark:text-teal-500">
                Front-End Developer based in Davao City, Philippines
              </h2>

              <p className="text-md  leading-8 text-gray-800   dark:text-gray-300 ">
                Hello, I'm Christian Jan Refuerzo, a front-end developer with 4
                years of experience. I've spent a{" "}
                <span className="text-teal-500"> year </span> working with a
                <span className="text-teal-500"> start-up company </span> and
                another <span className="text-teal-500"> 3 years </span> in the{" "}
                <span className="text-teal-500"> Government </span> sector I
                mainly work with JavaScript and
                <span className="text-teal-500"> React.js </span> as my primary
                language and framework. However, I have also gained experience
                with
                <span className="text-teal-500"> Vue.js </span> through one of
                my part-time projects, and I have some knowledge of TypeScript.
                For styling, I use{" "}
                <span className="text-teal-500">
                  Sass, Tailwind CSS, Ant Design, Material-UI, and Styled
                  Components
                </span>
                . and currently im exploring nextjs
              </p>
            </div>
          </div>
        </section>
        <section className=" min-h-screen py-10">
          <h3 className="text-3xl py-10 dark:text-teal-500">Portfolio</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                src={gym}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="gym thumbnail"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={wedding}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="wedding thumbnail"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={His}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="HIS thumbnail"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={Hollistic}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="Hollistic thumbnail"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={cpdo}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="sample thumbnail"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={ulrp}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="sample thumbnail"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
