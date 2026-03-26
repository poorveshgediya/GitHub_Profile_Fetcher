import React, { useEffect, useState } from "react";
import Bouncer from "./Bouncer";
import { LinkChain, Location, SearchOutlined } from "../SVG_Component/SVGs";
import { useDispatch, useSelector } from "react-redux";
import { saveProfileData, saveRepoData } from "../Redux/homeSlice";

const Profile = () => {
  const [query, setQuery] = useState("");
  const [searchTrigger, setSearchTrigger] = useState("poorveshgediya");
  const [isLoading, setIsLoading] = useState(false);

  const dataprofile = useSelector((state) => state.repodata.profiledata);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchprofile = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(
          `https://api.github.com/users/${searchTrigger}`
        );
        if (!resp.ok) throw new Error("User not found");
        const data = await resp.json();
        dispatch(saveProfileData(data));

        const resp_repo = await fetch(`${data.repos_url}`);
        const data_repo = await resp_repo.json();
        dispatch(saveRepoData(data_repo));
      } catch (erorr) {
        console.log("Error fetching profile:", erorr);
      } finally {
        setIsLoading(false);
      }
    };
    fetchprofile();
  }, [searchTrigger]);

  const handlequery = (e) => {
    e.preventDefault();
    const trimed = query.trim();
    if (trimed) {
      setSearchTrigger(trimed);
    }
    setQuery("");
  };

  if (isLoading) return <Bouncer />;

  return (
    <>
      <div className="w-full max-w-3xl mx-auto rounded flex flex-col gap-5 max-[800px]:px-4 text-[1rem]">
        <div className="mt-10 font-bold">
          <h1 className="text-2xl cursor-pointer text-center">DevFinder</h1>
        </div>
        <div className="min-w-full p-3 rounded flex justify-between items-center cards-bg max-[400px]:text-[0.8rem] max-[350px]:flex-col max-[350px]:gap-1">
          <div className="flex items-center gap-2">
            <SearchOutlined />
            <form id="github-search-btn" onSubmit={handlequery}>
              <input
                type="text"
                placeholder="Search Github Usename..."
                className="px-5 bg-transparent outline-none tracking-widest"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
          <button
            form="github-search-btn"
            type="submit"
            className=" bg-blue-500 px-3 py-1 rounded cursor-pointer"
          >
            Search
          </button>
        </div>

        {dataprofile && (
          <div className="min-w-full p-5 rounded flex cards-bg max-[600px]:flex-col max-[600px]:items-center max-[600px]:justify-center max-[600px]:gap-5 ">
            <div className="w-1/3 flex justify-center max-[600px]:w-full">
              <img
                src={dataprofile.avatar_url}
                alt="Avtar"
                className="w-35 h-35 rounded-full max-[600px]:rounded-xl"
              />
            </div>
            <div className="w-2/3 flex flex-col max-[600px]:w-full">
              <div className="flex justify-between items-center">
                <h2
                  className={
                    !dataprofile.name
                      ? "opacity-50 italic font-light"
                      : "text-white text-2xl max-[400px]:text-xl"
                  }
                >
                  {dataprofile.name || "A developer with no name"}
                </h2>
                <p className="text-white/80 max-[400px]:text-[0.9rem]">
                  <span>Joined </span>
                  {dataprofile.created_at.slice(0, 10) || "xxxx-xx-xx"}
                </p>
              </div>
              <p className="text-sm text-blue-500">@{dataprofile.login}</p>
              <p
                className={
                  !dataprofile.bio
                    ? "opacity-50 italic font-light"
                    : "text-white/80 text-justify font-thin mt-4 max-[400px]:text-[0.9rem]"
                }
              >
                {dataprofile.bio || "This profile has no bio."}
              </p>
              <div className=" flex justify-around mt-10 p-5 rounded cards-bg max-[400px]:text-[0.9rem] max-[400px]:mt-7 max-[400px]:px-3 max-[350px]:px-0">
                <div className="flex flex-col">
                  <p className="text-white/80">Public Repo</p>
                  <p>{dataprofile.public_repos}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white/80">Followers</p>
                  <p>{dataprofile.followers}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white/80">Following</p>
                  <p>{dataprofile.following}</p>
                </div>
              </div>
              <div className="flex justify-evenly mt-10 max-[400px]:text-[0.9rem]">
                <div className="flex items-center gap-2">
                  <Location />
                  <p
                    className={
                      !dataprofile.location
                        ? "opacity-50 italic font-light"
                        : ""
                    }
                  >
                    {dataprofile.location || "Not Available"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a href="">
                    <LinkChain />
                  </a>
                  <a href={dataprofile.html_url} target="_blank">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
