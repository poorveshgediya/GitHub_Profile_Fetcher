import Bouncer from "./Bouncer";
import { LinkOut, RepoForked, StarOutlined } from "../SVG_Component/SVGs";

const RepoData = ({ data }) => {
  if (!data) return <Bouncer />;

  return (
    <div className=" max-w-3xl h-auto flex flex-col  items-center justify-center flex-wrap text-[1rem]">
      <h1 className="mt-10 mb-5 text-xl font-bold text-center">Repositories</h1>
      {!data.length ? (
        <h1 className="opacity-30 italic font-light text-2xl">
          No Repositories Found
        </h1>
      ) : (
        <div className="w-full flex flex-col flex-wrap gap-5 items-center justify-center">
          {data.map((repo, ind) => (
            <div
              key={ind}
              className="w-full rounded flex flex-col gap-4 p-4 cards-bg max-[500px]:px-2"
            >
              {/* TOP ROW */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                {/* Repo name + link */}
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-blue-500 text-[1.05rem] break-all">
                    {repo.owner.login}/{repo.name}
                  </h1>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    <LinkOut className="text-white/80" />
                  </a>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1.5 self-start sm:self-auto">
                  <StarOutlined className="text-white/80" />
                  <span className="text-white/80">{repo.stargazers_count}</span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-white/80 text-sm leading-relaxed break-words text-justify">
                {repo.description || (
                  <span className="opacity-30 italic">
                    No description provided.
                  </span>
                )}
              </p>

              {/* FOOTER */}
              <div className="flex flex-wrap gap-4 text-[0.9rem] text-white/80">
                <span className={!repo.language ? "opacity-30 italic" : ""}>
                  {repo.language || "N/A"}
                </span>

                <div className="flex items-center gap-1">
                  <RepoForked className="text-white/80" />
                  <span>{repo.forks}</span>
                </div>

                <span className="opacity-80">
                  Updated on {repo.updated_at.slice(0, 10)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoData;
