import styles from "./About.module.css";

const About = () =>{
    return(
        <div className={styles.fondo}>
        <div className={styles.card}>
        <h1>Rafael González</h1>
        <h3>Alive</h3>
        <h3>Human</h3>
        <h3>Male</h3>
        <h3>Venezuela</h3>
     </div>
        <div><img src={"https://scontent.faqp3-1.fna.fbcdn.net/v/t1.6435-9/196396948_918171435412215_4449621679337683847_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHHDkx0exBTZ64Q8I2i5bwxNt0l4i_JITU23SXiL8khNR7buCYN00c8rLZmbOXyomJ000biUoj5Xl6vhcKGpcov&_nc_ohc=P_u1fTswVj8AX8Sf2xp&_nc_ht=scontent.faqp3-1.fna&oh=00_AfCLlsfgXcuWLhPM5_LrqWtUjY5ZstRqZU2XuaJra_Za4A&oe=653801D7"}alt='' className={styles.image}/></div>
     </div>
    )
}
export default About;
