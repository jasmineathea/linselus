import Link from "next/link";

export function Footer() {
    return (
      <nav className="flex flex-col items-center gap-3">
        <div className="flex gap-5">
          <Link className="text-stone-400 hover:text-pink-100 hover:underline" href="https://github.com/jasmineathea" target="_blank">
            /github
          </Link>
          <Link className="text-stone-400 hover:text-pink-100 hover:underline" href="https://www.linkedin.com/in/jasmineathea/" target="_blank">
            /linkedin
          </Link>
          <Link className="text-stone-400 hover:text-pink-100 hover:underline" href="https://www.jasmineathea.no/" target="_blank">
            /portfolio
          </Link>
        </div>
        <p className="text-stone-300">
          Jasmine A. Næss 🩷 2024
        </p>
      </nav>
    );
}