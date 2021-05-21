import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as IconHeart } from '../../assets/images/icons/heart.svg';
import DefaultProduct from '../../assets/images/pexels-naim-benjelloun-2029665.jpg';
import styles from '../../styles/styles.module.css';

const smallBox = {
    width: '100%',
};

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function CardOffer() {
    const classes = useStyles();

    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded mr-3" style={smallBox}>
            <a href="/" aria-label="Product">
                <img src={DefaultProduct} className="object-cover w-full h-52 rounded-2xl" alt="" />
            </a>
            <div className="py-5">
                <div className="grid grid-cols-6 gap-1">
                    <div className="col-span-5">
                        <a
                            href="/"
                            aria-label="Product"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            <h5 className="text-1xl font-bold leading-5">Dom modułowy willa z basenem</h5>
                        </a>
                        <p className="mb-1 text-gray-700">od 24 598 zł</p>
                        <small className="mb-1 text-gray-700">62 m2 / od 7.984,00 m2</small>
                    </div>
                    <div className="col-span-1">
                        <Button classes={styles.btnFavourite} href="https://google.com">
                            <IconHeart />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
