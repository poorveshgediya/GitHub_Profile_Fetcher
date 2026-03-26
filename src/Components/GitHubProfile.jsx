import Profile from "./Profile";
import RepoData from "./RepoData";

const GitHubProfile = () => {
  return (
    <>
      <div className="min-h-screen w-full text-white flex flex-col items-center bg-gradient-to-r from-slate-950 to-sky-700">
        <Profile />
        <div className="w-full max-w-3xl mx-auto px-3 sm:px-4">
          <RepoData />
        </div>
      </div>
    </>
  );
};

export default GitHubProfile;
