'use client';
import Input from "@/components/Input/Input";
import Card from "@/components/Card/Card";
import { useState } from "react";
import styles from "./Register.module.css";
import Button from "@/components/Button/Button";
import Link from "@/components/Link/Link";
import LoggedOutLayout from "@/components/Layouts/LoggedOutLayout/LoggedOutLayout";

type Form = {
    name: string;
    email: string;
    password: string;
}

export default function Register() {
    const [form, setForm] = useState<Form>({
        name: "",
        email: "",
        password: ""
    });

    return (
        <LoggedOutLayout>
            <Card width="100%" maxWidth="400px">
                <img src="/logo.svg" alt="Logo" className={styles.logo} />
                <h1 className={styles.title}>Create an account</h1>
                <Input
                    placeholder="name"
                    value={form.name}
                />
                <Input
                    placeholder="email"
                    value={form.email}
                />
                <Input
                    placeholder="password"
                    value={form.password}
                    type="password"
                />
                <Button label="Register" />
                <span className={styles.register}>Already have an account? <Link href="#" label="Login" />.</span>
            </Card>
        </LoggedOutLayout>
    )
}