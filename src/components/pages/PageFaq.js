import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../molecules/Topbar';
import MenuTopMain from '../molecules/Menu';
import FooterBlock from '../molecules/Footer';
import ContentFaq from '../organisms/ContentFaq';

class PageFaq extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <ContentFaq />
                <FooterBlock />
            </View>
        );
    }
}

export default PageFaq;
