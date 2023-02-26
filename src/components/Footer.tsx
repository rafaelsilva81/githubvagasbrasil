import dayjs from "dayjs";
import React from "react";

const Footer = () => {
  const currYear = dayjs().format("YYYY");
  /* Fixed footer */
  return (
    <footer className="w-full p-2 px-6 bg-secondary">
      <div className="flex items-center justify-between">
        <a
          href="https://github.com/rafaelsilva81/githubvagasbrasil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold hover:opacity-70"
        >
          🇧🇷 GithubVagasBR — {currYear}
        </a>

        <a
          href="https://github.com/rafaelsilva81"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs hover:text-blue-500"
        >
          Desenvolvido por @rafaelsilva81
        </a>
      </div>
    </footer>
  );
};

export default Footer;
