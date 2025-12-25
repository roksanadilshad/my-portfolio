import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaServer, FaTools, FaReact, FaNodeJs, 
  FaGithub, FaDatabase, FaLayerGroup 
} from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const Skills = () => {
  const mainSkills = [
    { name: 'Frontend', icon: <FaReact />, desc: 'React, Next.js, Framer Motion', color: 'text-blue-400', glow: 'group-hover:shadow-blue-500/20' },
    { name: 'Backend', icon: <FaServer />, desc: 'Node, Express, Rest APIs', color: 'text-emerald-400', glow: 'group-hover:shadow-emerald-500/20' },
    { name: 'Database', icon: <FaDatabase />, desc: 'MongoDB, Firebase, SQL', color: 'text-purple-400', glow: 'group-hover:shadow-purple-500/20' },
  ];

  return (
    <section id="skills" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-16 space-y-2">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary font-mono tracking-tighter"
          >
            02. Expertise
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            Technical <span className="text-slate-500">Stack.</span>
          </motion.h3>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {/* Main Service Cards */}
          {mainSkills.map((skill, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`group p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 backdrop-blur-sm transition-all duration-300 ${skill.glow} hover:border-slate-700 shadow-xl`}
            >
              <div className={`text-4xl ${skill.color} mb-6 transition-transform group-hover:scale-110 duration-500`}>
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}

          {/* Experience Stat - Dark Minimalist */}
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-[2rem] bg-primary flex flex-col justify-center items-center text-center group transition-colors"
          >
            <span className="text-6xl font-black text-white group-hover:scale-110 transition-transform">10+</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80 mt-2">Projects Delivered</p>
          </motion.div>

          {/* Large Tech Stack Bento */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 p-10 rounded-[2rem] bg-slate-900/20 border border-slate-800/50 backdrop-blur-md flex flex-wrap gap-8 justify-around items-center"
          >
            <TechIcon Icon={SiJavascript} name="JS" color="text-yellow-400" />
            <TechIcon Icon={SiNextdotjs} name="Next" color="text-white" />
            <TechIcon Icon={SiTailwindcss} name="Tailwind" color="text-cyan-400" />
            <TechIcon Icon={SiMongodb} name="Mongo" color="text-green-500" />
            <TechIcon Icon={SiExpress} name="Express" color="text-slate-400" />
            <TechIcon Icon={FaNodeJs} name="Node" color="text-green-400" />
            <TechIcon Icon={FaGithub} name="GitHub" color="text-white" />
          </motion.div>

          {/* Learning Commitment Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 p-8 rounded-[2rem] border border-dashed border-slate-700 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center animate-pulse">
               <FaCode className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold">Continuous Learning</p>
              <p className="text-[10px] text-slate-500 uppercase font-mono">Exploring: Web3 & AI</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Sub-component for Tech Icons
const TechIcon = ({ Icon, name, color }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className={`text-4xl text-slate-600 transition-all duration-300 group-hover:-translate-y-2 group-hover:filter group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] ${color.replace('text', 'group-hover:text')}`}>
      <Icon />
    </div>
    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      {name}
    </span>
  </div>
);

export default Skills;