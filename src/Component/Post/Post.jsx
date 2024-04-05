import PropTypes from 'prop-types'
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const {title,body,id} = post

    const navigate = useNavigate();

    const handlePost = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h4>Title : {title}</h4>
            <p>Description : {body}</p>
            <Link to={`/post/${id}`}>Show Post</Link>
            <br />
            <button onClick={handlePost}>Click Here</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;