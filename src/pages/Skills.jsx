import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaFire, FaDatabase 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiFigma, SiVercel 
} from 'react-icons/si';

const Skills = () => {
  const techStack = [
    { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-[#F7DF1E]' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-[#339933]' },
    { name: 'Express', icon: <SiExpress />, color: 'text-slate-400' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-[#47A248]' },
    { name: 'Firebase', icon: <SiFirebase />, color: 'text-[#FFCA28]' },
    { name: 'GitHub', icon: <FaGithub />, color: 'text-white' },
    { name: 'Figma', icon: <SiFigma />, color: 'text-[#F24E1E]' },
    { name: 'Vercel', icon: <SiVercel />, color: 'text-white' },
    { name: 'HTML/CSS', icon: <FaHtml5 />, color: 'text-[#E34F26]' },
  ];

  return (
    <section id="skills" className="py-20 bg-[#080808] text-white">
      <div className="container mx-auto px-6">
        
        {/* Simple Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Stack</h2>
          <div className="h-1 w-20 bg-primary"></div>
        </div>

        {/* The Grid: High Visibility, No Clutter */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className={`text-3xl ${tech.color}`}>
                {tech.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-tight">{tech.name}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Expertise</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-12 flex flex-wrap gap-8 py-8 border-t border-white/5">
          <div>
            <p className="text-primary text-3xl font-black">10+</p>
            <p className="text-slate-500 text-sm uppercase font-bold">Projects Built</p>
          </div>
          <div>
            <p className="text-primary text-3xl font-black">MERN</p>
            <p className="text-slate-500 text-sm uppercase font-bold">Core Stack</p>
          </div>
          <div>
            <p className="text-primary text-3xl font-black">24/7</p>
            <p className="text-slate-500 text-sm uppercase font-bold">Learning Path</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;