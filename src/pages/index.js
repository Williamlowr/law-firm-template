import Banner from "@/components/Banner";
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Practice from "@/components/Practice";
import Profile from "@/components/Profile";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div >
      <Header />
      <Banner />
      <Profile />
      <Practice />
      <Cases />
      <Testimonials />
      <Footer />
    </div>
  )
}
