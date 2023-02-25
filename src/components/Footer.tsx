import dayjs from "dayjs";
import React from "react";

const Footer = () => {
  const currYear = dayjs().format("YYYY");
  /* Fixed footer */
  return (
    <footer className="fixed bottom-0 w-screen p-2 px-6 bg-contrast">
      <div className="flex items-center justify-between">
        <a href="#" className="text-sm font-semibold hover:opacity-70">
          🇧🇷 GithubVagasBR — {currYear}
        </a>

        <a href="#" className="text-xs hover:text-blue-500">
          Desenvolvido por @rafaelsilva81
        </a>
      </div>
    </footer>
  );
};

export default Footer;
