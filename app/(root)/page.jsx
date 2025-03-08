"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
// import "../globals.css";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Button from "@/components/Button";
import Me from "@/public/image/me.jpg";
import Image1 from "@/public/image/me2.jpg";
import Image2 from "@/public/image/me2.jpg";
import Image3 from "@/public/image/me2.jpg";
import Setup from "@/public/image/setup.jpg";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";
import "@/app/(root)/page.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  const fullpageOptions = {
    anchors: ["Inicio", "Nosotros", "Proyectos", "contacto"],
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
    menu: "#sidebar",
    lockAnchors: false,
  };

  return (
    <div>
      <div className="tundra-boreal"></div>
      <ReactFullpage
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
                <motion.div
                  className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                  }}
                >
                  <div className="block md:hidden col-span-1 mx-auto my-10">
                    <div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
                      <Image
                        src={Me}
                        width={500}
                        height={500}
                        className="rounded-full w-full h-full object-cover "
                        alt="Alvalens"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <motion.h3
                    className="uppercase text-sm mb-2 font-normal text tracking-[.5rem] text-gray-400"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                  >
                    Innovación y Eficiencia en Desarrollo Web
                  </motion.h3>
                  <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
                    style={{color:"#333"}}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                    }}
                  >
                    SSDEV
                  </motion.h1>
                  <motion.p
                    className="title text-md  2xl:text-xl mt-2 tracking-wider text-gray-500 leading-[1.7rem]"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.4,
                      type: "spring",
                    }}
                  >
                    Desarrollamos soluciones digitales a medida, desde páginas
                    web hasta automatizaciones
                  </motion.p>
                  <motion.div
                    className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                    }}
                  >
                    {/* <Button variation="primary">
                      <Link
                        href={"/Nosotros"}
                        target="_blank"
                        rel="noopener noreferrer"
                        locale={false}
                      >
                        Whatsapp
                      </Link>
                    </Button> */}
                    <Button variation="secondary">
                      <a href="#contacto">Contáctanos</a>
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="hidden md:flex col-span-1 mx-auto justify-center items-center "
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.7,
                    type: "spring",
                  }}
                >
                 
                </motion.div>
              </div>
            </div>
            <div className="section">
              <div className="relative md:h-screen w-screen flex flex-col md:flex-row justify-center items-center gap-4 overflow-hidden">
                {/* Contenedor de imágenes */}
                <div className="z-0 flex flex-col md:flex-row gap-4 md:absolute md:right-[1%]">
                  {[Image1, Image2, Image3].map((img, index) => (
                    <motion.div
                      key={index}
                      className="bg-slate-300 rounded-sm h-[100px] md:h-[400px] md:w-[19vw] grayscale hover:grayscale-0"
                      initial={{ x: 300, opacity: 0, z: -100 }}
                      whileInView={{ x: 0, opacity: 1, z: 0 }}
                      transition={{
                        delay: 0.5 + index * 0.2,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                    >
                      <Image
                        src={img}
                        layout="fill"
                        className="object-cover rounded-md"
                        alt={`Image ${index + 1}`}
                        placeholder="blur"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Contenedor de texto con fondo */}
                <div className="z-10 w-full md:w-[30%] absolute md:left-[3%] top-[10%] md:top-[20%] flex flex-col justify-center items-start px-10 py-5 bg-white/70 md:bg-transparent md:backdrop-blur-lg rounded-lg">
                  <motion.h2
                    className="text-black text-5xl md:text-8xl font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                  >
                    Nosotros
                  </motion.h2>
                  <Hr />
                  <motion.p
                    className="text-sm 2xl:text-xl mt-2 tracking-wider text-gray-700 leading-relaxed"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    Somos un equipo de desarrollo de software que crea
                    soluciones digitales a medida. Nos especializamos en
                    aplicaciones web, páginas dinámicas, landing pages y
                    automatizaciones para optimizar procesos y potenciar
                    negocios.
                  </motion.p>
<br />
                  <motion.div

                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                      <Link href="/about"><Button variation="primary">
                    Ver más
                    </Button></Link>
                  </motion.div>

                </div>
              </div>
            </div>

            {/* <div className="section">
              <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
                  <motion.div
                    className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 "
                    initial={{
                      x: 300,
                      opacity: 0,
                      z: -100,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      z: 0,
                    }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={ProjectAll}
                      layout="fill"
                      className="object-cover"
                      alt="Alvalens Setup"
                      placeholder="blur"
                    />
                  </motion.div>
                </div>
                <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                  <motion.h1
                    className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                    }}
                  >
                    Proyectos
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                  >
                  </motion.p>
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                    }}
                  >
                    <Button variation="primary">
                      <Link href="/projects">Ver más</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div> */}
            <div className="section">
              <div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
                  <motion.div
                    className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
                    initial={{
                      x: 300,
                      opacity: 0,
                      z: -100,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      z: 0,
                    }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={Setup}
                      layout="fill"
                      className="object-cover"
                      alt="Alvalens Setup"
                      placeholder="blur"
                    />
                  </motion.div>
                </div>
                <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
                  <motion.h1
                    className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold mb-3"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                    }}
                  >
                    Contacto
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                  >
                    Comunicate con para cualquier duda o mayor información
                  </motion.p>
                  <motion.p
                    className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                    }}
                  >
                    <a href="mailto:Alvalen.shafel04@gmail.com?subject=Hello&body=Hello Alvalens,">
                      comercial@ssdev.com.co
                    </a>
                  </motion.p>
                  {/* icons */}
                  <div className="flex justify-center items-center space-x-4">
                    <motion.a
                      href="mailto:comercial@ssdev.com.co"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        y: { delay: 0.1 },
                        opacity: { delay: 0.2 },
                      }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
                    </motion.a>

                    {/* <motion.a
                      href="https://github.com/SantyOs/SSDev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.2 },
                        opacity: { delay: 0.3 },
                      }}
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                    </motion.a> */}

                    {/* Instagram */}
                    {/* <motion.a
                      href="https://www.instagram.com/alvalens_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.3 },
                        opacity: { delay: 0.4 },
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-3xl"
                      />
                    </motion.a> */}
                    {/* <motion.a
                      href="https://www.linkedin.com/in/alvalen-shafel-8a081a254/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.4 },
                        opacity: { delay: 0.5 },
                      }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                    </motion.a> */}
                    <motion.a
                      href="https://api.whatsapp.com/send?phone=573248360548"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.5 },
                        opacity: { delay: 0.6 },
                      }}
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
        {...fullpageOptions}
      />
    </div>
  );
};

export default MyPage;
