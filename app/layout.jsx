import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";

export const metadata = {
	title: "SSDEV | Soluciones Digitales",
	description:
		"SSDEV es un equipo ágil de tres expertos en desarrollo web. Creamos aplicaciones, páginas dinámicas, landing pages y automatizaciones que optimizan tu negocio.",
	author: "SSDEV Team",
	siteUrl: "https://www.ssdev.com",
	applicationName: "SSDEV",
	keywords: [
		"SSDEV",
		"desarrollo web",
		"aplicaciones web",
		"landing pages",
		"automatización",
		"software a medida",
		"optimización digital",
		"páginas dinámicas",
	],
	openGraph: {
		type: "website",
		url: "https://www.ssdev.com",
		title: "SSDEV | Soluciones Digitales",
		site_name: "SSDEV | Soluciones Digitales",
		description: "SSDEV: aplicaciones web, landing pages y automatizaciones para potenciar tu negocio.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-ssdev.png",
				alt: "SSDEV Soluciones Digitales",
			},
		],
		site_name: "SSDEV | Soluciones Digitales",
	},
};



const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
