import { Typography } from '@material-ui/core';
import { View } from 'react-native-web';
import React, { Component } from 'react';
import styles from '../../styles/styles.module.css';
import CardArticle from '../molecules/cardArticle';
import Slider from 'react-slick';

class BlogsArticles extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
        };
        return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h3 className={styles.sectionTitle}>Blog</h3>
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default BlogsArticles;
