import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const AplicationFormPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;
    return (
        <div>
        <h1>AplicationFormPage</h1>
        <p>
            AplicationFormPage id: {id}
        </p>
        <button onClick={() => navigate("/")}>Home</button>
        </div>
    );
    }

    export default AplicationFormPage;