import HomeSection from "./components/HomeSection/page"
import AboutSection from "./components/AboutSection/page";
import ServicesSection from "./components/ServicesSection/page";
import ContactUs from "./components/ContactSection/page";
import Footer from "./components/Footer/page";
import styles from "./page.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default Home
