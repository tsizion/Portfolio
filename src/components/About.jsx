import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#3D234E] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Tsion, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm all about creating captivating digital experiences and turning
              ideas into functional, sleek websites.<br></br> 💻 Web Wizardry:
              Crafting user-friendly interfaces and smooth interactions is my
              forte. <br></br> 🤝 Team Player: Collaboration fuels my
              creativity. <br></br>📚 Eternal Learner: The tech world is my
              playground. I'm always learning, adapting to new trends and
              technologies for cutting-edge creations.<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
