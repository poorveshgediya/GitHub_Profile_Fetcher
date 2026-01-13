import { Route, Routes } from "react-router-dom";
import "./App.css";
import GitHubProfile from "./Components/GitHubProfile";
import RepoData from "./Components/RepoData";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<GitHubProfile/>}/>
      <Route path="/repositories" element={<RepoData />}/>
    </Routes>
      {/* <GitHubProfile /> */}
    </>
  );
}

export default App;
