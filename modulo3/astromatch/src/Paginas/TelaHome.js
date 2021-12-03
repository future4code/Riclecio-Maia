import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";



const MatchImg = styled.img`
  width: 5vw;
  heigth: 15vw;
  border-radius: 40px;
  margin-right: 2%;
`;
export function Match(props) {
    return (
        <div>
            <MatchImg src={props.profile.photo} />
            <p>{props.profile.name}</p>
        </div>
    );
}

const PageMatchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35vw;
  border: 1px solid black;
  padding: 20px;
  margin: 2.5%;
  border-radius: 40px;
`;
const PageMatchProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32vw;
  border: 1px solid black;
  padding: 20px;
  margin: 2.5%;
  border-radius: 40px;
`;

export default function PageMatch() {
    const [matches, setMatches] = useState([]);


    const getMatches = () => {
        axios
            .get(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Riclecio-Maia-Carver/matches"
            )
            .then((res) => {
                setMatches(res.data.matches);
            });
    };

    useEffect(() => {
        getMatches();
    }, []);


    return (
        <PageMatchDiv>
            <h3>AstroMatch</h3>
            <PageMatchProfile>
                <div>
                    {matches.map((match) => {
                        return <Match profile={match} />;
                    })}
                </div>
            </PageMatchProfile>
        </PageMatchDiv>
    );
}