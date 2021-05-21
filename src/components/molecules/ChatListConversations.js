import React from 'react';
import { View } from 'react-native-web';
import ChatListConversation from '../atoms/ChatListConversation';

class ChatListConversations extends React.Component {
    render() {
        return (
            <View>
                <ChatListConversation />
            </View>
        );
    }
}

export default ChatListConversations;
