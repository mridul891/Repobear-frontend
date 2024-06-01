import logo1 from "../assets/logo1.svg";
import { Link, useNavigate } from "react-router-dom";
import { Icons } from "./icons";
import { useEffect } from "react";

const GitHubOAuth = () => {
  const url = "http://localhost:3000/login/";
  const navigate = useNavigate();
  useEffect(() => {
    const url = window.location.search;
    const parsedData = new URLSearchParams(url);
    const accessToken = parsedData.get("code");
    const options = {
      method: "GET",
    };
    try {
      fetch("http://localhost:3000/callback" + "?code=" + accessToken, options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.access_token) {
            localStorage.setItem("accessToken", data.access_token);
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="grid grid-cols-2 h-[100vh] w-[100vw]">
      {/* One part */}
      <div className="bg-[#202024] flex items-center justify-center">
        <div className="py-[7rem] px-20 ">
          <Link to="/">
            <img src={logo1} alt="" />
          </Link>
        </div>
      </div>
      {/* Second Half  */}
      <div className="bg-[#000] flex items-center justify-center">
        {/* <Button onClick={handleclick}>getaccesstoken</Button> */}
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 gap-10 sm:w-[350px]">
            <div>
              <h1 className="text-white font-bold text-4xl">Welcome Back ✌️</h1>
            </div>
            <div className=" bg-white font-semibold flex justify-center rounded-md">
              <a href={url} className="flex items-center py-2 ">
                <Icons.gitHub className="mr-2 h-4 w-4" /> Sign In With GitHub
              </a>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubOAuth;
