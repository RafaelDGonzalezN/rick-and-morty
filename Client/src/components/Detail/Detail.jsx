import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import styles from "./Detail.module.css"

const Detail = () => {
    const {id} = useParams();

    const [character, setCharacter] = useState([]);
    
    useEffect(() => {
      //   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
    
      <div className={styles.fondo}>
         <div className={styles.card}>
         <h1>{character?.name}</h1>
         <h3>Estado| {character?.status}</h3>
         <h3>Especie| {character?.species}</h3>
         <h3>Genero| {character?.gender}</h3>
         <h3>Origen| {character.origin?.name}</h3>
      </div>
            <div><img src={character?.image}alt='' className={styles.image}/></div>
      </div>
   
    )
}
export default Detail;