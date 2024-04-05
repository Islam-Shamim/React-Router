import { useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1);
    }
    const details = useLoaderData();
    const {id,name,phone} = details;
    return (
        <div>
            <p>ID : {id}</p>
            <h3>Name : {name}</h3>
            <p>Phone : {phone}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default Details;