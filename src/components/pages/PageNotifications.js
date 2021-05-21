import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../molecules/Topbar';
import MenuTopMain from '../molecules/Menu';
import ContentNotify from '../organisms/ContentNotify';
import { Typography } from '@material-ui/core';

class PageNotifications extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <ContentNotify />
            </View>
        );
    }
}

export default PageNotifications;
