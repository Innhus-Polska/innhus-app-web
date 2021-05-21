import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { View } from 'react-native-web';
import NavigationBottom from './navigations/MenuBottom';
import PageHome from './components/pages/PageHome';
import PageProduct from './components/pages/PageProduct';
import PageBlog from './components/pages/PageBlog';
import PageBlogArticle from './components/pages/PageBlogArticle';
import PageCatalog from './components/pages/PageCatalog';
import PageChat from './components/pages/chat/PageChat';
import PageChatRoom from './components/pages/chat/PageChatRoom';
import PageNewMessage from './components/pages/chat/PageNewMessage';
import PageCompanies from './components/pages/PageCompanies';
import PageFaq from './components/pages/PageFaq';
import PageLanding from './components/pages/PageLanding';
import PageMap from './components/pages/PageMap';
import PageNotifications from './components/pages/PageNotifications';
import PageConfig1 from './components/pages/configurator/PageConfig1';
import PageConfig2 from './components/pages/configurator/PageConfig2';
import PageConfig3 from './components/pages/configurator/PageConfig3';
import PageConfig4 from './components/pages/configurator/PageConfig4';
import PageConfig5 from './components/pages/configurator/PageConfig5';
import PageConfig6 from './components/pages/configurator/PageConfig6';
import PageChoose from './components/pages/user/PageChoose';
import PageRegister from './components/pages/user/PageRegister';
import PageLogin from './components/pages/user/PageLogin';
import PageForgotPassword from './components/pages/user/PageForgotPassword';
import CookiesPolicy from './navigations/CookiesPolicy';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import BoardAdmin from './components/BoardAdmin';

import { logout } from './actions/auth';
import { clearMessage } from './actions/message';

import { history } from './helpers/history';
import PageWishlist from './components/pages/PageWishlist';
import PageCompany from './components/pages/PageCompany';

export default function App() {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes('ROLE_MODERATOR'));
            setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'));
        }
    }, [currentUser]);

    const logOut = () => {
        dispatch(logout());
    };
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={PageHome} />
                    <Route path="/product" component={PageProduct} />
                    <Route path="/catalog" component={PageCatalog} />
                    <Route path="/chat/inbox" component={PageChat} />
                    <Route path="/chat/room" component={PageChatRoom} />
                    <Route path="/chat/new" component={PageNewMessage} />
                    <Route path="/companies" component={PageCompanies} />
                    <Route path="/company" component={PageCompany} />
                    <Route path="/faq" component={PageFaq} />
                    <Route path="/blog/index" component={PageBlog} />
                    <Route path="/blog/article/" component={PageBlogArticle} />
                    <Route path="/landing" component={PageLanding} />
                    <Route path="/map" component={PageMap} />
                    <Route path="/notify" component={PageNotifications} />
                    <Route path="/config/1" component={PageConfig1} />
                    <Route path="/config/2" component={PageConfig2} />
                    <Route path="/config/3" component={PageConfig3} />
                    <Route path="/config/4" component={PageConfig4} />
                    <Route path="/config/5" component={PageConfig5} />
                    <Route path="/config/6" component={PageConfig6} />
                    <Route path="/choose" component={PageChoose} />
                    <Route path="/register" component={PageRegister} />
                    <Route path="/login" component={PageLogin} />
                    <Route path="/login/remindpass" component={PageForgotPassword} />
                    <Route exact path="/profile" component={Profile} />
                    <Route path="/user" component={BoardUser} />
                    <Route path="/mod" component={BoardModerator} />
                    <Route path="/admin" component={BoardAdmin} />
                    <Route path="/wishlist" component={PageWishlist} />
                </Switch>
                {/* <CookiesPolicy /> */}
            </div>
        </Router>
    );
}
