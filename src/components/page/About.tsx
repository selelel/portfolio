export default function About() {
  return (
    <section className="flex flex-col gap-6 text-slate-300 p-8 max-w-4xl mx-auto md:p-16">
      <h1 className="relative flex text-3xl leading-none text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="32" className="right-full mr-2 text-teal-500 md:absolute">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        About
      </h1>
      <p>
        I’m Jan Russel, a passionate software developer with a focus on full-stack development and strong proficiency in front-end technologies. I enjoy crafting clean, responsive user interfaces and tackling challenging problems through coding and algorithmic thinking. In my free time, I sharpen my skills by solving LeetCode problems and exploring new web technologies.
      </p>
      <p>I’m driven by curiosity and a desire to create clean, efficient, and maintainable code.</p>
    </section>
  );
}


