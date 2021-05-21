import React, { Component } from 'react';
import { View } from 'react-native-web';
import style from '../../styles/styles.module.css';
import { ReactComponent as FacebookBlackIcon } from '../../assets/images/icons/facebook-black.svg';
import { ReactComponent as TwitterBlackIcon } from '../../assets/images/icons/twitter-black.svg';
import { ReactComponent as LinkedInBlackIcon } from '../../assets/images/icons/linkedin-black.svg';

export default function ArticleShare() {
    return (
        <View>
            <div className="flex flex-col pt-3">
                <a href="/" className={style.socialIconArticle}>
                    <FacebookBlackIcon />
                </a>
                <a href="/" className={style.socialIconArticle}>
                    <TwitterBlackIcon />
                </a>
                <a href="/" className={style.socialIconArticle}>
                    <LinkedInBlackIcon />
                </a>
            </div>
        </View>
    );
}
