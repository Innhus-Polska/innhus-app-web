import React from 'react';
import { View } from 'react-native-web';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import CardOffer from '../molecules/cardOffer';
import CardArticle from '../molecules/CardArticle';
import Button from '@material-ui/core/Button';
import ProductOcassion from '../atoms/ProductOcassion';
import styles from '../../styles/styles.module.css';
import PROPERTIES from '../../utils/data/Properties.json';

const pagination = {
    marginLeft: 20,
    marginRight: 20,
};

const showMore = {
    backgroundColor: '#709799',
    color: 'white',
    borderRadius: 10,
    width: 150,
    margin: '0 auto',
    textTransform: 'unset',
};

class ContentHome extends React.Component {
    render() {
        return (
            <View style={pagination}>
                <h3 className="pt-4 pb-3 font-bold text-center">Blog</h3>
                <div className="grid grid-cols-12 grid-gap-0 container mx-auto">
                    <div className="col-span-4">
                        <CardArticle />
                    </div>
                    <div className="col-span-4">
                        <CardArticle />
                    </div>
                    <div className="col-span-4">
                        <CardArticle />
                    </div>
                </div>
                <View>
                    <Button style={showMore}>Zobacz więcej</Button>
                </View>
                <h3 className="pt-4 pb-3 font-bold text-center">Poradniki</h3>
                <div className="grid grid-cols-12 grid-gap-0 container mx-auto">
                    <div className="col-span-4">
                        <CardArticle />
                    </div>
                    <div className="col-span-4">
                        <CardArticle />
                    </div>
                    <div className="col-span-4">
                        <CardArticle />
                    </div>
                </div>
            </View>
        );
    }
}

export default ContentHome;
