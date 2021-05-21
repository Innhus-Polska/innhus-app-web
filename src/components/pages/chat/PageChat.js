import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../../molecules/Topbar';
import MenuTopMain from '../../molecules/Menu';
import ChatInbox from '../../organisms/ChatInbox';
import PageChatRoom from './PageChatRoom';
import PageNewMessage from './PageNewMessage';

class PageChat extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <div className="grid grid-cols-12 grid-gap-0 container mx-auto">
                    <div className="col-span-3">
                        <ChatInbox />
                    </div>
                    <div className="col-span-6">
                        <PageChatRoom />
                    </div>
                    <div className="col-span-3">
                        <PageNewMessage />
                    </div>
                </div>
            </View>
        );
    }
}

export default PageChat;
