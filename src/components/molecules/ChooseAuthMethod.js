import React from 'react';
import { View } from 'react-native-web';
import styles from '../../styles/styles.module.css';
import METHOD from '../../utils/data/LoginMethod.json';
import imageOne from '../../assets/images/pexels-andrea-piacquadio-919436.jpg';
import { ReactComponent as ArrowRight } from '../../assets/images/icons/chevron-right.svg';

export default function ChooseAuthMethod() {
    return (
        <div className="w-100 px-5 my-5">
            <div className="my-5 text-center">
                <h2 className={styles.h2}>Jak chcesz kontynuować?</h2>
            </div>
            {METHOD.map((METHOD, key) => {
                return (
                    <a href={METHOD.link}>
                        <div className={styles.loginMethod} key={key}>
                            <img src={imageOne} className={styles.loginMethodImg} alt="" />
                            <h3 className={styles.loginMethodHeader}>{METHOD.name}</h3>
                            <ArrowRight style={{ marginLeft: 'auto', marginRight: 10 }} />
                        </div>
                    </a>
                );
            })}
        </div>
    );
}
