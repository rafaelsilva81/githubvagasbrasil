import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import repositoryList from "@/utils/repositoryList";
import Header from "@/components/Header";
import {
  GoTriangleDown,
  GoTriangleLeft,
  GoTriangleRight,
} from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axios";
import { AxiosError } from "axios";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import lastAccessedAtom from "@/utils/lastAccessed";
import Head from "next/head";

const Vagas = () => {
  const [lastAccessed, setLastAccessed] = useAtom(lastAccessedAtom);
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const { repo } = router.query as { repo: string };

  useEffect(() => {
    if (!selectedRepo) {
      return;
    } else if (lastAccessed.includes(selectedRepo.slug)) {
      return; // já está na lista
    } else if (lastAccessed.length < 3) {
      setLastAccessed([...lastAccessed, selectedRepo.slug]);
    } else {
      setLastAccessed([...lastAccessed.slice(1), selectedRepo.slug]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedRepo = repositoryList.find((item) => {
    return item.slug === repo;
  });

  const {
    data: issues,
    isLoading,
    error,
  } = useQuery<Issue[], AxiosError>({
    queryKey: ["issues", filter, page, repo],
    queryFn: async () => {
      const res = await api.get(
        `/repos/${repo}/issues?page=${page}?labels=${encodeURIComponent(
          filter || ""
        )}`
      );
      return res.data;
    },
    enabled: !!repo && !!selectedRepo,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (!selectedRepo || !repo || error) {
    return <div>Repositório inválido</div>;
  }

  if (isLoading || !issues) {
    return <Loader />;
  }

  // Melhor fazer isso do que fazer outro request (para não sobrecarregar a API)
  const labels: string[] = [];

  issues?.forEach((issue) => {
    issue.labels.forEach((label) => {
      if (!labels.includes(label.name)) {
        labels.push(label.name);
      }
    });
  });

  return (
    <>
      <Head>
        <title>Vagas de {selectedRepo.name} - GithubVagasBR </title>
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

      <main className="flex flex-col p-10">
        {/* Top-bar */}
        <div className="flex items-center justify-between w-full gap-4 p-2 px-6 border rounded-t-md bg-secondary border-primary">
          {/* Label filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 text-sm rounded-md bg-secondary border-primary"
          >
            <option value="">Todos</option>
            {labels.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>

          {/* Pagination */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 text-sm rounded-md hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 1}
            >
              <GoTriangleLeft />
            </button>
            <span className="text-sm">{page}</span>
            <button
              className="p-2 text-sm rounded-md hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setPage((prev) => prev + 1)}
            >
              <GoTriangleRight />
            </button>
          </div>
        </div>

        {/* Issues */}
        {issues.map((issue) => (
          <div
            className="flex flex-col gap-6 p-4 px-6 border-b cursor-pointer border-x border-primary hover:bg-secondary"
            key={issue.id}
            onClick={() =>
              router.push({
                pathname: `/vagas/${issue.node_id}`,

                // Estou enviando o objeto inteiro para a página de detalhes
                // para não ter que fazer outro request
                query: { issue: JSON.stringify(issue) },
              })
            }
          >
            <div className="flex flex-col flex-wrap gap-2">
              <span className="font-semibold text-primary hover:text-blue-500">
                {issue.title}
              </span>
              <div className="flex items-center gap-1 text-gray-500">
                {issue.labels.map((label) => (
                  <span
                    key={label.id}
                    className="px-2 py-1 text-xs text-white border rounded-full border-primary"
                    style={{
                      backgroundColor: `#${label.color}8b`,
                    }}
                  >
                    {label.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">
                #{issue.number} aberta há{" "}
                {dayjs().diff(dayjs(issue.created_at), "day")} dia(s)
              </span>

              <span className="text-xs text-gray-500">
                por {issue.user.login}
              </span>

              <span className="text-xs text-gray-500">
                {issue.comments} comentário(s)
              </span>

              <span className="text-xs text-gray-500 hover:text-blue-500">
                <a href={issue.html_url} target="_blank" rel="noreferrer">
                  ver no github
                </a>
              </span>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
};

export default Vagas;
