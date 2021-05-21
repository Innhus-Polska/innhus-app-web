import React from 'react';
import { View } from 'react-native-web';
import ChatConvMenu from '../../molecules/ChatConvMenu';
import ChatRoomConv from '../../molecules/ChatRoomConv';

class PageChatRoom extends React.Component {
    render() {
        return (
            <View>
                <ChatConvMenu />
                <ChatRoomConv />
            </View>
        );
    }
}

export default PageChatRoom;
