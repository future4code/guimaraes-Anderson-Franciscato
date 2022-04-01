import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const AdminHomePage = () => {
    const navigate = useNavigate();
    const params = useParams();
    
    const handleClick = () => {
        navigate(`/admin/trips/${params.id}/edit`);
    };
    
    return (
        <div>
        <h1>Admin Home Page</h1>
        <button onClick={handleClick}>Edit Trip</button>
        </div>
    );
    }

    export default AdminHomePage;