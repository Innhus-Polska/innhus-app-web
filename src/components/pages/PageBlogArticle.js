import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../molecules/Topbar';
import MenuTopMain from '../molecules/Menu';
import BlogContent from '../organisms/BlogContent';
import FooterBlock from '../molecules/Footer';

class PageBlogArticle extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <BlogContent />
                <FooterBlock />
            </View>
        );
    }
}

export default PageBlogArticle;
