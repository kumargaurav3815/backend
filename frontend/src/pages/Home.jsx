/** @format */

import { useEffect } from "react";
import heroImg01 from "../assets/images/doctor-img01.png";
// import heroImg02 from "../assets/images/hero-img02.png";
// import heroImg03 from "../assets/images/hero-img03.png";
// import icon01 from "../assets/images/icon01.png";
// import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import icon04 from "../assets/images/icon04.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
// import ServicesList from "../components/Services/ServicesList";
// import DoctorsList from "../components/Doctors/DoctorsList";
import FaqList from "../components/Faq/FaqList";
import ServicesList from "../components/Services/ServicesList";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

const Home = () => {
  const navigate = useNavigate("/login");
  //if there will be no token then navigate to login
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });
  return (
    <>
      <Header />
      <section className="hero_section pt-[60px]  bg-gradient-to-r from-blue-100 to-blue-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text_para justify-items-center">
                  Helping patients live healthier and longer lives can encompass
                  a wide range of healthcare activities, from preventive care
                  and education to diagnosis, treatment, and ongoing support. It
                  is essential to provide comprehensive care that addresses not
                  only physical health but also mental and emotional well-being.
                </p>
                <Link to="/appointment">
                  <button className="btn">Request an Appointment</button>
                </Link>
              </div>
            </div>

            <div className="flex gap-[30px] justify-items-center">
              <img
                className="w-full  rounded-lg  animate-pulse"
                src={heroImg01}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-blue-20 pt-[10px]">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center ">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              World class care for everyone. Our healths system offers
              unmatched, expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 lg:gap-[30px]  mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" width={200} height={200} />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor mt-4 font-[400] text-center ">
                  World class care for everyone. Our healths system offers
                  unmatched, expert health care.
                </p>
                <Link
                  to="/appointment"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon04} alt="" width={200} height={200} />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Review your health
                </h2>
                <p className="text-[16px] leading-7 text-textColor mt-4 font-[400] text-center ">
                  World class care for everyone. Our healths system offers
                  unmatched, expert health care.
                </p>
                <Link
                  to="/appointment"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-blue-20 pt-[10px]">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading text-center">
                Get virtual treatment. <br /> anytime.
              </h2>
              <ul className="pl-4 text-center">
                <li className="text_para">
                  1.Schedule the appointment directly.
                </li>
                <li className="text_para">
                  2.search your physician here, and contact their office.
                </li>
                <li className="text_para">
                  3.View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-items-center mt-[50px] lg:mt-0">
              <img className="w-3/4" src={featureImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-blue-20 pt-[10px]">
        <div className="container">
          <div className="xl:w-[470xpx] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text_para text-center">
              World class care for everyone. Our healths system offers
              unmatched, expert health care.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-blue-20 pt-[10px]">
        <About />
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-blue-20 pt-[5px]">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0 ">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients.
                <FaqList />
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
