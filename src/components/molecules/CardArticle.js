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

const blogBox = {};

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function CardArticle() {
    const classes = useStyles();

    return (
        <div
            className="overflow-hidden transition-shadow duration-300 bg-white rounded px-0 pt-5 mr-5 my-2"
            style={blogBox}
        >
            <a href="/blog/article" aria-label="Product">
                <img src={DefaultProduct} className="object-cover w-100 h-50 rounded-2xl" alt="" />
            </a>
            <div className="py-5">
                <div className="grid grid-cols-6 gap-1">
                    <div className="col-span-6">
                        <a
                            href="/blog/article"
                            aria-label="Product"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            <h5 className="text-1xl font-bold leading-5">
                                Koszt remontu kuchni – ile wydasz na materiały, sprzęt i fachowca? Sprawdź!
                            </h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
