export default function Footer() {
  return (
    <section className="flex justify-center gap-8 p-8">
      <a
        className="text-sm underline-offset-2 opacity-70 hover:underline"
        href="https://docs.midjourney.com/hc/en-us/articles/32083055291277-Terms-of-Service"
      >
        Terms of Service
      </a>
      <a
        className="text-sm underline-offset-2 opacity-70 hover:underline"
        href="https://docs.midjourney.com/hc/en-us/articles/32083472637453-Privacy-Policy"
      >
        Privacy Policy
      </a>
      <button className="text-sm underline-offset-2 opacity-70 hover:underline">Privacy Settings</button>
    </section>
  );
}


