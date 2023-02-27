import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

const Vaga = () => {
  const router = useRouter();

  const { issue } = router.query as { issue: string };
  let issueObject: Issue | undefined;

  if (!issue) {
    return <div>Vaga inválida</div>;
  }

  try {
    issueObject = JSON.parse(issue);
  } catch (error) {
    console.error(error);
    return <div>Dados da vaga inválidos</div>;
  }

  return (
    <>
      <Head>
        <title>{issueObject?.title} - GithubVagasBR </title>
        <meta
          name="description"
          content="Divulgação de vagas para desenvolvedores brasileiros através do Github"
        />
        <meta
          name="keywords"
          content="Github, Vagas, Desenvolvimento, Programação, Frontend, Backend, Fullstack, Mobile, DevOps, QA, Estágio, Júnior, Pleno, Sênior, Remoto, Presencial, Home Office"
        />
      </Head>

      <Header />

      <main className="flex flex-col w-full p-8">
        {/* top bar */}
        <div className="flex items-center justify-between gap-2 p-2 px-4 border bg-secondary border-primary rounded-t-md">
          {/* usuario */}
          <div className="flex items-center gap-2">
            <Image
              src={issueObject?.user.avatar_url || ""}
              alt="repo_user"
              width={30}
              height={30}
              className="p-1 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold ">
                {issueObject?.user.login}
              </span>
            </div>
          </div>

          {/* opções */}
          <div className="">
            <a
              href={issueObject?.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-xs hover:text-blue-500"
            >
              abrir no github
            </a>
          </div>
        </div>

        {/* corpo */}
        <article className="flex flex-col min-w-full p-5 pt-0 prose border border-t-0 prose-invert border-primary rounded-b-md">
          <ReactMarkdown className="text-white" rehypePlugins={[rehypeRaw]}>
            {issueObject?.body || ""}
          </ReactMarkdown>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default Vaga;
