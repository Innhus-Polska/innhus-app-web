import React, { Component, useState } from 'react';
import { View } from 'react-native-web';
import styles from '../../styles/styles.module.css';
import imageOne from '../../assets/images/pexels-curtis-adams-5178080.jpg';
import { ReactComponent as SendMessageIcon } from '../../assets/images/icons/send-message.svg';
import { Button } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CHAT_CONV from '../../utils/data/chat/ConversationsList.json';
import VENDOR_DATA from '../../utils/data/chat/CompaniesList.json';

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

export default function ChatNewMessage() {
    const classes = useStyles();
    const [chatTerm, setChatTerm] = useState('');
    return (
        <div className="w-100 px-5 my-5">
            <h3 className={styles.h3}>Nowa wiadomość</h3>
            <div className="mt-2 mb-5">
                <h5 className={styles.h5}>Do</h5>
                <input
                    type="text"
                    placeholder="Szukaj wśród konwersacji"
                    className={styles.searchInput}
                    onChange={(event) => {
                        setChatTerm(event.target.value);
                    }}
                />
            </div>
            <h5 className={styles.h5}>Doradcy Klienta</h5>
            <div className="mb-5">
                {CHAT_CONV.filter((val) => {
                    if (chatTerm == '') {
                        return val;
                    } else if (val.title.toLowerCase().includes(chatTerm.toLowerCase())) {
                        return val;
                    }
                }).map((CHAT_CONV, key) => {
                    return (
                        <div>
                            <a href="/chat/inbox/id">
                                <div className="w-100 flex items-center mt-5">
                                    <div className="flex justify-left align-items-center" style={{ width: 64 }}>
                                        <img src={imageOne} className={styles.userIcon} alt="" />
                                    </div>
                                    <div
                                        className="flex flex-col justify-left align-items-center"
                                        style={{ width: 'calc(100% - 64px)' }}
                                    >
                                        <div className="flex flex-row justify-left items-center">
                                            <span className={styles.chatUser}>{CHAT_CONV.userName}</span>
                                            <span className={styles.chatTime}>
                                                <SendMessageIcon className={styles.chatSendIcon} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
            <h5 className={styles.h5}>Propozycje Wykonawców</h5>
            <div className="mb-5">
                {VENDOR_DATA.filter((val) => {
                    if (chatTerm == '') {
                        return val;
                    } else if (val.title.toLowerCase().includes(chatTerm.toLowerCase())) {
                        return val;
                    }
                }).map((VENDOR_DATA, key) => {
                    return (
                        <div>
                            <a href="/chat/inbox/id">
                                <div className="w-100 flex items-center mt-5">
                                    <div className="flex justify-left align-items-center" style={{ width: 64 }}>
                                        <img src={imageOne} className={styles.userIcon} alt="" />
                                    </div>
                                    <div
                                        className="flex flex-col justify-left align-items-center"
                                        style={{ width: 'calc(100% - 64px)' }}
                                    >
                                        <div className="flex flex-row justify-left items-center">
                                            <span className={styles.chatUser}>{VENDOR_DATA.userName}</span>
                                            <span className={styles.chatTime}>
                                                <SendMessageIcon className={styles.chatSendIcon} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
