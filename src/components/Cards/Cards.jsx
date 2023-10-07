import Card from '../Card/Card';
import styles from "./Cards.module.css";

const Cards = (props) => {
   const {characters, onClose} = props
   return (
         <div className={styles.cards}>
         {characters.map((ch) => {
            return <Card 
            key = {ch.id}
            id = {ch.id}
            name ={ch.name} 
            status ={ch.status} 
            species ={ch.species} 
            gender ={ch.gender} 
            origin ={ch.origin.name} 
            image ={ch.image} 
            onClose={onClose}
            />
         })}
         </div>
      );
}

export default Cards;