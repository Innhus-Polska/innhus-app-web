import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../../molecules/Topbar';
import MenuTopMain from '../../molecules/Menu';
import ChooseAuthMethod from '../../molecules/ChooseAuthMethod';

class PageChoose extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <ChooseAuthMethod />
            </View>
        );
    }
}

export default PageChoose;
