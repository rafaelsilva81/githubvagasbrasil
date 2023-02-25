import Footer from "@/components/Footer";
import Header from "@/components/Header";

import RepoCard from "@/components/RepoCard";
import lastAccessedAtom from "@/utils/lastAccessed";
import repositoryList from "@/utils/repositoryList";
import { useAtom } from "jotai";

export default function Home() {
  const porCategoria = repositoryList.filter(
    (repo) => repo.type === "categoria"
  );
  const porTecnologia = repositoryList.filter(
    (repo) => repo.type === "tecnologia"
  );

  const [lastAccessed] = useAtom(lastAccessedAtom);

  const historico = repositoryList.filter((repo) =>
    lastAccessed.includes(repo.slug)
  );

  return (
    <>
      <Header />

      <main className="flex flex-col gap-10 p-10">
        {lastAccessed.length > 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-white">
              Acessado recentemente
            </h1>

            <div className="flex flex-wrap gap-4">
              {historico.map((repo, i) => (
                <RepoCard key={i} repository={repo} />
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-white">Por categoria</h1>

          <div className="flex flex-wrap gap-4">
            {porCategoria.map((repo, i) => (
              <RepoCard key={i} repository={repo} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-white">Por tecnologia</h1>

          <div className="flex flex-wrap gap-4">
            {porTecnologia.map((repo, i) => (
              <RepoCard key={i} repository={repo} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
