import React, { useState } from 'react';
import { View } from 'react-native-web';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Heart from 'react-animated-heart';
import { ReactComponent as LikeIcon } from '../../assets/images/icons/thumbs-up.svg';
import styles from '../../styles/styles.module.css';

const opinionData = {
    userIcon: '../../assets/images/pexels-naim-benjelloun-2029665.jpg',
    name: 'Milena',
    countOpinions: '2',
    countTransactions: '5',
    content:
        'Obecnie dzielnica cieszy się ogromnym zainteresowaniem zarówno wśród młodych rodzin, jak i szukających komfortowego miejsca do życia singli.',
    likes: '145',
    date: '20 lutego 2021',
    time: '14:55',
};

const labels = {
    0.5: 'Szkoda gadać',
    1: 'Bardzo słabe',
    1.5: 'Słabe',
    2: 'Niezbyt',
    2.5: 'Może być',
    3: 'W porządku',
    3.5: 'Dobrze',
    4: 'Bardzo dobrze',
    4.5: 'Wspaniałe',
    5: 'Mistrzostwo',
};

const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});

export default function ProductOpinion() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
    const [isClick, setClick] = useState(false);
    return (
        <View>
            <div className="grid grid-cols-12 gap-0 mt-5 pb-3">
                <div className="col-span-1">
                    <img src={opinionData.userIcon} className={styles.userIcon} alt="" />
                </div>
                <div className="col-span-11 d-flex flex-column items-center">
                    <div className={styles.opinionUserName}>{opinionData.name}</div>
                    <div className={styles.opinionUserDetails}>
                        {opinionData.countOpinions} oceny &bull; {opinionData.countTransactions} zakupów
                    </div>
                </div>
                <div className="col-span-12 flex flex-row my-2">
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                    />
                    {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                </div>
                <div className="col-span-12">
                    <p className={styles.productText}>{opinionData.content}</p>
                </div>
                <div className="col-span-6 mt-3 flex flex-row">
                    <LikeIcon />
                    <div className={styles.likeRating}>{opinionData.likes}</div>
                </div>
                <div className="col-span-6 mt-3">
                    <p className={styles.opinionUserDate}>
                        {opinionData.date} {opinionData.time}
                    </p>
                </div>
            </div>
            <div className={styles.opinionBottomLine}></div>
        </View>
    );
}
