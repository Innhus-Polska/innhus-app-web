/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react';
import { View } from 'react-native-web';
import styles from '../../styles/styles.module.css';
import imageOne from '../../assets/images/pexels-curtis-adams-5178080.jpg';
import { Button } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import MENU_LIST from '../../utils/data/TopMenu.json';
import { ReactComponent as ArrowRight } from '../../assets/images/icons/arrow-right.svg';

const menuList = MENU_LIST;

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

export default function TopMenuList() {
    const classes = useStyles();
    return (
        <div className={styles.topMenu}>
            <ul className={styles.menuDesktopItems}>
                {menuList.map((i) => (
                    <li className={styles.menuItem}>
                        <a href={i.link} className={styles.menuItemTitle}>
                            {i.title}
                        </a>
                        <a href={i.link} className={styles.menuItemDesc}>
                            {i.desc}
                        </a>
                    </li>
                ))}
            </ul>
            <button className={styles.topGo}>
                <ArrowRight />
            </button>
        </div>
    );
}
