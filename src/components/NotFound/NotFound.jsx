import styles from "./NotFound.module.css"
const NotFound = () => {
  return (
    <div className={styles.fondo}>
        <div className={styles.container}>
            <h1>Error 404</h1>
            <p>This is not the web page you are looking for</p>
        </div>
    </div>
  );
}

export default NotFound;