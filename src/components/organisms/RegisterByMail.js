import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import { register } from '../../actions/auth';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import styles from '../../styles/styles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import imageOne from '../../assets/images/pexels-andrea-piacquadio-919436.jpg';

const required = (value) => {
    if (!value) {
        return (
            <div className={styles.loginMailError} role="alert">
                To pole jest wymagane!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className={styles.loginMailError} role="alert">
                To nie jest poprawny adres email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className={styles.loginMailError} role="alert">
                To pole musi zawierać od 3 do 20 znaków.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className={styles.loginMailError} role="alert">
                Twoje hasło musi mieć od 6 do 40 znaków.
            </div>
        );
    }
};

const RegisterByMail = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(username, email, password))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    return (
        <div className="w-100 px-5 my-5">
            <div className={styles.registerBlock}>
                <h2 className={styles.h2}>Zarejestruj się</h2>
                <div className="flex flex-row justify-center my-5">
                    <img src={imageOne} className={styles.loginAvatarImg} alt="" />
                </div>
                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <label className={styles.loginMailLabel}>Twoje imię</label>
                            <Input
                                type="text"
                                className={styles.loginMail}
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required, vusername]}
                            />
                            <label className={styles.loginMailLabel}>Adres email</label>
                            <Input
                                type="email"
                                className={styles.loginMail}
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                validations={[required, validEmail]}
                            />
                            <label className={styles.loginMailLabel}>Hasło</label>
                            <Input
                                type="password"
                                className={styles.loginMail}
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required, vpassword]}
                            />
                            <div class="w-100 my-2">
                                <a href="/login" className={styles.loginOptions}>
                                    Masz już konto? Zaloguj się
                                </a>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </div>
                    )}
                    {message && (
                        <div className="form-group">
                            <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton ref={checkBtn} />
                    <button type="submit" className={styles.btnLoginSubmit}>
                        Utwórz konto
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default RegisterByMail;
