import styles from './Link.module.css';

type Props = {
    href: string;
    label: string;
}

export default function Link(props : Props) {
    return (
        <a href={props.href} className={styles.link}>
            {props.label}
        </a>
    );   
}