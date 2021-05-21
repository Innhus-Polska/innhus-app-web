import React from 'react';
import styles from '../../styles/styles.module.css';
import PROPERTIES from '../../utils/data/Properties.json';
import Button from '@material-ui/core/Button';
import Checkbox from 'react-custom-checkbox';
import { ReactComponent as IconHeart } from '../../assets/images/icons/heart.svg';
import { ReactComponent as IconHeartBlack } from '../../assets/images/icons/heart.svg';
import { ReactComponent as BagIcon } from '../../assets/images/icons/shopping-bag.svg';
import imageOne from '../../assets/images/pexels-curtis-adams-5178052.jpg';
import defaultHome1 from '../../assets/images/default-home-1.png';
import defaultHome2 from '../../assets/images/default-home-2.png';

export default class ProductElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: props.productList,
        };
    }

    render() {
        return (
            <div>
                {this.state.productList.map((PROPERTIES) => {
                    return (
                        <div className="w-100 mb-5">
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
        );
    }
}
