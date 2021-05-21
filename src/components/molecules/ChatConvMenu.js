import { Typography, Button, Link } from '@material-ui/core';
import { View } from 'react-native-web';
import React, { Component } from 'react';
import Badge from '@material-ui/core/Badge';
import styles from '../../styles/styles.module.css';
import UserAvatar from '../../assets/images/pexels-andrea-piacquadio-919436.jpg';
import { ReactComponent as NotifyIcon } from '../../assets/images/icons/notify-bell.svg';
import { ReactComponent as ChatIcon } from '../../assets/images/icons/chat-clouds.svg';
import { ReactComponent as ArrowBack } from '../../assets/images/icons/chevron-left.svg';
import DEFAULT_CONV from '../../utils/data/chat/DefaultConversation.json';

const notifyProps = {
    color: 'secondary',
    children: (
        <Button className={styles.menuButtonIcon} href="/notify">
            <NotifyIcon />
        </Button>
    ),
};

const chatProps = {
    color: 'secondary',
    children: (
        <Button className={styles.menuButtonIcon} href="/chat/inbox">
            <ChatIcon />
        </Button>
    ),
};
class ChatConvMenu extends Component {
    render() {
        return (
            <View>
                <div className="w-100 mt-3">
                    <div class="grid grid-cols-12 gap-0 px-5">
                        <div class="col-span-12 flex flex-row items-center justify-left">
                            <a href="/chat/inbox">
                                <ArrowBack />
                            </a>
                            <img src={UserAvatar} className={styles.userAvatar} alt="" />
                            <div className="flex flex-col ml-3">
                                {DEFAULT_CONV.map((convData, content) => {
                                    return (
                                        <div className="flex flex-col justify-content-center" key={content}>
                                            <h5 className={styles.h5}>{convData.username}</h5>
                                            <span className={styles.chatMenuAvaible}>{convData.isAvaible}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default ChatConvMenu;
