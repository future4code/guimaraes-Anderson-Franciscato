import React from "react";
import styled from "styled-components";


export const RenderStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 30%;
    height: 50%;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 0 auto;
        align-self: center;
    }
    p {
        margin: 0 auto;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
`;

export const ButtonPage = styled.button`
    margin: 0 auto;
    width: 70px;
    height: 50px;
    border-radius: 200px;
    background-color: black;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    border: none;
    align-self: center;
    cursor: pointer;
    &:hover {
        background-color: red;
    }
`;
export const ButtonLike = styled.button`
    margin: 0 auto;
    width: 70px;
    height: 50px;
    border-radius: 200px;
    background-color: black;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: red;
    }
`;
export const ButtonDislike = styled.button`
    margin: auto;
    width: 70px;
    height: 50px;
    border-radius: 200px;
    background-color: black;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: red;
    }
`;
export const ImageStyle = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
    align-self: center;
`;



