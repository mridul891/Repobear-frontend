import { useEffect, useState } from "react";
import Repos from "./Repos";
import { useRecoilValue } from "recoil";
import { username } from "@/Globalstate";

const Dashboard = () => {
  const [data, setData] = useState("");
  const [image, setimage] = useState("");
  const user = useRecoilValue(username);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch("http://localhost:3000/getuser" + "?token=" + token)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.login);
        setimage(data.avatar_url);
      });
  }, []);
  return (
    <>
      {data}
      <img src={image} />
      <Repos />
    </>
  );
};

export default Dashboard;
