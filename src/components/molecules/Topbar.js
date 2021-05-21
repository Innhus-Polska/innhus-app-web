import { Typography } from '@material-ui/core';
import { View } from 'react-native-web';
import React, { Component } from 'react';
import style from '../../styles/styles.module.css';

class TopbarPromo extends Component {
    render() {
        const topBarText = 'Sprawdź specjalne okazje w naszym katalogu domów modułowych!';
        return (
            <View>
                <Typography className={style.topBlockContainer}>{topBarText}</Typography>
            </View>
        );
    }
}

export default TopbarPromo;
