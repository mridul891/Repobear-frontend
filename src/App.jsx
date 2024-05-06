
import './App.css'
import GitHubOAuth from './Component/GithubLogin';
import Landing from './Component/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<GitHubOAuth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
