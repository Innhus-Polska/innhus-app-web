import React from 'react';
import { View } from 'react-native-web';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Checkbox from 'react-custom-checkbox';
import styles from '../../../styles/styles.module.css';
import imageOne from '../../../assets/images/pexels-curtis-adams-5178052.jpg';
import { Button } from '@material-ui/core';

const configContent3 = {
    header: 'Wybierz prefabrykaty domu, które najbardziej Ci się podobają.',
};

class PageConfig3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value1: { min: 17, max: 91 },
            value2: { min: 37, max: 105 },
        };
    }
    render() {
        return (
            <View>
                <div className="w-100">
                    <div className={styles.configExplain}>{configContent3.header}</div>
                    <div className="w-100 px-5 my-5">
                        <div className={styles.inputCheckboxCarouselLabel}>Materiały</div>
                        <div className={styles.inputCheckboxCarouselUnderLabel}>Krótki opis, co tu można znaleźć</div>
                    </div>
                    <Carousel itemWidth={'auto'} className="mb-2 ml-5">
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Kamień szlachetny"
                            />
                        </div>
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Drewnochron"
                            />
                        </div>
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Coś innego niż wszystko"
                            />
                        </div>
                    </Carousel>
                    <div className="w-100 px-5 mt-3 mb-5">
                        <div className={styles.inputCheckboxCarouselLabel}>Kolejna partia materiałów</div>
                        <div className={styles.inputCheckboxCarouselUnderLabel}>
                            Na tym nie koniec! Sprawdź kolejną partię materiałów do budowy.
                        </div>
                    </div>
                    <Carousel itemWidth={'auto'} className="mb-2 ml-5">
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Kamień szlachetny"
                            />
                        </div>
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Drewnochron"
                            />
                        </div>
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Coś innego niż wszystko"
                            />
                        </div>
                    </Carousel>
                    <div className="w-100 px-5 my-5">
                        <div className={styles.inputCheckboxCarouselLabel}>Materiały</div>
                        <div className={styles.inputCheckboxCarouselUnderLabel}>Krótki opis, co tu można znaleźć</div>
                    </div>
                    <Carousel itemWidth={'auto'} className="mb-2 ml-5">
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Kamień szlachetny"
                            />
                        </div>
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Drewnochron"
                            />
                        </div>
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Coś innego niż wszystko"
                            />
                        </div>
                    </Carousel>
                </div>
            </View>
        );
    }
}

export default PageConfig3;
