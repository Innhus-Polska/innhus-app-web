import { styled } from '@material-ui/core';
import React from 'react';
import { View } from 'react-native-web';
import NotifyInfo from '../molecules/NotifyInfo';
import styles from '../../styles/styles.module.css';

class ContentNotify extends React.Component {
    render() {
        return (
            <div className={styles.notify}>
                <h3 className={styles.h3}>Powiadomienia</h3>
                <NotifyInfo />
                <NotifyInfo />
                <NotifyInfo />
                <NotifyInfo />
                <NotifyInfo />
                <NotifyInfo />
            </div>
        );
    }
}

export default ContentNotify;
