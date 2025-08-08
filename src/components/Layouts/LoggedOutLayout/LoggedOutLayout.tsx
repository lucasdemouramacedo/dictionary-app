import styles from './LoggedOutLayout.module.css';
type Props = {
    children: React.ReactNode;
}

export default function LoggedOutLayout(props: Props) {
    return (
        <main className={styles.container}>
            {props.children}
        </main>
    )
}