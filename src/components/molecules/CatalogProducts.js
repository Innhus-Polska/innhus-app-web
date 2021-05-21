import React, { Component, useState } from 'react';
import FilterMobile from './FilterMobile';
import styles from '../../styles/styles.module.css';
import PROPERTIES from '../../utils/data/Properties.json';
import Button from '@material-ui/core/Button';
import Checkbox from 'react-custom-checkbox';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import ListProducts from '../atoms/ListProducts';
import { ReactComponent as SortIcon } from '../../assets/images/icons/shuffle.svg';
import imageOne from '../../assets/images/pexels-curtis-adams-5178052.jpg';
import defaultHome1 from '../../assets/images/default-home-1.png';
import defaultHome2 from '../../assets/images/default-home-2.png';
import { ReactComponent as IconHeart } from '../../assets/images/icons/heart.svg';
import { ReactComponent as IconHeartBlack } from '../../assets/images/icons/heart.svg';
import { ReactComponent as BagIcon } from '../../assets/images/icons/shopping-bag.svg';

function CatalogProducts() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="w-100 py-3">
            <div className="container mx-auto px-5">
                <h5 className="container px-5 pb-4 font-bold">Przeglądaj realizacje</h5>
            </div>
            <div className="container mx-auto grid grid-cols-12 gap-0 px-5">
                {PROPERTIES.map((PROPERTIES, key) => {
                    return (
                        <div className="col-span-4 px-5" key={key}>
                            <div className="w-100">
                                <img src={PROPERTIES.image} className={styles.offerListImg} alt="" />
                            </div>
                            <div className="flex flex-row my-2">
                                <div className="flex flex-col">
                                    <div className={styles.productListTitle}>{PROPERTIES.title}</div>
                                    <div className={styles.productListPrice}>
                                        {PROPERTIES.from} {PROPERTIES.fromPrice} {PROPERTIES.currency} {PROPERTIES.to}
                                        {PROPERTIES.toPrice}
                                    </div>
                                    <div className={styles.productListDetails}>
                                        {PROPERTIES.square} m<sup>2</sup> &bull; {PROPERTIES.from}{' '}
                                        {PROPERTIES.squarePrice}
                                        &nbsp;
                                        {PROPERTIES.currency}
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-center relative ml-auto mr-0">
                                    <Button className={styles.btnProduct}>
                                        <IconHeart />
                                    </Button>
                                    <Button className={styles.btnProduct} href={PROPERTIES.link}>
                                        <BagIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CatalogProducts;
