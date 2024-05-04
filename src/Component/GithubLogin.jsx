
// const GITHUB_CLIENT_ID = '5db7bf02bf06b827e134';
// const GITHUB_CLIENT_SECRET = "your_client_secret";
// const GITHUB_CALLBACK_URL = 'http://localhost:5173';
// const SCOPES = 'user ,repo ,repo:private';
const githubOAuthURL = `http://localhost:3000/login`;

const handlesubmit = async () => {
    const a = await fetch("http://localhost:3000/login", { mode: "no-cors" }, {
        method: "GET",
    })
    console.log(a)
}
const GitHubOAuth = () => {


    return (
        <div>

            <button onClick={handlesubmit}>getaccesstoken</button>
        </div>
    );
};

export default GitHubOAuth;