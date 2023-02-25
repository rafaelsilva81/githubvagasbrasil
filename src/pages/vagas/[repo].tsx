import { useRouter } from "next/router";
import React, { useEffect } from "react";
import repositoryList from "@/utils/repositoryList";
import Header from "@/components/Header";
import { useAtom } from "jotai";
import lastAccessedAtom from "@/utils/lastAccessed";

const Vagas = () => {
  const router = useRouter();
  const { repo } = router.query as { repo: string };
  const [lastAccessed, setLastAccessed] = useAtom(lastAccessedAtom);

  const selectedRepo = repositoryList.find((item) => {
    return item.slug === repo;
  });

  /* 
    TODO: History
  */

  if (!selectedRepo || !repo) {
    return <div>Repositório inválido</div>;
  }

  console.log(repo);
  console.log("Test URL", `https://api.github.com/repos/${repo}/issues`);

  return (
    <>
      <Header />
    </>
  );
};

export default Vagas;
