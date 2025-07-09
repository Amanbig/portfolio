import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFlutter, SiPython, SiCplusplus, SiUnity, SiBlender } from 'react-icons/si';
import { CardSpotlight } from '../ui/card-spotlight';

const skillList= [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <SiUnity />, name: 'Unity' },
    { icon: <SiBlender />, name: 'Blender' },
  ];

function SkillCard({ icon, name }: { icon: React.ReactNode; name: string }) {
    return (
        
        <CardSpotlight className="h-32 w-32 transition-all duration-300 hover:scale-105 border-3 border-white">
        <div className="flex flex-col items-center justify-center h-full p-4  rounded-xl shadow-lg backdrop-blur-sm ">
            <div className="text-3xl mb-3 text-gray-700 dark:text-gray-200">{icon}</div>
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">{name}</h3>
        </div>
        </CardSpotlight>
    )
}

export default function TechStack(){
    return (
        <div className="w-full py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skillList.map((skill, index) => (
                        <SkillCard key={index} icon={skill.icon} name={skill.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}