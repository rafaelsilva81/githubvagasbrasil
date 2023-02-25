import { useRouter } from "next/router";
import React from "react";

const Vagas = () => {
  const router = useRouter();
  const { repo } = router.query;

  console.log(repo);
  console.log("Test URL", `https://api.github.com/repos/${repo}/issues`);

  return <div></div>;
};

export default Vagas;
