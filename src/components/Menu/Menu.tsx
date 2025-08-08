import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menuList}>
                <li><a href="/home">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </nav>
    );
}