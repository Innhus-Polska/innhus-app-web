import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { View } from 'react-native-web';
import { ConsentBanner, ConsentBannerText } from '@bbc/psammead-consent-banner';
import { latin } from '@bbc/gel-foundations/scripts';
import styles from '../styles/styles.module.css';
import { Divider } from '@material-ui/core';

const Accept = (
    <button onClick={() => {}} type="button" className={styles.cookiesButton}>
        Akceptuję
    </button>
);

const Reject = (
    <a href="https://innhus.com" className={styles.cookiesReadMore}>
        Dowiedz się więcej
    </a>
);

const Title = <h2 className={styles.cookiesTitle}>Ta strona korzysta z plików cookies</h2>;

const Text = (
    <ConsentBannerText script={latin} className={styles.cookiesText}>
        Na naszej stronie internetowej używamy plików cookies (w tym w usługach amerykańskich). Niektóre z nich są
        niezbędne, inne pomagają nam poprawić komfort użytkowania. Te niekoniecznie potrzebne pliki cookie możesz
        zaakceptować, ustawiając je indywidualnie.
    </ConsentBannerText>
);

const props = {
    title: Title,
    text: Text,
    accept: Accept,
    reject: Reject,
    id: null,
    hidden: false,
    script: latin,
};

export default function CookiesPolicy() {
    return (
        <div className={styles.cookies}>
            <ConsentBanner {...props} className={styles.cookies} />
        </div>
    );
}
