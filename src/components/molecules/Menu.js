import { Typography, Button, Link } from '@material-ui/core';
import { View } from 'react-native-web';
import React, { Component } from 'react';
import style from '../../styles/styles.module.css';
import MainLogo from '../../assets/images/logo-innhus.jpg';
import { ReactComponent as NotifyIcon } from '../../assets/images/icons/notify-bell.svg';
import { ReactComponent as ChatIcon } from '../../assets/images/icons/chat-clouds.svg';
import Badge from '@material-ui/core/Badge';
import styles from '../../styles/styles.module.css';
import TopMenuList from '../atoms/TopMenuList';

const notifyProps = {
    color: 'secondary',
    children: (
        <Button className={style.menuButtonIcon} href="/notify">
            <NotifyIcon />
        </Button>
    ),
};

const chatProps = {
    color: 'secondary',
    children: (
        <Button className={style.menuButtonIcon} href="/chat/inbox">
            <ChatIcon />
        </Button>
    ),
};
class MenuTopMain extends Component {
    render() {
        return (
            <View>
                <div
                    className="w-full py-5 bg-white"
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{ boxShadow: '0px 0px 15px rgba(0,0,0,0.15)', position: 'relative', zIndex: '100' }}
                >
                    <div class="container mx-auto grid grid-cols-12 gap-0 px-5">
                        <div class="col-span-12 flex flex-row items-center justify-center">
                            <a href="/" style={{ marginRight: 25 }}>
                                <img src={MainLogo} className={styles.logomenu} />
                            </a>
                            <TopMenuList />
                            <a href="/catalog" className={styles.topBtnConfig}>
                                Skonfiguruj własny dom
                            </a>
                            <Badge badgeContent={99} {...notifyProps} className={styles.badge} />
                            <Badge badgeContent={2} {...chatProps} className={styles.badge} />
                        </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default MenuTopMain;
