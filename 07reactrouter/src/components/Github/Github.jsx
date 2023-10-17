
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rajeeb12')
    //     .then((res) => res.json())
    //     .then((res) => setData(res))
    // },[])
    // console.log(data)
    return (
        <div>
            Follwers: <h2>{data.following}</h2>
            <img src={data.avatar_url} />
        </div>
    )
}

export default Github

export const githubInfo = async ()=>{
    const response = await fetch("https://api.github.com/users/rajeeb12")
    return response.json();
}