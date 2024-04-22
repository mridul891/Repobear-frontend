import { useEffect, useState } from 'react'

import './App.css'


function App() {
  const [result, setresult] = useState([]);
  const [repo, setrepo] = useState(null);
  const getmessage = async (req, res) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:3000/get-repo', options)
      const data = await response.json();
      const member = data.items
      setresult(member)
      console.log(result)
    }

    catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='h'>
      <button onClick={getmessage}>login with github </button>
      <div>
        {result.map((data, index) => {

          const value = data.private;
          if (value) {
            return (
              <>
                <div key={index} onClick={() => {
                  setrepo(data.name)
                  console.log(repo)
                }}>{data.name}</div>
              </>
            )
          }
        }
        )}
      </div>
      <div>
        <h1>selected repo :{repo}</h1>

      </div>
    </div>
  )
}

export default App
