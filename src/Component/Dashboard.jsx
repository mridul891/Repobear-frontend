import { username } from "@/Globalstate";
import { useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil";


const Dashboard = () => {
    const [info, setInfo] = useState({});
    const setvalue = useSetRecoilState(username)
    useEffect(() => {
        const apikey = localStorage.getItem("accessToken");
        console.log(apikey)
        const options = {
            method: "GET",
            headers: {
                authorization: `Bearer ${apikey}`
            }
        }
        fetch('http://localhost:3000/get-user', options)
            .then(response => response.json())
            .then(data => {
                setvalue(data.login)
            })
    }, [])
    return (
        <>
            <div>{info.login}</div>
            <img src={info.avatar_url} alt="profile photo" />
        </>
    )
}

export default Dashboard