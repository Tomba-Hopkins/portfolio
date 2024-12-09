import { motion } from "motion/react";

export default function TechStack() {
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col justify-center items-center p-2 gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.8 }}
    >
      <h1 className="md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent">
        Tech Stack
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.8 }}
        className="bg-black/30 backdrop-blur-md z-10 w-full border-2 border-indigo-500 rounded-lg md:h-full font-thin h-1/2 flex flex-col gap-4  py-2 justify-between text-xs md:text-sm"
      >
        <img
          src="/img/me.jpg"
          alt="me"
          className="absolute w-full h-full z-0 object-cover inset-0"
        />
        <div className="absolute z-10 inset-0 w-full h-full bg-black/80"></div>

        <div className="z-20 w-full h-1/4 md:text-sm text-xs p-2 md:p-8 flex flex-col md:gap-4 gap-2">
          <p className="text-slate-200">
            {"["}
            <span className="text-yellow-400">user@</span>
            <span className="text-purple-400">portfolio </span>
            <span className="text-red-500">~/skills</span>
            {"]"}$ ls /Web/Frontend
          </p>
          <div className="w-full flex gap-2 md:gap-8 ">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
              className="text-orange-400"
            >
              HTML
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeIn" }}
              className="text-blue-600"
            >
              CSS
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: "easeIn" }}
              className="text-yellow-400"
            >
              Javascript
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeIn" }}
              className="text-sky-300"
            >
              TailwindCSS
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.5, delay: 1, ease: "easeIn" }}
              className="text-sky-600"
            >
              React
            </motion.p>
          </div>
        </div>
        <div className="z-20 w-full h-1/4 md:text-sm text-xs p-2 md:p-8 flex flex-col md:gap-4 gap-2">
          <p className="text-slate-200">
            {"["}
            <span className="text-yellow-400">user@</span>
            <span className="text-purple-400">portfolio </span>
            <span className="text-red-500">~/skills</span>
            {"]"}$ ls /Web/Backend
          </p>
          <div className="w-full flex gap-2 md:gap-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeIn" }}
              className="text-green-600"
            >
              NodeJS
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeIn" }}
              className="text-gray-400"
            >
              Express
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeIn" }}
              className="text-lime-500"
            >
              MongoDB
            </motion.p>
          </div>
        </div>
        <div className="z-20 w-full h-1/4 md:text-sm text-xs p-2 md:p-8 flex flex-col md:gap-4 gap-2">
          <p className="text-slate-200">
            {"["}
            <span className="text-yellow-400">user@</span>
            <span className="text-purple-400">portfolio </span>
            <span className="text-red-500">~/skills</span>
            {"]"}$ ls /Web/Others
          </p>
          <div className="w-full flex gap-2 md:gap-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4, ease: "easeIn" }}
              className="text-red-600"
            >
              Git
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4, ease: "easeIn" }}
              className="text-blue-500"
            >
              Docker
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.4, ease: "easeIn" }}
              className="text-sky-300"
            >
              Burpsuite
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}