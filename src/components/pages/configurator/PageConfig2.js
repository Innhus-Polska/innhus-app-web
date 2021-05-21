import React from 'react';
import { View } from 'react-native-web';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Checkbox from 'react-custom-checkbox';
import Link from '@material-ui/core/Link';
import styles from '../../../styles/styles.module.css';
import imageOne from '../../../assets/images/pexels-curtis-adams-5178052.jpg';
import imageTwo from '../../../assets/images/pexels-curtis-adams-5178080.jpg';
import imageThree from '../../../assets/images/pexels-naim-benjelloun-2029665.jpg';
import defaultHome1 from '../../../assets/images/default-home-1.png';
import defaultHome2 from '../../../assets/images/default-home-2.png';
import { Button } from '@material-ui/core';
import InputRange from 'react-input-range';

const configContent1 = {
    header: 'Wybierz powierzchnię domu, który najbardziej Ci się podoba.',
};

class PageConfig2 extends React.Component {
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
                    <div className={styles.configExplain}>{configContent1.header}</div>
                    <div className="w-100 px-5 my-5">
                        <div className={styles.inputRangeLabel}>Wnętrze domu</div>
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={this.state.value1}
                            onChange={(value1) => this.setState({ value1 })}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="w-100 px-5 my-5">
                        <div className={styles.inputRangeLabel}>Balkon i taras</div>
                        <InputRange
                            maxValue={200}
                            minValue={0}
                            value={this.state.value2}
                            onChange={(value2) => this.setState({ value2 })}
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
            </View>
        );
    }
}

export default PageConfig2;
