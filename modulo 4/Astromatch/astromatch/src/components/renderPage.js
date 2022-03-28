import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {RenderStyle, ButtonPage, ButtonDislike, ButtonLike} from './renderStyle'
import {BsFillHeartFill, BsFillEmojiFrownFill} from "react-icons/bs";

const RenderPage = props => {
    const [perfil, setPerfil] = useState({})

    const getProfile = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-franciscato/person`)
            .then(res => {
                setPerfil(res.data.profile)
            })
            .catch(err => {
                console.log(err)
            })
    }

            useEffect(() => {
                getProfile()
            }, [])

            const like = () => {
                const body = {
                    id: perfil.id,
                    choice: true,
                }
                axios
                    .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-franciscato/choose-person`, body)
                    .then(res => {
                        getProfile()
                    })
                    .catch(err => {
                        console.log(err)
                    }
                    )
            }
            const dislike = () => {
                const body = {
                    id: perfil.id,
                    choice: false,
                }
                axios
                    .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-franciscato/choose-person`, body)
                    .then(res => {
                        getProfile()
                    })
                    .catch(err => {
                        console.log(err)
                    }
                    )
            } 

                return (
                    <RenderStyle>
                        <div>
                            <img src={perfil.photo} />
                            <p>{perfil.name}</p>
                            <p>{perfil.age}</p>
                            <p>{perfil.bio}</p>
                        </div>
                        <div>
                            <ButtonLike onClick={like}> <BsFillHeartFill /> </ButtonLike> 
                            <ButtonDislike onClick={dislike}> <BsFillEmojiFrownFill/> </ButtonDislike>
                            <br/>
                            <ButtonPage onClick={props.onChangeGetMatches}>Ver matches</ButtonPage>
                        </div>
                    </RenderStyle>
                )            
}
export default RenderPage

