import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateTripPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    return (
        <div>
        <h1>Create Trip</h1>
        <button onClick={() => navigate("/trips")}>Back</button>
        </div>
    );
    }

    export default CreateTripPage;