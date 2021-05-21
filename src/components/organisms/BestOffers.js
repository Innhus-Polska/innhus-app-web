import { Typography } from '@material-ui/core';
import { View } from 'react-native-web';
import React, { Component } from 'react';
import styles from '../../styles/styles.module.css';
import CardOffer from '../molecules/cardOffer';

class BestOffers extends Component {
    render() {
        return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h3 className={styles.sectionTitle}>Najnowsze realizacje</h3>
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <CardOffer />
                    <CardOffer />
                    <CardOffer />
                </div>
            </div>
        );
    }
}

export default BestOffers;
