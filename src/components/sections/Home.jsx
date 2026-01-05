// 1. Import Simple Icons (for GitHub)
import { Link } from "react-router-dom"; // 1. Don't forget the import!
import { SiGithub } from '@icons-pack/react-simple-icons';

// 2. Import Lucide Icons (for Map, School, Mail, and LinkedIn)
import { MapPin, GraduationCap, Mail, Linkedin } from 'lucide-react';


export const Home = () => {
  return (
    // Changed px-60 to responsive padding: px-6 on mobile, px-12 on tablet, px-40/60 on desktop
    <section id="home" className="min-h-screen flex items-start justify-center relative px-6 md:px-12 lg:px-40 xl:px-60 pt-20 md:pt-32 lg:pt-40 overflow-hidden">
      
      {/* Background Image - Absolute positioned, low opacity */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%),url('/skyline.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.23, 
          filter: 'grayscale(30%)',
        }}
      />

      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl w-full gap-12 z-10 relative">
        
        {/* Left: Text */}
        
        <div className="w-full lg:w-7/8 text-left space-y-4 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-cantata text-gray-800">
            Hi, I'm Andrew Yeung</h1>
          
          <p className="text-gray-600 text-base md:text-base font-cantata">
              I am an undergraduate student in the{" "}
              <a
                  href="https://www.ece.utoronto.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 font-semibold hover:underline underline-offset-4"
              >
                  Electrical & Computer Engineering
              </a>{" "}
              program at the University of Toronto minoring in Artificial Intelligence and Engineering Business. 
              I am a highly motivated student 
              and was recently ranked among the <span className="text-gray-900">Top 30</span> students by GPA within the ECE department. 
          </p>

          <p className="text-gray-600 text-base md:text-base font-cantata">
              My interests include <span className="font-bold text-gray-900">FPGA development</span>, <span className="font-bold text-gray-900">digital hardware design</span>, 
              <span className="font-bold text-gray-900"> machine learning</span>, and <span className="font-bold text-gray-900">firmware development</span>. In particular, I am interested in 
              hardware and software co-design and building efficient, performance-critical systems. I'm always eager to learn new technologies and deepen 
              my understanding of how things work.
          </p>

          <p className="text-gray-600 text-base md:text-base font-cantata">
              In my free time, I enjoy solving{" "}
              <a
                  href="https://www.worldcubeassociation.org/persons/2020YEUN01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline underline-offset-4"
              >
                  Rubik's cubes
              </a>{" "}
              competitively, listening to my {""}
              <a
                  href="https://open.spotify.com/user/9c0lf02e5oo2zr71m0ro4w1gj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 font-semibold hover:underline underline-offset-4"
              >
                  favourite music
              </a>{""}
              , and playing basketball — I am currently working toward my first dunk on a 10-foot rim!
          </p>

          <div className="mt-9 flex flex-wrap gap-5 font-cantata"> 
              <Link
                  to="/projects"
                  className="px-6 py-2 bg-black text-white rounded hover:bg-gray-600 transition"
              >
                  See My Work
              </Link>
              <a
                href="/Andrew_Yeung_Resume.pdf" // Ensure the file name matches exactly (case-sensitive)
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-black text-white rounded hover:bg-gray-600 transition"
              >
                View Resume
              </a>
          </div>
        </div>

{/* Right: Photo & Contact Info - ADDED lg:-mt-16 HERE */}
<div className="w-full lg:w-1/3 flex flex-col items-center order-1 lg:order-2 lg:-mt-6">
  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-3 border-black shadow-sm">
    <img
      src="/test.png"
      alt="Andrew Yeung"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="mt-6 text-center">
    <h2 className="text-4xl md:text-3xl font-bold text-slate-800 tracking-tight font-cantata">
      Andrew Yeung
    </h2>
  </div>

  {/* Contact List */}
  <div className="mt-3 space-y-2 text-gray-700 text-base flex flex-col items-start w-fit text-base font-cantata">
    <div className="flex items-center gap-3 lg:justify-end">
      <MapPin size={20} className="text-black" />
      <span>Toronto, ON</span>
    </div>

    <div className="flex items-center gap-3 lg:justify-end">
      <GraduationCap size={20} className="text-black" />
      <span>University of Toronto</span>
    </div>

    <a 
      href="mailto:aandrew.yeung@mail.utoronto.ca" 
      className="flex items-center gap-3 lg:justify-end hover:text-sky-400 hover:underline underline-offset-2 transition-colors"
    >
      <Mail size={20} className="text-black" />
      <span>Email</span>
    </a>

    <a href="https://github.com/ayeung009" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 lg:justify-end hover:text-sky-400 hover:underline underline-offset-2 transition-colors">
    <SiGithub size={20} className="text-black" />
    <span>GitHub</span>
  </a>

    <a 
      href="https://www.linkedin.com/in/ayeung009/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-3 lg:justify-end hover:text-sky-400 hover:underline underline-offset-2 transition-colors"
    >
      <Linkedin size={20} className="text-sky-500" />
      <span>LinkedIn</span>
    </a>
  </div>
</div>

      </div>
    </section>
  );
};