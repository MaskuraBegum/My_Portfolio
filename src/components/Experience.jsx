import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className=" conatiner mx-auto py-10 lg:py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto text-center text-amber-300">
        <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight mb-6">
          My Journey of Growth
        </h2>
        <p className="mt-4 text-sm lg:text-lg text-white/80 max-w-2xl lg:max-w-4xl mx-auto">
          While I may not have traditional work experience yet, but my journey as a passionate learner and creator has been nothing short of exciting. My passion for technology, problem-solving, and continuous learning has been my driving force. Each step forward has been a learning experience, refining my skills and preparing me for the future.
        </p>

        <div className=" m-6 lg:m-12 grid grid-cols-1  lg:grid-cols-2 gap-4 lg:gap-8">
          {/* First Card */}
          <motion.div
            className="bg-gray-700 p-4 lg:p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gray-600 hover:ring-4 hover:ring-green-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg lg:text-2xl font-semibold text-green-500 mb-2 lg:mb-4">Creative Problem-Solving</h3>
            <p className="text-gray-100 text-sm lg:text-md">
              I approach challenges by breaking down complex problems into manageable pieces, allowing for creative and logical solutions. I love thinking outside the box and experimenting with new ideas.
            </p>
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="bg-gray-700 p-4 lg:p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gray-600 hover:ring-4 hover:ring-green-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg lg:text-2xl font-semibold text-green-500 mb-2 lg:mb-4">Adaptability & Learning</h3>
            <p className="text-gray-100 text-sm lg:text-md">
              In the fast-paced world of technology, staying adaptable and continuously learning is essential. I’m always on the lookout for opportunities to improve my skills and explore new technologies.
            </p>
          </motion.div>

          {/* Third Card */}
          <motion.div
            className="bg-gray-700 p-4 lg:p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gray-600 hover:ring-4 hover:ring-green-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg lg:text-2xl font-semibold text-green-500 mb-2 lg:mb-4">Collaboration & Teamwork</h3>
            <p className="text-gray-100 text-sm lg:text-md">
              I value teamwork and believe that the best results come from collective efforts. I’ve worked on various group assignments, where I’ve learned how to collaborate effectively, communicate ideas, and achieve common goals.
            </p>
          </motion.div>

          {/* Fourth Card */}
          <motion.div
            className="bg-gray-700 p-4 lg:p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gray-600 hover:ring-4 hover:ring-green-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg lg:text-2xl font-semibold text-green-500 mb-2 lg:mb-4">Attention to Detail</h3>
            <p className="text-gray-100 text-sm lg:text-md">
              From writing clean, bug-free code to designing intuitive user interfaces, I focus on ensuring every detail is right. A keen eye for detail ensures that every project is polished and user-friendly.
            </p>
          </motion.div>
        </div>

        <div className="mt-6 lg:mt-16 max-w-3xl mx-auto">
          <p className="text-sm lg:text-lg text-white/90 leading-relaxed">
            My journey is just beginning, but I am excited to continue growing and contributing. I am eager to apply my skills to real-world challenges and bring innovative solutions to the table. Every project, collaboration, and challenge is a stepping stone towards becoming the software engineer I aspire to be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
