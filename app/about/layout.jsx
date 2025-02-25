import Footer from "@/components/Footer";

export const metadata = {
	title: "SSDEV | Nosotros",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
