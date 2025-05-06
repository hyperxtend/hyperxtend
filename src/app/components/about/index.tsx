import React from 'react';


interface AboutProps {
  animationState: {
    content: boolean;
  };
  navigateTo: (destination: string) => void;
}

const About: React.FC<AboutProps> = ({ animationState, navigateTo }) => {
  return (
    <div
      className={`absolute z-10 inset-0 flex flex-col items-center justify-center p-8 overflow-y-auto transition-opacity duration-500 ${
        animationState.content ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white bg-opacity-80 p-6 rounded-lg max-w-2xl transition-all duration-500 ${
          animationState.content ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-900">About Me</h2>
        <p className="mb-4 text-slate-950">
          Hello! I&apos;m a software developer and designer with a passion for creative and innovative solutions. My journey
          started building old arcade games and has evolved into crafting specialized applications that solve real-world problems.
        </p>
        <p className="mb-4 text-slate-950">
          I specialize in front end technologies such React, React Native, Next.js, and Ionic, to name a few. I&apos;m always looking to push the boundaries of what&apos;s possible on
          the world of design and development.
        </p>
        <p className="mb-4 text-slate-950">
          When I&apos;m not coding, you can find me hiking through actual mountains, traveling or experimenting with new cooking recipes.
        </p>
        <button
          className="bg-yellow-800 text-white px-6 py-2 rounded hover:bg-yellow-700 transition-all duration-300 hover:scale-105 shadow-md"
          onClick={() => navigateTo('trailhead')}
        >
          Back to Trail
        </button>
      </div>
    </div>
  );
};

export default About;
