import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styles from '../../styles/styles.module.css';
import { ReactComponent as FilterIcon } from '../../assets/images/icons/preferences.svg';
import { ReactComponent as ArrowBack } from '../../assets/images/icons/arrow-left.svg';
import Button from '@material-ui/core/Button';
import FiltersOfferTop from './FilterList';

const useStyles = makeStyles({
    showResults: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function FilterMobile() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div className="w-100 px-5 py-4">
            <Button onClick={toggleDrawer(anchor, false)}>
                <ArrowBack />
            </Button>
            <h1 className={styles.h1}>Filtry</h1>
            <FiltersOfferTop />
            <Button
                onClick={toggleDrawer(anchor, false)}
                style={{ backgroundColor: '#709799', color: 'white', width: '100%', textTransform: 'unset' }}
            >
                Zastosuj filtry
            </Button>
            <Button>Wyczyść</Button>
        </div>
    );

    return (
        <div>
            {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <FilterIcon className={styles.filterIcon} />
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
