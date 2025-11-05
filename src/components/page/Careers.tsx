export default function Careers() {
  return (
    <section className="relative flex flex-col gap-8 text-slate-300 p-8 max-w-4xl mx-auto md:p-16">
      <h1 className="relative flex text-3xl leading-none text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="32" className="right-full mr-2 text-indigo-600 md:absolute">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Careers
      </h1>
      <p>
        Come help us scale, explore, and build humanist infrastructure focused on amplifying the human mind and spirit.
      </p>
      <p>
        We're a small, self-funded, fully-distributed team and we're actively hiring!{' '}
        <a href="/careers" className="text-blue-400 underline hover:underline-offset-2">
          Learn more.
        </a>
      </p>
      <p>
        If you're sure you can help, but don't see a position that fits,{' '}
        <a href="mailto:careers@midjourney.com" className="text-blue-400 underline hover:underline-offset-2">
          email us
        </a>.
      </p>
    </section>
  );
}


