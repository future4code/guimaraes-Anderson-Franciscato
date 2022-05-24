import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;
    return (
        <div>
        <h1>HomePage</h1>
        <p>
            HomePage id: {id}
        </p>
        <button onClick={() => navigate("/LoginPage")}>Login</button>
        </div>
    );
    }


    export default HomePage;