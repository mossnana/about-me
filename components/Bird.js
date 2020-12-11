import styles from '../styles/Bird.module.css'

export default () => {
    return (
        <div>
            <div className={`${styles.bird_container} ${styles.bird_container__one}`}>
                <div className={`${styles.bird} ${styles.bird__one}`}></div>
            </div>
            <div className={`${styles.bird_container} ${styles.bird_container__two}`}>
                <div className={`${styles.bird} ${styles.bird__two}`}></div>
            </div>
            <div className={`${styles.bird_container} ${styles.bird_container__three}`}>
                <div className={`${styles.bird} ${styles.bird__three}`}></div>
            </div>
            <div className={`${styles.bird_container} ${styles.bird_container__four}`}>
                <div className={`${styles.bird} ${styles.bird__four}`}></div>
            </div>
        </div>
    )
}
