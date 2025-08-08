import styles from './Button.module.css';

type Props = {
    label: string;
}
export default function Button(props: Props) {
    return (
        <button className={styles.button}>
            {props.label}
        </button>
    );
}