import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../../molecules/Topbar';
import MenuTopMain from '../../molecules/Menu';
import LoginByPhone from '../../organisms/LoginByPhone';

class PageLogin extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <LoginByPhone />
            </View>
        );
    }
}

export default PageLogin;
