import { View } from 'react-native-web';
import Button from '@material-ui/core/Button';
import imageOne from '../../assets/images/pexels-curtis-adams-5178052.jpg';
import imageTwo from '../../assets/images/pexels-curtis-adams-5178080.jpg';
import imageThree from '../../assets/images/pexels-naim-benjelloun-2029665.jpg';
import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import styles from '../../styles/styles.module.css';
import { ReactComponent as OptionIcon } from '../../assets/images/icons/basketball.svg';
import { ReactComponent as ArrowDown } from '../../assets/images/icons/chevron-down.svg';
import CountUp from 'react-countup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import ProductOpinion from '../atoms/ProductOpinion';
import ProductOcassion from '../atoms/ProductOcassion';
import { ReactComponent as ArrowLeftGray } from '../../assets/images/icons/arrow-left-gray.svg';
import { ReactComponent as ArrowRightGray } from '../../assets/images/icons/arrow-right-gray.svg';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        backgroundColor: '#F2F2F2',
        borderRadius: 12,
        fontFamily: 'Poppins',
    },
    selectControl: {
        backgroundColor: '#F2F2F2',
        borderRadius: 12,
        fontFamily: 'Poppins',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const btn3dwalk = {
    backgroundColor: 'black',
    color: 'white',
    textTransform: 'unset',
    textAlign: 'center',
    borderRadius: 5,
    padding: '10px 10px 10px 10px',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.15)',
    marginTop: -205,
};

const dataProduct = {
    name: 'Dom modu??owy willa z basenem',
    from: 'od',
    to: '',
    price: '24 598',
    currency: 'PLN',
    square: '62',
    priceSquare: '7.984,00 ',
    option1: '152 m2 - 186 m2',
    option2: 'M??j producent',
    option3: 'od 7.984,00 z??/m2',
    option4: 'Model A',
    descriptionText:
        'Szeroki wyb??r metra??y od 32 m2 do 72 m2 pozwala na dopasowanie mieszkania do swoich potrzeb. W ofercie sprzeda??y znajduj?? si?? funkcjonalne mieszkania od 2 do 4 pokoi zaprojektowane z my??l?? zar??wno o tych szukaj??cych swojego pierwszego mieszkania jak i o rodzinach z dzie??mi, potrzebuj??cych wi??cej przestrzeni. Minimalizm i prostota, a przy tym funkcjonalno???? i wygoda to g????wne wyznaczniki projektu Skandinavia. Stylowe wyko??czenia z zastosowaniem paneli drewnianych, subtelnych grafik na ??cianach oraz du??ych luster odwzorowuj?? skandynawsk?? filozofi?? ??ycia stawiaj??c?? na komfort i jako????. Na terenie cz????ci wsp??lnych znajdzie si?? wiele udogodnie?? dla przysz??ych mieszka??c??w, edukacyjne place zabaw, strefa relaksu do dyspozycji mieszka??c??w, wiaty dla rower??w ze stacj?? napraw, budki l??gowe dla jerzyk??w, domki dla motyli.',
};

const pageContent = {
    descriptionTitle: 'Opis produktu',
    walk3d: 'Obejrzyj spacer 3D',
    opinionTitle: 'Zobacz opinie',
    opinionResumeLabel1: '??rednia ocena',
    opinionResumeLabel2: 'opinii',
    vendorTitle: 'O producencie',
    vendorText:
        'Ursus Factory 6 to kolejny etap inwestycji przy ul. Posag 7 Panien, realizowany w dynamicznie rozwijaj??cej si?? cz????ci Ursusa. Ta dawniej przemys??owa okolica od kilku lat zmienia sw??j charakter, przekszta??caj??c si?? w nowoczesn?? i przyjazn?? stref?? mieszkaln??. Obecnie dzielnica cieszy si?? ogromnym zainteresowaniem zar??wno w??r??d m??odych rodzin, jak i szukaj??cych komfortowego miejsca do ??ycia singli.',
    ocassionTitle: 'Zobacz specjalne okazje',
};

export default function ProductContent() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <View>
            <div className="w-100">
                <h3 className={styles.productTitle}>{dataProduct.name}</h3>
                <p className={styles.productSubtitle}>
                    {dataProduct.from} {dataProduct.price} {dataProduct.currency}
                </p>
                <p className={styles.productSubtitleUnder}>
                    {dataProduct.square} m<sup>2</sup> / {dataProduct.from} {dataProduct.priceSquare}
                    {dataProduct.currency}
                </p>
                <div className="grid grid-cols-12 grid-gap-0 mr-5">
                    <div className="col-span-12">
                        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={65} totalSlides={3}>
                            <div className="flex flex-row my-3">
                                <ButtonBack className={styles.btnSliderBack}>
                                    <ArrowLeftGray />
                                </ButtonBack>
                                <ButtonNext className={styles.btnSliderNext}>
                                    <ArrowRightGray />
                                </ButtonNext>
                            </div>
                            <Slider className={styles.carouselImages}>
                                <Slide index={0}>
                                    <img src={imageOne} className={styles.carouselImages} />
                                </Slide>
                                <Slide index={1}>
                                    <img src={imageTwo} className={styles.carouselImages} />
                                </Slide>
                                <Slide index={2}>
                                    <img src={imageThree} className={styles.carouselImages} />
                                </Slide>
                            </Slider>
                        </CarouselProvider>
                    </div>
                </div>
            </div>
            <div className="px-0 py-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:pt-5 lg:pb-2">
                <div className="grid grid-cols-2 gap-0 mt-0 mb-3">
                    <div className="flex flex-row items-center mb-2">
                        <OptionIcon className={styles.optionIcon} />
                        <p className={styles.productOptions}>{dataProduct.option1}</p>
                    </div>
                    <div className="flex flex-row items-center mb-2">
                        <OptionIcon className={styles.optionIcon} />
                        <p className={styles.productOptions}>{dataProduct.option2}</p>
                    </div>
                    <div className="flex flex-row items-center mb-2">
                        <OptionIcon className={styles.optionIcon} />
                        <p className={styles.productOptions}>{dataProduct.option3}</p>
                    </div>
                    <div className="flex flex-row items-center mb-2">
                        <OptionIcon className={styles.optionIcon} />
                        <p className={styles.productOptions}>{dataProduct.option4}</p>
                    </div>
                </div>
            </div>
            <div className={styles.productDescription}>
                <h4 className={styles.productTitle}>{pageContent.descriptionTitle}</h4>
                <p className={styles.productText}>{dataProduct.descriptionText}</p>
            </div>
            <div className="w-100 text-center">
                <img src={imageOne} className={styles.walk3d} alt="" />
                <Button style={btn3dwalk}>{pageContent.walk3d}</Button>
            </div>
            <div className="w-100 px-3">
                <h4 className={styles.productTitle}>{pageContent.opinionTitle}</h4>
                <div className="col-span-12">
                    <ProductOpinion />
                    <ProductOpinion />
                    <ProductOpinion />
                </div>
            </div>
            <div className={styles.productDescription}>
                <h4 className={styles.productTitle}>{pageContent.vendorTitle}</h4>
                <p className={styles.productText}>{pageContent.vendorText}</p>
                <div className="my-5">
                    <a href="/" className={styles.advisorBtn}>
                        Zobacz wi??cej
                    </a>
                </div>
            </div>
            <div className="w-100 mt-5">
                <h4 className={styles.productTitle}>{pageContent.ocassionTitle}</h4>
                <div className="grid grid-cols-12 grid-gap-0">
                    <div className="col-span-4">
                        <ProductOcassion />
                    </div>
                    <div className="col-span-4">
                        <ProductOcassion />
                    </div>
                    <div className="col-span-4">
                        <ProductOcassion />
                    </div>
                </div>
                <div className="my-5">
                    <a href="/" className={styles.advisorBtn}>
                        Zobacz wi??cej
                    </a>
                </div>
            </div>
        </View>
    );
}
