import './App.css'
import Dashboard from './Component/Dashboard';
import GitHubOAuth from './Component/GithubLogin';
import Landing from './Component/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repos from './Component/Repos';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<GitHubOAuth />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/repo' element={<Repos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
