import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans bg-black clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ABOUT ME</h2>
        <div className="w-32 h-1 bg-blue-500 shadow-[0_0_15px_2px_rgba(37,99,235,0.6)] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A quick introduction about who I am and what I do
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Chirag Lal Chandani
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#2563eb] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Web Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#2563eb]">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
          I am a full-stack developer with hands-on experience in designing and developing scalable web applications, chatbots, and data-driven platforms. Skilled in Next.js, JavaScript, React.js, Node.js, MongoDB, Prisma, and Tailwind CSS. I have built projects ranging from a WhatsApp Helpdesk Chatbot to SaaS platforms and clinic management systems. With proven experience in both frontend and backend development, I specialize in creating intuitive user interfaces, robust backend architectures, and integrating third-party APIs to deliver seamless and efficient solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1zda74RFLZaCedvNIajS7qfPiLjDOdVZh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold 
            transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
              boxShadow: '0 0 12px 2px rgba(37,99,235,0.6)',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] 
            border-4 border-[#2563eb] rounded-full shadow-[0_0_25px_3px_rgba(37,99,235,0.5)]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Chirag Lal Chandani"
              className="w-full h-full rounded-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

