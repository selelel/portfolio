export default function Contact() {
  return (
    <section className="relative flex flex-col gap-8 text-slate-300 p-8 max-w-4xl mx-auto md:p-16">
      <h1 className="relative flex text-3xl leading-none text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="32" className="right-full mr-2 text-amber-600 md:absolute">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Contact
      </h1>
      <p>
        For product support or questions please{' '}
        <a href="https://discord.gg/midjourney" className="text-blue-400 underline hover:underline-offset-2">
          join our Discord
        </a>{' '}
        and ask questions in our #support chatrooms.
      </p>
      <p>
        For billing support:{' '}
        <a href="mailto:billing@midjourney.com" className="text-blue-400 underline hover:underline-offset-2">
          billing@midjourney.com
        </a>
      </p>
      <p>
        For Journalist inquiries:{' '}
        <a href="mailto:press@midjourney.com" className="text-blue-400 underline hover:underline-offset-2">
          press@midjourney.com
        </a>
      </p>
    </section>
  );
}


