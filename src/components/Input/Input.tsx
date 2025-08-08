import { useState } from "react";
import styles from "./Input.module.css";

type Props = {
    placeholder: string;
    value: string;
    type?: string;
    error?:string;
    borderRadius?: string;
}

export default function Input(props: Props) {
    const [value, setValue] = useState<string>(props.value || "");
    return (
        <>
            <input
                type={props.type || "text"}
                className={[styles.input, props.error ? styles.inputError : ""].join(" ")}
                placeholder={props.placeholder || "Enter text here"}
                style={{ borderRadius: props.borderRadius || "13px" }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <p className={styles.error}>{props.error || ''}</p>
        </>
    );
}