import { username } from "@/Globalstate";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const user = useRecoilValue(username);
  const handleClick = () => {
    const token = localStorage.getItem("accessToken");
    fetch("http://localhost:3000/getrepo" + "?token=" + token + "&user=" + user)
      .then((response) => response.json())
      .then((data) => setRepos(data.items));
  };
  return (
    <div>
      <Button onClick={handleClick}>Get repos</Button>
      {repos.map((e, index) => (
        <div key={index}>
          <a href={e.html_url}>{e.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Repos;
