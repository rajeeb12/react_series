import {useParams} from 'react-router-dom';

function User() {
    const {userid} = useParams()
    console.log(userid)
    return (
        <h1>Hi : {userid} </h1>
    )
}

export default User;
