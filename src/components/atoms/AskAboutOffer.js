import React from 'react';
import { View } from 'react-native-web';
import styles from '../../styles/styles.module.css';
import { ReactComponent as UserGrayIcon } from '../../assets/images/icons/users-gray.svg';
import { ReactComponent as PhoneGrayIcon } from '../../assets/images/icons/phone-call-gray.svg';
import { ReactComponent as MailGrayIcon } from '../../assets/images/icons/mail-gray.svg';
import imageOne from '../../assets/images/pexels-andrea-piacquadio-919436.jpg';

const ask = {
    name: 'Wpisz swoje imię',
    phone: 'Wpisz swój numer telefonu',
    mail: 'Wpisz swój adres email',
    message: 'Chcę poznać więcej szczegółów na temat oferty. Czy moglibyśmy umówić się na kontakt telefoniczny?',
};

class AskAboutOffer extends React.Component {
    render() {
        return (
            <View>
                <div className="flex flex-col justify-center my-5 items-center">
                    <div className={styles.askAboutOfferBox}>
                        <h3 className={styles.h3}>Złóż zapytanie ofertowe</h3>
                        <div>
                            <span className={styles.askAboutOfferLabel}>Twoje imię</span>
                            <div className="flex flex-row">
                                <div className={styles.contactFormIconBlock}>
                                    <UserGrayIcon className={styles.contactFormIcon} />
                                </div>
                                <input className={styles.contactFormFieldBlock} type="text" placeholder={ask.name} />
                            </div>
                        </div>
                        <div class="mt-3">
                            <span className={styles.askAboutOfferLabel}>Twój nr telefonu</span>
                            <div className="flex flex-row">
                                <div className={styles.contactFormIconBlock}>
                                    <PhoneGrayIcon className={styles.contactFormIcon} />
                                </div>
                                <input className={styles.contactFormFieldBlock} type="number" placeholder={ask.phone} />
                            </div>
                        </div>
                        <div class="mt-3">
                            <span className={styles.askAboutOfferLabel}>Twój adres email</span>
                            <div className="flex flex-row">
                                <div className={styles.contactFormIconBlock}>
                                    <MailGrayIcon className={styles.contactFormIcon} />
                                </div>
                                <input className={styles.contactFormFieldBlock} type="text" placeholder={ask.mail} />
                            </div>
                        </div>
                        <div class="mt-3">
                            <span className={styles.askAboutOfferLabel}>Twoja wiadomość</span>
                            <textarea className={styles.contactFormAreaBlock}>{ask.message}</textarea>
                        </div>
                        <div className="mt-3">
                            <span className={styles.askAboutOfferLabel}>Zgadzam sie również na:</span>
                            <div className="flex flex-col">
                                <div className="flex flex-row mt-2">
                                    <input type="checkbox" class="form-checkbox mr-2" />
                                    <span className={styles.askAboutOfferLabel}>
                                        propozycji nowych mebli do nowego domu modułowego
                                    </span>
                                </div>
                                <div className="flex flex-row mt-2">
                                    <input type="checkbox" class="form-checkbox mr-2" />
                                    <span className={styles.askAboutOfferLabel}>
                                        propozycji korzystnego finansowania inwestycji
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <button className={styles.askAboutOfferBtnSend}>Zapytaj o ofertę</button>
                        </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default AskAboutOffer;
