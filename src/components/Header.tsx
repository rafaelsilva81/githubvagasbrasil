import Image from "next/image";
import React from "react";
import githubLogoBR from "@/assets/logo-final.png";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Sobre",
    path: "/sobre",
  },
  {
    name: "Contribuir",
    path: "/contribuir",
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex flex-col justify-between w-full gap-3 p-4 px-6 md:gap-20 md:flex-row bg-secondary">
      {/* TODO: Search bar */}
      <Link className="flex items-center flex-1 gap-2" href="/">
        <Image src={githubLogoBR} alt="logo" width={30} />
        <span className="text-sm font-semibold text-primary">
          GithubVagasBR
        </span>
      </Link>

      {/* Pages */}
      <div className="flex items-center gap-5">
        {pages.map((page, i) => (
          <Link
            key={i}
            href={page.path}
            className="font-semibold hover:opacity-70 active:opacity-50"
          >
            {page.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
