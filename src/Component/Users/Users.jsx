import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();
    //console.log(users)

    //state --> data
    //state --> loader
    //use effect
    //fetch --> state set --> set state
    return (
        <div>
            <p>Users : {users.length}</p>
            <div className="cards">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;