import React from 'react';
import { View } from 'react-native-web';
import styles from '../../styles/styles.module.css';
import imageOne from '../../assets/images/pexels-curtis-adams-5178080.jpg';
import { Button } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btnNotifyAction: {
        background: '#709799',
        borderRadius: 10,
        color: 'white',
        height: 28,
        fontSize: 12,
        textTransform: 'unset',
        marginTop: 10,
        '&:hover': {
            background: '#709799',
        },
    },
    btnNotify: {
        background: 'white',
        borderRadius: 10,
        color: '#709799',
        height: 28,
        fontSize: 12,
        textTransform: 'unset',
        marginTop: 10,
        marginLeft: 10,
        '&:hover': {
            background: 'white',
        },
    },
}));

const notifyData = {
    userName: 'Agnieszka Kowalska',
    time: '3 min',
    alert: 'Poszukuje wykonawców do budowy domu. Odpowiedz, by skorzystać z okazji jako pierwszy!',
    btn1: 'Odpowiedz',
    btn2: 'Zignoruj',
};

export default function NotifyInfo() {
    const classes = useStyles();
    return (
        <div className="my-3">
            <div className="w-100 flex">
                <div className="flex justify-left align-items-center" style={{ width: 64 }}>
                    <img src={imageOne} className={styles.userIcon} alt="" />
                </div>
                <div className="flex flex-col justify-left align-items-center" style={{ width: 'calc(100% - 64px)' }}>
                    <div className="flex flex-row justify-left">
                        <span className={styles.notifyUser}>{notifyData.userName}</span>
                        <span className={styles.notifyTime}>{notifyData.time}</span>
                    </div>
                    <span className={styles.notifyText}>{notifyData.alert}</span>
                    <div className="flex flex-row justify-left">
                        <Button className={classes.btnNotifyAction}>{notifyData.btn1}</Button>
                        <Button className={classes.btnNotify}>{notifyData.btn2}</Button>
                    </div>
                </div>
            </div>
            <hr className={styles.breakNotify} />
        </div>
    );
}
