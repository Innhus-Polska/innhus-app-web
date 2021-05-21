import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import styles from '../../styles/styles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import imageOne from '../../assets/images/pexels-andrea-piacquadio-919436.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import { login } from '../../actions/auth';

const required = (value) => {
    if (!value) {
        return (
            <div className={styles.loginMailError} role="alert">
                To pole jest wymagane
            </div>
        );
    }
};

const LoginByPhone = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    props.history.push('/profile');
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        return <Redirect to="/profile" />;
    }

    return (
        <div className="w-100 px-5 my-5">
            <div className="my-5 text-center w-100">
                <h2 className={styles.h2}>Zaloguj się</h2>
                <div className="flex flex-row justify-center my-5">
                    <img src={imageOne} className={styles.loginAvatarImg} alt="" />
                </div>
                <Form onSubmit={handleLogin} ref={form}>
                    <label className={styles.loginMailLabel}>Adres email</label>
                    <Input
                        type="text"
                        className={styles.loginMail}
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required]}
                    />
                    <label className={styles.loginMailLabel}>Hasło</label>
                    <Input
                        type="password"
                        className={styles.loginMail}
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required]}
                    />
                    <div class="w-100 mt-3">
                        <a href="/login" className={styles.loginOptions}>
                            Przypomnij hasło
                        </a>
                    </div>
                    <div class="w-100 mb-2">
                        <a href="/register" className={styles.loginOptions}>
                            Zarejestruj się
                        </a>
                    </div>
                    <div className="form-group">
                        <button className={styles.btnLoginSubmit} disabled={loading}>
                            {loading && <span className="spinner-border spinner-border-sm" />}
                            <span>Przejdź dalej</span>
                        </button>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton className={styles.btnLoginSubmit} ref={checkBtn}>
                        Przejdź dalej
                    </CheckButton>
                </Form>
            </div>
        </div>
    );
};

export default LoginByPhone;
