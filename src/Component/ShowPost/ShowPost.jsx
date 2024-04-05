import { useLoaderData, useNavigate } from "react-router-dom";

const ShowPost = () => {
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    }
    const show = useLoaderData();
    const {body,id} = show;
    return (
        <div>
            <h3>ID : {id}</h3>
            <p>Post : {body}</p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default ShowPost;