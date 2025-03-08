import { motion } from "framer-motion";
import Stack from "./stack";
import Tools from "./tools";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-4 p-10 grid grid-cols-1 mt-10">
			<motion.div
				className="flex justify-center items-center flex-col mb-5"
				initial={{
					opacity: 0,
					x: -200,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					delay: 0.5,
					type: "spring",
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Skills() {
	return (
		<>
			<Wrapper>
				<section className="grid gap-8">
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold mt-3 text-black">
							Tecnologías
						</h2>
						
					</div>

					{/* Grupo Frontend */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">Frontend</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
							<div className="flex flex-col items-center gap-2">
								<CodepenIcon className="w-12 h-12" />
								<div className="font-medium">HTML/CSS</div>
							</div>
							<div className="flex flex-col items-center gap-2">
								<JsIcon className="w-12 h-12" />
								<div className="font-medium">JavaScript</div>
							</div>
							<div className="flex flex-col items-center gap-2">
								<ReactIcon className="w-12 h-12" />
								<div className="font-medium">React</div>
							</div>
						</div>
					</div>

					{/* Grupo Backend */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">Backend</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
							<div className="flex flex-col items-center gap-2">
								<WebhookIcon className="w-12 h-12" />
								<div className="font-medium">API REST</div>
							</div>
							<div className="flex flex-col items-center gap-2">
								<NodeIcon className="w-12 h-12" />
								<div className="font-medium">Node.js</div>
							</div>
							<div className="flex flex-col items-center gap-2">
								<DatabaseIcon className="w-12 h-12" />
								<div className="font-medium">Mysql / PostgreSQL</div>
							</div>
						</div>
					</div>

					{/* Grupo Fullstack */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">Fullstack</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
							<div className="flex flex-col items-center gap-2">
								<MobileIcon className="w-12 h-12" />
								<div className="font-medium">Desarrollo Móvil</div>
							</div>
							<div className="flex flex-col items-center gap-2">
								<CloudIcon className="w-12 h-12" />
								<div className="font-medium">Cloud Computing</div>
							</div>
							<div className="flex flex-col items-center gap-2">
								<GearIcon className="w-12 h-12" />
								<div className="font-medium">DevOps</div>
							</div>
						</div>
					</div>
				</section>
			</Wrapper>
			<div className="mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
				<Stack />
				<Tools />
			</div>
		</>
	);
}

function ActivityIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
		</svg>
	);
}

function CodepenIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
			<line x1="12" x2="12" y1="22" y2="15.5" />
			<polyline points="22 8.5 12 15.5 2 8.5" />
			<polyline points="2 15.5 12 8.5 22 15.5" />
			<line x1="12" x2="12" y1="2" y2="8.5" />
		</svg>
	);
}

function WebhookIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
			<path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
			<path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
		</svg>
	);
}

function MobileIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
			<line x1="12" x2="12" y1="18" y2="18" />
		</svg>
	);
}

function ReactIcon(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 128 128"
			fill="none"
			stroke="currentColor"
			strokeWidth="8">
			<circle cx="64" cy="64" r="10" fill="currentColor" />
			<ellipse cx="64" cy="64" rx="50" ry="20" />
			<ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(60 64 64)" />
			<ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(120 64 64)" />
		</svg>
	);
}

function JsIcon(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 24 24"
			fill="none">
			<rect width="24" height="24" rx="2" />
			<path d="M6 18.2L8 17.3C8.1 17.8 8.8 18.5 9.8 18.5C10.8 18.5 11.3 18.1 11.3 17.1V10H13.8V17.1C13.8 19.4 12.1 20.4 9.9 20.4C7.9 20.4 6.3 19.5 6 18.2Z" fill="black"/>
			<path d="M14.5 17.9L16.5 17.1C16.8 17.8 17.6 18.4 18.8 18.4C19.8 18.4 20.4 17.9 20.4 17.3C20.4 16.6 19.8 16.3 18.7 15.9L18.1 15.7C16.3 15.1 15.2 14.3 15.2 12.3C15.2 10.5 16.6 9.2 18.7 9.2C20.2 9.2 21.3 9.8 22 11.1L20.1 12C19.8 11.3 19.3 11 18.7 11C18.1 11 17.6 11.4 17.6 12C17.6 12.7 18.1 13 19.1 13.4L19.7 13.6C21.8 14.3 23 15.1 23 17.1C23 19.3 21.2 20.3 18.9 20.3C16.6 20.3 15.1 19.3 14.5 17.9Z" fill="black"/>
		</svg>
	);
}

function NodeIcon(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 256 256"
			fill="none"
			stroke="currentColor"
			strokeWidth="16">
			<path d="M128 10 L10 128 L128 246 L246 128 Z" />
			<path d="M128 50 L50 128 L128 206 L206 128 Z" />
		</svg>
	);
}

function DatabaseIcon(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<ellipse cx="12" cy="5" rx="9" ry="3" />
			<path d="M3 5v14c0 1.656 4.03 3 9 3s9-1.344 9-3V5" />
			<line x1="3" y1="12" x2="21" y2="12" />
		</svg>
	);
}

function CloudIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25" />
			<polyline points="16 16 12 20 8 16" />
		</svg>
	);
}

function GearIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<circle cx="12" cy="12" r="3" />
			<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l0 0a1.65 1.65 0 0 1-2.33 2.33l0 0a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 1-2.15 0 1.65 1.65 0 0 0-1.82.33l0 0a1.65 1.65 0 0 1-2.33-2.33l0 0a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 1 0-2.15 1.65 1.65 0 0 0 .33-1.82l0 0a1.65 1.65 0 0 1 2.33-2.33l0 0a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 1 2.15 0 1.65 1.65 0 0 0 1.82-.33l0 0a1.65 1.65 0 0 1 2.33 2.33l0 0a1.65 1.65 0 0 0 .33 1.82 1.65 1.65 0 0 1 0 2.15z" />
		</svg>
	);
}
