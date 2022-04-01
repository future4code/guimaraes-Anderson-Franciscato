import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ListTripPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;
    return (
        <div>
        <h1>ListTripPage</h1>
        <p>
            ListTripPage id: {id}
        </p>
        <button onClick={() => navigate("/")}>Home</button>
        </div>
    );
    }
    
    export default ListTripPage;

