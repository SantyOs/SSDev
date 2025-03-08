"use client";
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButton from "@/components/FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// Imported components for rest of the page
import Quote from "./components/quote/quote.jsx";
import Skills from "./components/skills/skills.jsx";
import Experience from "./components/experience.jsx";
import Education from "./components/education.jsx";

// images
import Hero from "@/public/image/setup.jpg";

import Hr from "@/components/Hr";

export default function Page() {
	
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
	}, []);

	return (
		<>
			<main className="overflow-hidden">
				<FixedButton href="/#about">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black pr-10"
					/>
				</FixedButton>
				<div className="relative h-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					{/* hero */}
					<div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[5%] md:-translate-y-16">
						
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md:px-0 text-black text-5xl md:text-8xl font-bold">
							¿Quienes somos?
						</h1>
						<Hr />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							Una breve introducción sobre nuestro equipo y nuestra pasión por la tecnología.
						</p>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3"
						>
							<Button variation="primary">Siguiente</Button>
						</motion.div>
					</div>
				</div>
				{/* Team Section */}
				<section className="py-16 bg-gray-100">
					<div className="container mx-auto px-4">
						<h2 className="text-4xl font-bold text-center mb-12">Nuestro Equipo</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white p-8 shadow-lg rounded-lg">
								<h3 className="text-2xl font-bold mb-4">Daniel Gil</h3>
								<p className="text-gray-700">
									Desarrollador Backend experto en NodeJS, MySQL y PostgreSQL. Con amplia experiencia en automatizaciones y machine learning, Daniel ofrece soluciones robustas y escalables para grandes proyectos tecnológicos.
								</p>
							</div>
							<div className="bg-white p-8 shadow-lg rounded-lg">
								<h3 className="text-2xl font-bold mb-4">Santiago</h3>
								<p className="text-gray-700">
									Especialista en React Frontend, Santiago se dedica a crear interfaces modernas, responsivas y de alto rendimiento que mejoran la experiencia del usuario y elevan la presencia digital de nuestros clientes.
								</p>
							</div>
							<div className="bg-white p-8 shadow-lg rounded-lg">
								<h3 className="text-2xl font-bold mb-4">Sebastian</h3>
								<p className="text-gray-700">
									Experto Full Stack, Sebastian integra lo mejor del desarrollo frontend y backend para ofrecer soluciones completas y eficientes. Su versatilidad le permite abordar proyectos complejos con éxito.
								</p>
							</div>
						</div>
					</div>
				</section>
				{/* end team section */}
				
				{/* skills */}
				<Skills />
				{/* end skills */}
				
				{/* experience */}
				
				{/* end experience */}
				
			
				
				{/* Quote */}
				<Quote />
				{/* end Quote */}
			</main>
		</>
	);
}
