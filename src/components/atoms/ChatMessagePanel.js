import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import { ReactComponent as ExpandMoreIcon } from '../../assets/images/icons/expand.svg';
import { ReactComponent as MicrophoneIcon } from '../../assets/images/icons/microphone.svg';
import { ReactComponent as SendMessageWhiteIcon } from '../../assets/images/icons/send-message-white.svg';
import { ReactComponent as ChatImage } from '../../assets/images/icons/image.svg';
import { ReactComponent as ChatAttachment } from '../../assets/images/icons/attachment.svg';
import { ReactComponent as ChatContact } from '../../assets/images/icons/contact.svg';
import { ReactComponent as ChatMapMarker } from '../../assets/images/icons/map-marker.svg';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    chatPanelMain: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'stretch',
        flexDirection: 'row-reverse',
        marginTop: 15,
        width: '100%',
    },
    btnAction: {
        width: 44,
        height: 44,
        padding: 11,
        backgroundColor: '#EBEBEB',
        borderRadius: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatInputMain: {
        marginLeft: 15,
        display: 'flex',
        flexFlow: 'row nowrap',
    },
    chatInput: {
        width: 'auto',
        backgroundColor: '#EBEBEB',
        borderRadius: 22,
        fontSize: 12,
        paddingLeft: 10,
    },
    chatInputSend: {
        backgroundColor: '#709799',
        borderRadius: '100%',
        width: 44,
        height: 44,
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    btn: {
        width: 58,
        height: 58,
        borderRadius: '100%',
    },
    btn1: {
        backgroundColor: 'rgba(112,138,140,0.16)',
    },
    btn2: {
        backgroundColor: 'rgba(148,134,116,0.16)',
    },
    btn3: {
        backgroundColor: 'rgba(186,136,103,0.16)',
    },
    btn4: {
        backgroundColor: 'rgba(112,151,153,0.16)',
    },
    btnLabel: {
        fontSize: 11,
        fontWeight: 600,
        textAlign: 'center',
        paddingTop: 3,
    },
});

export default function ChatMessagePanel() {
    const classes = useStyles();
    const chatPlaceholder = 'Wpisz treść wiadomości';
    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.btnAction} />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    className={classes.chatPanelMain}
                >
                    <a className={classes.btnAction} style={{ marginLeft: 10 }}>
                        <MicrophoneIcon />
                    </a>
                    <div className={classes.chatInputMain}>
                        <input type="text" className={classes.chatInput} placeholder={chatPlaceholder} />
                        <a className={classes.chatInputSend}>
                            <SendMessageWhiteIcon />
                        </a>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="w-100 flex flex-row">
                        <div className="flex flex-col">
                            <Button className={[classes.btn1, classes.btn].join(' ')}>
                                <ChatImage />
                            </Button>
                            <span className={classes.btnLabel}>Zdjęcie</span>
                        </div>
                        <div className="flex flex-col">
                            <Button className={[classes.btn2, classes.btn].join(' ')}>
                                <ChatAttachment />
                            </Button>
                            <span className={classes.btnLabel}>Plik</span>
                        </div>
                        <div className="flex flex-col">
                            <Button className={[classes.btn3, classes.btn].join(' ')}>
                                <ChatContact />
                            </Button>
                            <span className={classes.btnLabel}>Kontakt</span>
                        </div>
                        <div className="flex flex-col">
                            <Button className={[classes.btn4, classes.btn].join(' ')}>
                                <ChatMapMarker />
                            </Button>
                            <span className={classes.btnLabel}>Lokalizacja</span>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
