import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";

export const metadata = {
	title: "SSDEV | Soluciones Digitales que Conectan",
	description:
		"Con SSDEV, tu negocio se impulsa con soluciones web hechas a tu medida. Creamos sitios personalizados, landing pages que cautivan y automatizaciones inteligentes para aumentar tu presencia en el mundo digital.",
	author: "Equipo SSDEV",
	siteUrl: "https://www.ssdev.com",
	applicationName: "SSDEV",
	keywords: [
		"SSDEV",
		"desarrollo web personalizado",
		"soluciones digitales",
		"experiencias digitales únicas",
		"landing pages cautivadoras",
		"automatización inteligente",
		"transformación digital",
	],
	openGraph: {
		type: "website",
		url: "https://www.ssdev.com",
		title: "SSDEV | Soluciones Digitales que Conectan",
		site_name: "SSDEV | Innovación Digital con Pasión",
		description:
			"Descubre cómo en SSDEV creamos experiencias digitales que impulsan tu negocio, combinando diseño, tecnología y estrategias de automatización para ofrecer resultados reales.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-ssdev.png",
				alt: "Innovación digital con SSDEV",
			},
		],
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
