import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        maxWidth: 500,
        fontFamily: 'Poppins',
        margin: '0 auto',
    },
    heading: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'Poppins',
        textAlign: 'left',
    },
    answer: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: 500,
        textAlign: 'left',
        lineHeight: '1.75em',
    },
}));

export default function CardFaq1() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography className={classes.heading}>{faqContent.section1question1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.answer}>{faqContent.section1answer1}</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>{faqContent.section1question2}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.answer}>{faqContent.section1answer2}</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                    <Typography className={classes.heading}>{faqContent.section1question3}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.answer}>{faqContent.section1answer3}</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                    <Typography className={classes.heading}>{faqContent.section1question4}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.answer}>{faqContent.section1answer4}</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                    <Typography className={classes.heading}>{faqContent.section1question5}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.answer}>{faqContent.section1answer5}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
