import React from "react";

const ContactUsSection = () => {
  return (
<section
  className="flex items-center justify-center min-h-screen py-24 px-6 lg:px-32 bg-gradient-to-b from-[#FFF4D6] to-white dark:from-gray-800 dark:to-gray-900"
>      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side Content */}
        <div className="text-black dark:text-white text-center lg:text-left space-y-6">
          <h1 className="text-2xl md:text-4xl text-left font-extrabold">Hey, I'm Julian!</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-4">
            I’m a Systems & Computer Engineer passionate about building projects since 2014 i started creating projects and start coding.
          </h2>
          <p className="text-md md:text-lg leading-relaxed mb-6">
            When I'm not coding, you'll find me playing sports, diving into anime and manga, gaming, or exploring nature.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#about"
              className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-800 transition shadow-sm"
            >
              About me
            </a>
            <a
              href="#projects"
              className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-800 transition hover:bg-[#136245] shadow-sm"
            >
              Projects
            </a>
            
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center items-center w-full lg:w-[90%] border-2 border-indigo-800 dark:border-1 ">
          <img
            src="/images/profi2.png" // Replace with your image path
            alt="Profile pic header home julian porfolio"
            className="w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
