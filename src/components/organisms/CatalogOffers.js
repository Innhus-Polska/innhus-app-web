import { View } from 'react-native-web';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import styles from '../../styles/styles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import ProductOcassion from '../atoms/ProductOcassion';
import CatalogProducts from '../molecules/CatalogProducts';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        backgroundColor: '#F2F2F2',
        borderRadius: 12,
        fontFamily: 'Poppins',
    },
    selectControl: {
        backgroundColor: '#F2F2F2',
        borderRadius: 12,
        fontFamily: 'Poppins',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const pageContent = {
    descriptionTitle: 'Opis produktu',
    walk3d: 'Obejrzyj spacer 3D',
    opinionTitle: 'Zobacz opinie',
    opinionResumeLabel1: 'średnia ocena',
    opinionResumeLabel2: 'opinii',
    vendorTitle: 'O producencie',
    vendorText:
        'Ursus Factory 6 to kolejny etap inwestycji przy ul. Posag 7 Panien, realizowany w dynamicznie rozwijającej się części Ursusa. Ta dawniej przemysłowa okolica od kilku lat zmienia swój charakter, przekształcając się w nowoczesną i przyjazną strefę mieszkalną. Obecnie dzielnica cieszy się ogromnym zainteresowaniem zarówno wśród młodych rodzin, jak i szukających komfortowego miejsca do życia singli.',
    ocassionTitle: 'Zobacz specjalne okazje',
    interestingTitle: 'Te oferty mogą Ciebie zainteresować',
};

export default function CatalogOffers() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <View>
            <div className="w-100 px-3 mt-5">
                <CatalogProducts />
            </div>
        </View>
    );
}
