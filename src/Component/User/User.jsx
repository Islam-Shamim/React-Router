import PropTypes from 'prop-types'
import './User.css'
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id,website,name,email} = user;
    //console.log(user)
    return (
        <div className='card'>
            <h4>{name}</h4>
            <p>{website}</p>
            <p>{email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;