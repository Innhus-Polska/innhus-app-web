import React, { Component, useState } from 'react';
import { View } from 'react-native-web';
import styles from '../../styles/styles.module.css';
import imageOne from '../../assets/images/pexels-curtis-adams-5178080.jpg';
import { Button } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CHAT_CONV from '../../utils/data/chat/ConversationsList.json';

const useStyles = makeStyles((theme) => ({
    btnNotifyAction: {
        background: '#709799',
        borderRadius: 10,
        color: 'white',
        height: 28,
        fontSize: 12,
        textTransform: 'unset',
        marginTop: 10,
        '&:hover': {
            background: '#709799',
        },
    },
    btnNotify: {
        background: 'white',
        borderRadius: 10,
        color: '#709799',
        height: 28,
        fontSize: 12,
        textTransform: 'unset',
        marginTop: 10,
        marginLeft: 10,
        '&:hover': {
            background: 'white',
        },
    },
}));

export default function ChatListConversation() {
    const classes = useStyles();
    const [chatTerm, setChatTerm] = useState('');
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="w-100">
            <h5 className={styles.h5}>Znajdź konwersację</h5>
            <div className="mt-2 mb-5">
                <input
                    type="text"
                    placeholder="Szukaj wśród konwersacji"
                    className={styles.searchInput}
                    onChange={(event) => {
                        setChatTerm(event.target.value);
                    }}
                />
            </div>
            <div>
                {CHAT_CONV.filter((val) => {
                    if (chatTerm == '') {
                        return val;
                    } else if (val.title.toLowerCase().includes(chatTerm.toLowerCase())) {
                        return val;
                    }
                }).map((CHAT_CONV, key) => {
                    return (
                        <div>
                            <a href="/chat/room">
                                <div className="w-100 flex items-center mt-3">
                                    <div className="flex justify-left align-items-center" style={{ width: 64 }}>
                                        <img src={imageOne} className={styles.userIcon} alt="" />
                                    </div>
                                    <div
                                        className="flex flex-col justify-left align-items-center"
                                        style={{ width: 'calc(100% - 64px)' }}
                                    >
                                        <div className="flex flex-row justify-left items-center">
                                            <span className={styles.chatUser}>{CHAT_CONV.userName}</span>
                                            <span className={styles.chatTime}>{CHAT_CONV.time}</span>
                                        </div>
                                        <span className={styles.chatText}>{CHAT_CONV.short}</span>
                                    </div>
                                </div>
                            </a>
                            <hr className={styles.breakChat} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
