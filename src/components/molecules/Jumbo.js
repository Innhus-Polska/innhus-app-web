import { Typography } from '@material-ui/core';
import { Image, ImageBackground, View } from 'react-native-web';
import React, { Component } from 'react';
import SearchField from '../atoms/SearchField';
import SearchInput from '../atoms/searchInput';
import styles from '../../styles/styles.module.css';
import MainBackground from '../../assets/images/pexels-naim-benjelloun-2029665.jpg';

class HeroJumbotronSearch extends Component {
    render() {
        return (
            <View>
                <img src={MainBackground} className={styles.stretch} />
                <div className={styles.searchBox}>
                    <SearchField />
                    <SearchInput />
                </div>
                <div className="text-gray-700 body-font">
                    <div className="container flex flex-col px-5 py-0 mx-auto lg:items-center">
                        <div className="flex flex-col w-full mb-12 text-left lg:text-center mt-10">
                            <h1 className="mb-3 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font">
                                Pierwsza w Polsce platforma z domami modułowymi
                            </h1>
                            <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">
                                Już dziś skonfiguruj i zamów swój wymarzony dom online!
                            </p>
                        </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default HeroJumbotronSearch;
