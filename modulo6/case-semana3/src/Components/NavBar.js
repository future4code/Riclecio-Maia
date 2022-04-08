import { useState,useEffect } from "react";
import api from "../api";
import styles from "./NavBar.module.css"
import Filter from "./Filter";


const api_key = "368acb4ab2a9db35f9b804863a04d311";
const NavBar = () => {
    
    const [genres, setGenres]= useState([]);

    useEffect(() => {
        async function getMovieGenres() {
          const response = await api.get(`/genre/movie/list`, {
            params: {api_key, language: "pt-BR"}
          });
          setGenres(response.data.genres);
        }
  
        getMovieGenres();
      }, []);

    return ( 
    <div className={styles.navbar_container}>
        <div className={styles.navbar_text}>
            <p className={styles.text1}>Milhões de filmes, séries e pessoas para descobrir. Explore Já </p>
            <Filter genres={genres} />
           
        </div>
       
    </div> 
    );
}
 
export default NavBar;