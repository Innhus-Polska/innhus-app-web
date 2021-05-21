import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../molecules/Topbar';
import MenuTopMain from '../molecules/Menu';
import FooterBlock from '../molecules/Footer';

class PageLanding extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <FooterBlock />
            </View>
        );
    }
}

export default PageLanding;
