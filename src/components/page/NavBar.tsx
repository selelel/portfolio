export default function NavBar() {
  return (
    <div className="z-10 fixed w-screen overscroll-y-none" style={{ opacity: 1 }}>
      <div className="z-20 bg-[#060522]/20 top-0 py-4 px-12 flex flex-col gap-4 items-center max-h-fit font-sans md:flex-row-reverse md:gap-8 md:justify-between">
        <div className="flex gap-4 justify-end">
          <button className="flex-center gap-2 w-fit font-medium basis-1 p-2 px-5 min-w-max text-sm font-bold text-center rounded-full transition-all md:text-base outline-[#09073a]/50 border-[0.5px] border-white/10 hover:border-white/20 shadow-md hover:shadow-lg bg-emerald-900/20 text-emerald-50 hover:bg-emerald-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="20" className="inline text-emerald-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span>Sign Up</span>
          </button>

          <button className="flex-center gap-2 w-fit font-medium basis-1 p-2 px-5 min-w-max text-sm font-bold text-center rounded-full transition-all md:text-base outline-[#09073a]/50 border-[0.5px] border-white/10 hover:border-white/20 shadow-md hover:shadow-lg bg-yellow-900/20 text-yellow-50 hover:bg-yellow-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="20" className="inline text-yellow-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Log In</span>
          </button>
        </div>

        <div className="flex gap-4">
          <a
            href="https://docs.midjourney.com/hc/en-us"
            className="flex-center gap-2 w-fit font-medium basis-1 p-2 px-5 min-w-max text-sm font-bold text-center rounded-full transition-all md:text-base outline-[#09073a]/50 border-[0.5px] border-white/10 hover:border-white/20 shadow-md hover:shadow-lg bg-orange-900/20 text-orange-50 hover:bg-orange-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="20" className="inline text-orange-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Documentation
          </a>

          <button
            title="Explore"
            className="flex-center gap-2 w-fit font-medium basis-1 p-2 px-5 min-w-max text-sm font-bold text-center rounded-full transition-all md:text-base outline-[#09073a]/50 border-[0.5px] border-white/10 hover:border-white/20 shadow-md hover:shadow-lg bg-rose-900/20 text-rose-50 hover:bg-rose-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="20" className="inline text-rose-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}


