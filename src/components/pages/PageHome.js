import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../molecules/Topbar';
import MenuTopMain from '../molecules/Menu';
import CatalogOffers from '../organisms/CatalogOffers';
import ContentHome from '../organisms/ContentHome';
import FooterBlock from '../molecules/Footer';
import HeroJumbotronSearch from '../molecules/Jumbo';
import Configurator from '../molecules/Configurator';

class PageHome extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <HeroJumbotronSearch />
                <CatalogOffers />
                <Configurator />
                <ContentHome />
                <FooterBlock />
            </View>
        );
    }
}

export default PageHome;
