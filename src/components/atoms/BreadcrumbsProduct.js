import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles from '../../styles/styles.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    breadcrumbLink: {
        fontSize: 12,
        fontWeight: 700,
        color: '#719599',
    },
}));

const green = '#719599';
const black = '#000000';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BreadcrumbsProduct() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color={green} href="/" onClick={handleClick} className={classes.breadcrumbLink}>
                    Projekty
                </Link>
                <Link color={green} href="/" onClick={handleClick} className={classes.breadcrumbLink}>
                    Domy modułowe
                </Link>
                <Link color={black} className={classes.breadcrumbLink}>
                    Willa z basenem wstępny projekt
                </Link>
            </Breadcrumbs>
        </div>
    );
}
