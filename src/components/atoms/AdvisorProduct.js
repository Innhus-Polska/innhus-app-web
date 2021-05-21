import React from 'react';
import { View } from 'react-native-web';
import styles from '../../styles/styles.module.css';
import imageOne from '../../assets/images/pexels-andrea-piacquadio-919436.jpg';

class AdvisorProduct extends React.Component {
    render() {
        return (
            <View>
                <div className="flex flex-col my-5 w-56 items-center">
                    <img src={imageOne} className={styles.loginAvatarImg} alt="" />
                    <div className={styles.advisorBox}>
                        <h3 className={styles.h3}>Aneta Kowalska</h3>
                        <p className={styles.h5}>Doradca ds. kluczowych Klientów</p>
                        <div className="my-5">
                            <a href="tel:+48123456789" className={styles.advisorBtn}>
                                Zapytaj o ofertę
                            </a>
                        </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default AdvisorProduct;
