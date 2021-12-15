import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PageHomeProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  border: 1px solid black;
  padding: 15px;
  margin: 2.5%;
  border-radius: 30px;
  button {
    height: 13vh;
    width: 6vw;
    border-radius: 100px;
    padding: 8px 0;
  }
`;



const ImgProfile = styled.img`
  width: 26vw;
  height: 42vh;
  border-radius: 30px;
`;

export default function PageHome() {

    const [profile, setProfile] = useState({});
    const getProfileToChoose = () => {
        axios
            .get(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Riclecio-Maia-Carver/person"
            )
            .then((res) => {
                setProfile(res.data.profile);
            })
            .catch(() => {
                alert("erro!!! aperte f5");
            });
    };
    const escolhaPessoa = (choice) => {

        setProfile(profile.id);
        axios
            .post(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Riclecio-Maia-Carver/choose-person"
            )
            .then((res) => {
                getProfileToChoose();
            });
    };

    useEffect(() => {
        getProfileToChoose();
    }, []);

    return (
        <div>
            <div>

                {profile ? (
                    <PageHomeProfile>
                        <h3>AstroMatch</h3>
                        <ImgProfile src={profile.photo} />
                        <h2>

                            {profile.name}, {profile.age} anos
                        </h2>
                        <p>{profile.bio}</p>
                        <div>
                            <button onClick={() => escolhaPessoa(false)}>
                                <h1>x</h1>
                            </button>

                            <button onClick={() => escolhaPessoa(true)}>
                                <h1>♥</h1>
                            </button>
                        </div>
                    </PageHomeProfile>
                ) : (
                    <div>Loading............</div>
                )}
            </div>
        </div>
    );
}
