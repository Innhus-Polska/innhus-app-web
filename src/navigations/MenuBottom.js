import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { ReactComponent as StartIcon } from '../assets/images/icons/home.svg';
import { ReactComponent as HeartIcon } from '../assets/images/icons/heart.svg';
import { ReactComponent as BagIcon } from '../assets/images/icons/shopping-bag.svg';
import { ReactComponent as AddIcon } from '../assets/images/icons/add-icon.svg';
import '../styles/index.css';

const useStyles = makeStyles({
    bottomNav: {
        width: '100%',
        height: 80,
        position: 'fixed',
        bottom: 0,
        paddingTop: 20,
        paddingBottom: 25,
        paddingLeft: 15,
        paddingRight: 15,
        boxShadow: '0px 0px 15px rgba(0,0,0,0.15)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        fontFamily: 'Poppins',
    },
    bottomBtn: {
        display: 'flex',
        flexFlow: 'row nowrap',
        height: 45,
        '&:focus': {
            background: '#709799',
            borderRadius: 50,
        },
        '&:focus span span': {
            color: 'white',
            fontFamily: 'Poppins',
        },
        '& span span': {
            color: 'black',
            fontFamily: 'Poppins',
        },
        '&[value="folder"]': {
            color: 'black',
        },
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StylesProvider injectFirst>
            <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNav}>
                <BottomNavigationAction
                    className={classes.bottomBtn}
                    label="Start"
                    value="recents"
                    icon={<StartIcon />}
                />
                <BottomNavigationAction
                    className={classes.bottomBtn}
                    label="Ulubione"
                    value="favorites"
                    icon={<HeartIcon />}
                />
                <BottomNavigationAction
                    className={classes.bottomBtn}
                    label="Koszyk"
                    value="nearby"
                    icon={<BagIcon />}
                />
                <BottomNavigationAction
                    className={classes.bottomBtn}
                    label="Dodaj"
                    value="folder"
                    icon={<AddIcon />}
                    style={{ backgroundColor: '#B35D4E', width: 30, height: 45, borderRadius: 50 }}
                />
            </BottomNavigation>
        </StylesProvider>
    );
}
