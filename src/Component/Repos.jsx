import { username } from "@/Globalstate"
import { useState } from "react"
import { useRecoilValue } from "recoil"


const Repos = () => {
    const [data, setData] = useState([])
    const user = useRecoilValue(username)
    const handleClick = async () => {
        const apikey = localStorage.getItem("accessToken");
        const options = {
            method: "GET",
            headers: {
                authorization: `Bearer ${apikey}`
            },
        }
        await fetch(`http://localhost:3000/get-repo?username=${user}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data.items)
            })
    }
    return (
        <div>
            <button onClick={handleClick}>clickme </button>
            <div>
                {data.map((item, index) => <a href={item.html_url} key={index}>{item.name}</a>)}
            </div>
        </div>
    )
}

export default Repos