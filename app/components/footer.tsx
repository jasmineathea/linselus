import Link from "next/link";

export function Footer() {
    return (
      <nav className="flex flex-col items-center gap-3">
        <div className="flex gap-5">
          <Link className="text-stone-400 hover:text-orange-100 hover:underline" href="https://github.com/jasmineathea">
            /github
          </Link>
          <Link className="text-stone-400 hover:text-orange-100 hover:underline" href="https://www.linkedin.com/in/jasmineathea/">
            /linkedin
          </Link>
          <Link className="text-stone-400 hover:text-orange-100 hover:underline" href="https://www.instagram.com/jasmineathea/">
            /instagram
          </Link>
        </div>
        <p className="text-stone-300">
          Jasmine A. Næss 🍓 2024
        </p>
      </nav>
    );
}