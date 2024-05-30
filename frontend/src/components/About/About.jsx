/** @format */

// import React from "react";
import aboutImg from "../../assets/images/about.png";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 justify-items-center">
            <img src={aboutImg} alt="" />
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading text-center">
              Proud to be one of the nations best.
            </h2>
            <p className="text_para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              ipsum modi cupiditate totam fugit maxime, aperiam voluptatem
              tempora eaque. Voluptate perspiciatis officiis libero dolores?
              Fugiat ullam cupiditate doloremque pariatur minus.
            </p>
            <p className="text_para mt-[30px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              ipsum modi cupiditate totam fugit maxime, aperiam voluptatem
              tempora eaque. Voluptate perspiciatis officiis libero dolores?
              Fugiat ullam cupiditate doloremque pariatur minus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
