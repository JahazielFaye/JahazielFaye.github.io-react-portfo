import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import faye from "../public/faye.png";
import code from "../public/code.png";
import design from "../public/design.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import grow from "../public/grow.png";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyJHZL</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-yellow-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://www.canva.com/design/DAFdHkQBw5Q/ZAoKPnzcvPfN2ahLXaqwKg/view?utm_content=DAFdHkQBw5Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-yellow-600 font-medium dark:text-teal-400 md:text-6xl">
              Jahaziel Faye Ponsaran
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full-Stack Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              An aspiring Full-stack developer with a passion for UI, I&rsquo;m
              excited to focus on creating visually appealing and user-friendly
              web applications. I enjoy designing and implementing user
              interfaces using front-end technologies such as HTML, CSS, and
              JavaScript. I&rsquo;m also looking forward to gaining experience with
              front-end frameworks like React, Angular, or Vue.js.{" "}
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/JahazielFaye">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/jahaziel-ponsaran-a87646237/">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-yellow-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={faye} layout="fill" objectFit="cover" alt="my pic" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a{" "}
              <span className="text-teal-500">Full-Stack designer</span> and
              <span className="text-yellow-500"> Developer,</span> I have been
              passionate about creating meaningful and engaging digital
              experiences that delight users and drive business results. With a
              background in both design and development, I bring a unique
              perspective to every project and thrive in collaborative
              environments where I can work closely with cross-functional teams
              to bring ideas to life. Whether I&rsquo;m designing a sleek interface,
              writing clean code, or troubleshooting a technical issue, I&rsquo;m
              constantly learning and pushing myself to improve my skills and
              deliver exceptional work
            </p>
            <h3 className="text-3xl py-1 dark:text-white ">Services</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="3d gallery icon"/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="3d number sign" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Custom Website Development Website Design/Redesign Database
                Development Responsive and Mobile-First Design User Experience &
                Design E-Commerce Web Development Content Management System
                (CMS) Version Management, GitHub MERN Stack: MongoDB, Express,
                ReactJS, and Node.js
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              <span className="text-teal-500"> My Recent Work </span>
              Worked and <span className="text-teal-500">Collaboration </span>
              with talanted people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and editing.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <div className="border rounded-lg overflow-hidden">
                <Link href="https://rilaey.github.io/Park-Finder/">
                  <a>
                    <Image
                      className="object-cover"
                      width={"100%"}
                      height={"100%"}
                      layout="responsive"
                      src={web1}
                      alt="park finder website"
                    />
                    <div className="p-2 bg-gray-100 text-center">
                      <h3 className="font-burtons text-xl">Park Finder</h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="border rounded-lg overflow-hidden">
                <Link href="https://www.figma.com/file/NP7Gq0bIVM8ejGngKEQ3X2/Dad-web?node-id=20%3A265&t=A2iFsNES4gfA2cgG-0">
                  <a>
                    <Image
                      className="object-cover"
                      width={"100%"}
                      height={"100%"}
                      layout="responsive"
                      src={web2}
                      alt="figma prototype"
                    />
                    <div className="p-2 bg-gray-100 text-center">
                      <h3 className="font-burtons text-xl">Figma Prototype</h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="border rounded-lg overflow-hidden">
                <Link href="https://techhub.herokuapp.com/">
                  <a>
                    <Image
                      className="object-cover"
                      width={"100%"}
                      height={"100%"}
                      layout="responsive"
                      src={web3}
                      alt="Tech Hub"
                    />
                    <div className="p-2 bg-gray-100 text-center">
                      <h3 className="font-burtons text-xl">Tech Hub</h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="border rounded-lg overflow-hidden">
                <Link href="https://jahazielfaye.github.io/Weather-board/">
                  <a>
                    <Image
                      className="object-cover"
                      width={"100%"}
                      height={"100%"}
                      layout="responsive"
                      src={web4}
                      alt="Weather Board website"
                    />
                    <div className="p-2 bg-gray-100 text-center">
                      <h3 className="font-burtons text-xl">Weather Board</h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="border rounded-lg overflow-hidden">
                <Link href="https://github.com/JahazielFaye/PWA-Text-Processor">
                  <a>
                    <Image
                      className="object-cover"
                      width={"100%"}
                      height={"100%"}
                      layout="responsive"
                      src={web5}
                      alt="PWA text proccessor github"
                    />
                    <div className="p-2 bg-gray-100 text-center">
                      <h3 className="font-burtons text-xl">
                        PWA Text Processor
                      </h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="border rounded-lg overflow-hidden">
                <Link href="https://jahazielfaye.github.io/Weather-board/">
                  <a>
                    <Image
                      className="object-cover"
                      width={"100%"}
                      height={"100%"}
                      layout="responsive"
                      src={grow}
                      alt="Photo of a plant"
                    />
                    <div className="p-2 bg-gray-100 text-center">
                      <h3 className="font-burtons text-xl">ReadME Generator</h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
