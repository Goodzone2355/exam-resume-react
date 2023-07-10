import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

export default function Form() {
    const [userName, setName] = useState("");
    const changeName = (event) => {
        setName(event.target.value);
    };

    const [userSurname, setSurname] = useState("");
    const changeSurname = (event) => {
        setSurname(event.target.value);
    };

    const [userJob, setJob] = useState("");
    const changeJob = (event) => {
        setJob(event.target.value);
    };

    const data = {
        name: userName,
        surname: userSurname,
        job: userJob,
    };

    return (
        <>
            <div className="form__wrapper">
                <div className="form__row">
                    <h3>Имя</h3>
                    <input
                        type="text"
                        placeholder="Введите своё имя"
                        onChange={changeName}
                        value={userName}
                    />
                </div>
                <div className="form__row">
                    <h3>Фамилия</h3>
                    <input
                        type="text"
                        placeholder="Введите свою фамилию"
                        onChange={changeSurname}
                        value={userSurname}
                    />
                </div>

                <div className="form__row">
                    <h3>Должность</h3>
                    <input
                        type="text"
                        placeholder="Введите свою должность"
                        onChange={changeJob}
                        value={userJob}
                    />
                </div>

                <div className="form__row">
                    <button>
                        <Link to="/resume" state={data}>
                            Отправить
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}
