import Link from "next/link";
import React from "react";
import { Icon } from "./Icon";

const RepoCard = ({ repository }: { repository: RepositoryData }) => {
  const encodedSlug = encodeURIComponent(repository.slug);
  return (
    <div className="w-64 border rounded-md border-primary bg-tertiary">
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center justify-center w-12 h-12 p-3 border rounded-md border-primary bg-secondary">
          <Icon
            nameIcon={repository.icon}
            propsIcon={{
              size: 50,
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-white">
            {repository.name}
          </h1>

          <a
            className="text-xs text-white hover:text-blue-400"
            href={`https://github.com/${repository.slug}`}
            target="_blank"
            rel="noreferrer"
          >
            {repository.slug}
          </a>
        </div>

        <div className="flex gap-2 mt-4">
          <Link
            href={`/vagas/${encodedSlug}`}
            className="px-3 py-2 text-sm font-semibold border rounded-md border-primary bg-secondary hover:opacity-60 active:opacity-30"
          >
            Ver vagas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
