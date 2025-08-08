'use client';
import Input from "@/components/Input/Input";
import Card from "@/components/Card/Card";
import { useState } from "react";
import styles from "./Login.module.css";
import Button from "@/components/Button/Button";
import Link from "@/components/Link/Link";
import LoggedOutLayout from "@/components/Layouts/LoggedOutLayout/LoggedOutLayout";

type Form = {
    email: string;
    password: string;
}

export default function Login() {
    const [form, setForm] = useState<Form>({
        email: "",
        password: ""
    });
    return (
        <LoggedOutLayout>
            <Card width="100%" maxWidth="400px">
                <img src="/logo.svg" alt="Logo" className={styles.logo} />
                <h1 className={styles.title}>Login</h1>
                <Input
                    placeholder="email"
                    value={form.email}
                />
                <Input
                    placeholder="password"
                    value={form.password}
                    type="password"
                />
                <div className={styles.forgotPassword}>
                    <Link
                        href="#"
                        label="Forgot password?"
                    />
                </div>
                <Button label="Login" />
                <span className={styles.register}>New here? <Link href="#" label="Create an account" /> to get started.</span>
            </Card>
        </LoggedOutLayout>

    )
}