import type { PinnedRepos } from "../lib/types";
import { FiStar, FiGitBranch } from "react-icons/fi";

export default function PinnedRepos(props: { pinnedRepos: PinnedRepos }) {
  return (
    <section className="flex flex-col w-full gap-6 mb-10 prose">
      <h2 className="text-zinc-200 text-[2.5rem] font-extrabold leading-none m-0" id="projects">
        Top Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full gap-6">
        {props.pinnedRepos.map((repo, index) => (
          <a
            key={index}
            href={`${repo.url}`}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-zinc-500 to-stone-500 p-1 gap-4 rounded-lg shadow-lg shadow-zinc-200/10 hover:shadow-xl hover:scale-[103%] hover:shadow-zinc-200/10 duration-300"
          >
            <div className="flex flex-col cursor-pointer justify-between h-full bg-zinc-800 p-4 rounded-lg ">
              <div>
                <h3 className="text-zinc-200 m-0 mb-6 text-lg font-bold w-full tracking-tight leading-none">
                  {repo.name}
                </h3>
                <p className="text-zinc-300 m-0 mb-6 text-sm w-full tracking-tight">
                  {repo.description}
                </p>
              </div>
              <div className="gap-6 flex">
                <div className="flex text-zinc-400 gap-2 text-base items-center font-semibold">
                  <FiStar />
                  <p className="m-0">{repo.stars}</p>
                </div>
                <div className="flex text-zinc-400 gap-2 text-base items-center font-semibold">
                  <FiGitBranch />
                  <p className="m-0">{repo.forks}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}