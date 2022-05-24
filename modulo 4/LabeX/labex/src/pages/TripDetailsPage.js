import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const TripDetailsPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;
    return (
        <div>
        <h1>TripDetailsPage</h1>
        <p>
            TripDetailsPage id: {id}
        </p>
        <button onClick={() => navigate("/")}>Home</button>
        </div>
    );
    }

    export default TripDetailsPage;