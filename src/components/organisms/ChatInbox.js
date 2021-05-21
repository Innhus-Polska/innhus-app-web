import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ChatListConversations from '../molecules/ChatListConversations';
import styles from '../../styles/styles.module.css';
import { ReactComponent as NewMessIcon } from '../../assets/images/icons/write-message.svg';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginTop: 15,
        boxShadow: 'none',
    },
    appBar: {
        marginLeft: 20,
        marginTop: 15,
        width: 'calc(100% - 20px)',
    },
    tabBlock: {
        paddingLeft: 15,
    },
    tab: {
        fontSize: 12,
        textTransform: 'unset',
        borderRadius: 5,
        margin: '10px 5px',
        '&:focus': {
            backgroundColor: 'white',
        },
    },
}));

export default function ChatInbox() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className="flex flex-row px-5">
                <h3 className={styles.h3}>Wiadomości</h3>
                <Button href="/chat/new" className="ml-auto mr-0">
                    <NewMessIcon />
                </Button>
            </div>
            <AppBar position="static" color="default" className={classes.appBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="black"
                    textColor="black"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    className={classes.tabBlock}
                >
                    <Tab label="Najnowsze" className={classes.tab} {...a11yProps(0)} />
                    <Tab label="Zapytania" className={classes.tab} {...a11yProps(1)} />
                    <Tab label="Oferty" className={classes.tab} {...a11yProps(2)} />
                    <Tab label="Spotkania" className={classes.tab} {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ChatListConversations />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ChatListConversations />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ChatListConversations />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ChatListConversations />
            </TabPanel>
        </div>
    );
}
