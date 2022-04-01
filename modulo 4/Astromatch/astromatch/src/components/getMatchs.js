import axios from 'axios';
import React, {useState, useEffect} from "react";
import {GiBackwardTime } from "react-icons/gi";
import { ButtonPage, RenderStyle } from './renderStyle';

const GetMatches = (props) => {
    const  [matchs, getMatchs]  = useState([]);
    const getMatchsToChose = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-franciscato/matches`)
            .then(res => {
                getMatchs(res.data.matches);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => getMatchsToChose(), []);

    return (
        <div>
        {matchs.map((match) => {
            return (
                <RenderStyle>
                    <div>
                    <img src={match.photo}/>
                    <p>{match.name}</p>
                    <p>{match.age}</p>
                    </div>
                </RenderStyle>
            )
        })}
            <br/>
            <ButtonPage onClick={props.onChangeRenderPage}><GiBackwardTime/></ButtonPage>
        </div>
        );
};
export default GetMatches;

