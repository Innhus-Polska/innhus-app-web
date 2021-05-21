import React from 'react';
import { View } from 'react-native-web';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardFaq1 from '../molecules/CardFaq1';
import imageOne from '../../assets/images/pexels-curtis-adams-5178052.jpg';
import imageTwo from '../../assets/images/pexels-curtis-adams-5178080.jpg';
import imageThree from '../../assets/images/pexels-naim-benjelloun-2029665.jpg';
import styles from '../../styles/styles.module.css';

const faqContent = {
    title: 'Najczęściej zadawane pytania',
    header: 'Wiemy, że do podjęcia dobrej decyzji potrzeba rzetelnych informacji. Przychodzimy Ci z pomocą.',
    faqQuestion: 'W czym możemy Ci pomóc?',
    section1: 'Zakup nieruchomości',
    section1question1: 'Jak mogę wybrać swój dom modułowy?',
    section1answer1:
        'Ogromny blok, usytuowany przy alei Wojciecha Korfantego, powstał według projektu Mieczysława Króla. Przez kilka lat dzierżył palmę pierwszeństwa pod względem liczby mieszkańców. Budynek ciągnie się na długości 187,5 metra. Ma 15 kondygnacji nadziemnych i ukryte w podziemiu garaże na 200 samochodów. Posadowiony jest na żelbetowych filarach, co ma zapobiec niebezpiecznym skutkom podmuchów wiatru i wstrząsów tektonicznych.',
    section1question2: 'Co zrobić, by bezpiecznie dokonać zakupu?',
    section1answer2:
        'Ogromny blok, usytuowany przy alei Wojciecha Korfantego, powstał według projektu Mieczysława Króla. Przez kilka lat dzierżył palmę pierwszeństwa pod względem liczby mieszkańców. Budynek ciągnie się na długości 187,5 metra. Ma 15 kondygnacji nadziemnych i ukryte w podziemiu garaże na 200 samochodów. Posadowiony jest na żelbetowych filarach, co ma zapobiec niebezpiecznym skutkom podmuchów wiatru i wstrząsów tektonicznych.',
    section1question3: 'Dlaczego warto wybierać sprawdzonych dostawców i to właśnie im zaufać?',
    section1answer3:
        'Ogromny blok, usytuowany przy alei Wojciecha Korfantego, powstał według projektu Mieczysława Króla. Przez kilka lat dzierżył palmę pierwszeństwa pod względem liczby mieszkańców. Budynek ciągnie się na długości 187,5 metra. Ma 15 kondygnacji nadziemnych i ukryte w podziemiu garaże na 200 samochodów. Posadowiony jest na żelbetowych filarach, co ma zapobiec niebezpiecznym skutkom podmuchów wiatru i wstrząsów tektonicznych.',
    section1question4: 'Kiedy warto wybrać ofertę z niższą ceną?',
    section1answer4:
        'Ogromny blok, usytuowany przy alei Wojciecha Korfantego, powstał według projektu Mieczysława Króla. Przez kilka lat dzierżył palmę pierwszeństwa pod względem liczby mieszkańców. Budynek ciągnie się na długości 187,5 metra. Ma 15 kondygnacji nadziemnych i ukryte w podziemiu garaże na 200 samochodów. Posadowiony jest na żelbetowych filarach, co ma zapobiec niebezpiecznym skutkom podmuchów wiatru i wstrząsów tektonicznych.',
    section1question5: 'Jak mogę wybrać swój dom modułowy?',
    section1answer5:
        'Ogromny blok, usytuowany przy alei Wojciecha Korfantego, powstał według projektu Mieczysława Króla. Przez kilka lat dzierżył palmę pierwszeństwa pod względem liczby mieszkańców. Budynek ciągnie się na długości 187,5 metra. Ma 15 kondygnacji nadziemnych i ukryte w podziemiu garaże na 200 samochodów. Posadowiony jest na żelbetowych filarach, co ma zapobiec niebezpiecznym skutkom podmuchów wiatru i wstrząsów tektonicznych.',
    section2: 'Finansowanie zakupu',
    section3: 'Wyposażenie domu',
    section4: 'Wsparcie techniczne',
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    accordion: {
        width: '100%',
        textAlign: 'center',
        marginTop: 10,
    },
    accSum: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 480,
        borderRadius: 10,
        boxShadow: '0px 0px 15px rgba(0,0,0,0.15)',
        marginBottom: 15,
        margin: '0 auto',
    },
}));

export default function ContentFaq() {
    const classes = useStyles();
    return (
        <View>
            <div className="w-100 px-3 my-5 text-center">
                <h2 className={styles.sectionTitle}>{faqContent.title}</h2>
                <h5 className={styles.sectionHeader}>{faqContent.header}</h5>
                <br />
                <h4 className={styles.h3}>{faqContent.faqQuestion}</h4>
            </div>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.accSum}
                >
                    <img src={imageOne} className={styles.faqPhotoSection} alt={faqContent.section1} />
                    <h5 className={styles.sectionHeader}>{faqContent.section1}</h5>
                </AccordionSummary>
                <AccordionDetails>
                    <CardFaq1 />
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={classes.accSum}
                >
                    <img src={imageTwo} className={styles.faqPhotoSection} alt={faqContent.section2} />
                    <h5 className={styles.sectionHeader}>{faqContent.section2}</h5>
                </AccordionSummary>
                <AccordionDetails>
                    <CardFaq1 />
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    className={classes.accSum}
                >
                    <img src={imageThree} className={styles.faqPhotoSection} alt={faqContent.section3} />
                    <h5 className={styles.sectionHeader}>{faqContent.section3}</h5>
                </AccordionSummary>
                <AccordionDetails>
                    <CardFaq1 />
                </AccordionDetails>
            </Accordion>
        </View>
    );
}
