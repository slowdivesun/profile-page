import styles from './Header.module.css'

export default function Header(props) {
    return (
        <div className={styles.header}>
            <h1>{props.text}</h1>
        </div>
    )
}
