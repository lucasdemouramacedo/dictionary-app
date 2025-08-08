'use client';
import Input from "@/components/Input/Input";
import LoggedInLayout from "@/components/Layouts/LoggedInLayout/LoggedInLayout";
import style from "./Home.module.css";
import Card from "@/components/Card/Card";

export default function Home() {
    return (
        <LoggedInLayout pageTitle="Home">
            <Input placeholder="Busque uma palavra" value="" borderRadius="50px"/>
            <p className={style.title}>Recents</p>
            <div className={style.words}>
                <Card padding="7px 15px" borderRadius="12px" backgroundColor="#8FC3FF" ><span className={style.word}>fire</span></Card>
                <Card padding="7px 15px" borderRadius="12px" backgroundColor="#8FC3FF" ><span className={style.word}>water</span></Card>
                <Card padding="7px 15px" borderRadius="12px" backgroundColor="#8FC3FF" ><span className={style.word}>computer</span></Card>
                <Card padding="7px 15px" borderRadius="12px" backgroundColor="#8FC3FF" ><span className={style.word}>tea</span></Card>
            </div>
        </LoggedInLayout>
    )
}