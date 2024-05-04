import { useEffect, useState } from 'react'

import './App.css'
import GitHubOAuth from './Component/GithubLogin';


function App() {
  const [result, setresult] = useState([]);
  const [repo, setrepo] = useState(null);
  const CLIENT_ID = '5db7bf02bf06b827e134';
  const REDIRECT_URI = 'http://localhost:5173';
  const SCOPES = ['user', 'repo', 'repo:private'];


  const handlerepos = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:3000/get-repos', options)
      const data = await response.json();
      const member = data.items
      setresult(member)
      console.log(result)
    }

    catch (error) {
      console.log(error)
    }
  }

  const generateaccessToken = async () => {
    await fetch('http://localhost:3000/callback').then(response => response.json()).then(data => console.log(data.access_token))
  }
  const loginWithGithub = () => {
    // await window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID + "&scope=" + SCOPES + "redirect_uri=" + REDIRECT_URI)
    fetch('http://localhost:3000/login', { mode: "no-cors" }, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });
  }

  return (
    <div className='h'>
      <h1>GitHub OAuth with React</h1>
      <GitHubOAuth />
    </div>
  )
}

export default App
