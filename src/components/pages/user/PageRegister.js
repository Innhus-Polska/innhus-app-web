import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../../molecules/Topbar';
import MenuTopMain from '../../molecules/Menu';
import RegisterByMail from '../../organisms/RegisterByMail';

class PageRegister extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <RegisterByMail />
            </View>
        );
    }
}

export default PageRegister;
