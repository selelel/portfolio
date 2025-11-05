export default function About() {
  return (
    <section className="flex flex-col gap-12 text-slate-300 p-8 max-w-4xl mx-auto md:p-16">
      <h1 className="relative flex text-3xl leading-none text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="32" className="right-full mr-2 text-teal-500 md:absolute">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        About
      </h1>
      <p>
        Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.
      </p>
      <p>We are a small self-funded team focused on design, human infrastructure, and AI.</p>
    </section>
  );
}


