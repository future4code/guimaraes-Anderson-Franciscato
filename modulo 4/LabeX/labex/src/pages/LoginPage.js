import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;
    return (
        <div>
        <h1>LoginPage</h1>
        <p>
            LoginPage id: {id}
        </p>
        <button onClick={() => navigate("/")}>Home</button>
        </div>
    );
    }

    export default LoginPage;