import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";

export default function Header() {
  return (
    <header className="text-gray-600 body-font mt-3">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            style={{ backgroundColor: "#96D1C7" }}
            className="w-10 h-10 text-white p-2  rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
            <span className="ml-3 text-xl font-bold">Develog</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-10 hover:text-gray-900">홈</a>
          </Link>
          <a
            href="https://forest-ermine-7eb.notion.site/R-E-S-U-M-E-10649d7b7623429f9eb03c1a6088c99e"
            target="_blank"
            className="mr-10 hover:text-gray-900"
            rel="noreferrer"
          >
            이력서
          </a>
          <Link href="/projects">
            <a className="mr-10 hover:text-gray-900">프로젝트</a>
          </Link>
          <a
            href="https://open.kakao.com/o/smARmplg"
            target="_blank"
            className="mr-6 hover:text-gray-900"
            rel="noreferrer"
          >
            연락처
          </a>
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  );
}
