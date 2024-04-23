import Link from "next/link";

export function Footer() {
    return (
      <nav className="flex gap-4">
        <Link className="text-stone-400 hover:text-orange-100 hover:underline" href="https://github.com/jasmineathea">
          /github
        </Link>
        <Link className="text-stone-400 hover:text-orange-100 hover:underline" href="https://www.linkedin.com/in/jasmineathea/">
          /linkedin
        </Link>
      </nav>
    );
  }
