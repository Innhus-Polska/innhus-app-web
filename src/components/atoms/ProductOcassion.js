import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import { View } from 'react-native-web';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as IconHeart } from '../../assets/images/icons/heart.svg';
import styles from '../../styles/styles.module.css';

const productData = {
    image: '../../assets/images/pexels-naim-benjelloun-2029665.jpg',
    title: 'Dom modułowy willa z basenem',
    from: 'od',
    fromPrice: ' 24 598',
    to: '',
    toPrice: '',
    currency: 'PLN',
    square: '62',
    squarePrice: '7.984,00',
    link: '',
};

export default function ProductOcassion() {
    return (
        <View>
            <a href="/product">
                <div className="grid grid-cols-12 gap-0 mt-5 pb-3">
                    <div className="col-span-12 pr-3">
                        <img src={productData.image} alt="" className={styles.productData} />
                    </div>
                    <div className="col-span-12 flex flex-row pt-3">
                        <div className="flex flex-col">
                            <div className={styles.productListTitle}>{productData.title}</div>
                            <div className={styles.productListPrice}>
                                {productData.from} {productData.fromPrice} {productData.currency} {productData.to}
                                {productData.toPrice}
                            </div>
                            <div className={styles.productListDetails}>
                                {productData.square} m<sup>2</sup> &bull; {productData.from} {productData.squarePrice}
                                &nbsp;
                                {productData.currency}
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mr-3">
                            <Button className={styles.btnFavourite} href={productData.link}>
                                <IconHeart />
                            </Button>
                        </div>
                    </div>
                </div>
            </a>
        </View>
    );
}
