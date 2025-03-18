import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    emoji: "🎓",
    title: "University",
    institution: "Bangladesh Army International University of Science and Technology",
    department: "BSC. in Computer Science and Engineering",
    duration: "2022 - Present",
  },
  {
    id: 2,
    emoji: "🏫",
    title: "College",
    institution: "Bangladesh Gas Fields School and College",
    department: "Higher Secondary Certificate(Science)",
    duration: "2020",
  },
  {
    id: 3,
    emoji: "📚",
    title: "High School",
    institution: "Sabera Sobhan Government Girls High School",
    department: "Secondary School Certificate(Science)",
    duration: "2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 relative">
      <div className="absolute inset-0 opacity-30 z-0"></div>
      <div className="max-w-6xl mx-auto px-6 text-white relative z-10">
        <h2 className="text-4xl font-bold text-center text-amber-300 mb-12">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* University Card (First Row) */}
          <motion.div
            key={educationData[0].id}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-lg transition-all duration-300 col-span-1 md:col-span-3 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-5xl mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            >
              {educationData[0].emoji}
            </motion.div>
            <p className="text-2xl font-bold text-gray-300">{educationData[0].institution}</p>
            <p className="text-gray-300 text-2xl">{educationData[0].department}</p>
            <p className="text-gray-300 text-lg">{educationData[0].duration}</p>

            {/* Flip Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-0 hover:opacity-30 transition-opacity duration-500"
              style={{ zIndex: -1 }}
            ></motion.div>
          </motion.div>

          {/* College and High School Cards (Second Row) */}
          <motion.div
            key={educationData[1].id}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-lg transition-all duration-300 col-span-1 md:col-span-2 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="text-5xl mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            >
              {educationData[1].emoji}
            </motion.div>
            <p className="text-2xl font-bold text-gray-300">{educationData[1].institution}</p>
            <p className="text-gray-300 text-2xl">{educationData[1].department}</p>
            <p className="text-gray-300 text-lg">{educationData[1].duration}</p>

            {/* Flip Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-0 hover:opacity-30 transition-opacity duration-500"
              style={{ zIndex: -1 }}
            ></motion.div>
          </motion.div>

          <motion.div
            key={educationData[2].id}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-lg transition-all duration-300 col-span-1 md:col-span-1 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="text-5xl mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            >
              {educationData[2].emoji}
            </motion.div>
            <p className="text-xl font-bold text-gray-300">{educationData[2].institution}</p>
            <p className="text-gray-300 text-xl">{educationData[2].department}</p>
            <p className="text-gray-300 text-lg">{educationData[2].duration}</p>

            {/* Flip Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-0 hover:opacity-30 transition-opacity duration-500"
              style={{ zIndex: -1 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
