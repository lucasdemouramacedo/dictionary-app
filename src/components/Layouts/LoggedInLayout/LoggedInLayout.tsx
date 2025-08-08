'use client';
import Menu from "@/components/Menu/Menu";
import styles from "./LoggedInLayout.module.css";

type Props = {
    children: React.ReactNode;
    pageTitle?: string;
}

export default function LoggedInLayout(props: Props) {
    return (
        <div className={styles.layout}>
            <Menu />
            <div className={styles.content}>
                <header className={styles.header}>
                    <h2 className={styles.pageTitle}>{props.pageTitle || ""}</h2>
                </header>
                <main className={styles.main}>
                    {props.children}
                </main>
            </div>
        </div>
    )
}