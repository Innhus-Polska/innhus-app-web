import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../molecules/Topbar';
import MenuTopMain from '../molecules/Menu';
import ContentHome from '../organisms/ContentHome';
import FooterBlock from '../molecules/Footer';

class PageBlog extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <ContentHome />
                <FooterBlock />
            </View>
        );
    }
}

export default PageBlog;
