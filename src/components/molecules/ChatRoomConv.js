import React from 'react';
import { View } from 'react-native-web';
import ScrollToBottom from 'react-scroll-to-bottom';
import styles from '../../styles/styles.module.css';
import DEFAULT_CONV from '../../utils/data/chat/DefaultConversation.json';
import ChatMessagePanel from '../atoms/ChatMessagePanel';

const time = '11:35';
const text = 'Dzień dobry! Chciałabym zamówić u Państwa piękny domek letniskowy.';

class ChatRoomConv extends React.Component {
    render() {
        return (
            <div className="w-100 px-5 my-5">
                {DEFAULT_CONV.map((chatMes) => {
                    return (
                        <div>
                            <div className={styles.chatMessage}>{text}</div>
                            <div className={styles.chatMessage}>{text}</div>
                            <div className={styles.chatMessage}>{text}</div>
                            <div className={styles.chatMessage}>{text}</div>
                            <div className={styles.chatMessage}>{text}</div>
                        </div>
                    );
                })}
                <ChatMessagePanel />
            </div>
        );
    }
}

export default ChatRoomConv;
