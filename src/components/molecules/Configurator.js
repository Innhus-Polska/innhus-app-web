import { View } from 'react-native-web';
import React, { Component } from 'react';
import styles from '../../styles/styles.module.css';
import PageConfig1 from '../pages/configurator/PageConfig1';
import PageConfig2 from '../pages/configurator/PageConfig2';
import PageConfig3 from '../pages/configurator/PageConfig3';
import PageConfig4 from '../pages/configurator/PageConfig4';

const aboutContent = {
    btn: 'Zobacz więcej',
    title1: 'Domy modułowe',
    desc1:
        'Budynki modułowe – powstają z gotowych, wcześniej przygotowanych prefabrykatów przestrzennych. Konstrukcja tego typu obiektu pozwala na szybkie połączenie ze sobą od kilku do kilkudziesięciu modułów. Połączenia mogą być także pionowe tworząc w ten sposób wielopiętrowe obiekty budowlane. ',
};

export default class Configurator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, username, password } = this.state;
        alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`);
    };

    _next = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep,
        });
    };

    _prev = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep,
        });
    };

    /*
     * the functions for our button
     */
    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button onClick={this._prev} className={styles.topBtnConfig} type="button">
                    Wróć
                </button>
            );
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 4) {
            return (
                <button onClick={this._next} className={styles.topBtnConfig} type="button">
                    Przejdź dalej
                </button>
            );
        }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                <div className={styles.configurator}>
                    <div className="container mx-auto my-5 px-10">
                        <h2 className={styles.h2} style={{ paddingTop: 15, paddingBottom: 10 }}>
                            Wybierz swoje ulubione cztery kąty
                        </h2>
                        <h3 className={styles.h3}>Krok {this.state.currentStep} </h3>

                        <form onSubmit={this.handleSubmit}>
                            <Step1 currentStep={this.state.currentStep} handleChange={this.handleChange} />
                            <Step2 currentStep={this.state.currentStep} handleChange={this.handleChange} />
                            <Step3 currentStep={this.state.currentStep} handleChange={this.handleChange} />
                            <Step4 currentStep={this.state.currentStep} handleChange={this.handleChange} />
                            <div className="grid grid-cols-12 grid-gap-0">
                                <div className="col-span-6 text-left">{this.previousButton()}</div>
                                <div className="col-span-6 text-right">{this.nextButton()}</div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function Step1(props) {
    if (props.currentStep !== 1) {
        return null;
    }
    return (
        <div className="grid grid-cols-12 grid-gap-0 px-0">
            <div className="col-span-8">
                <PageConfig1 />
            </div>
            <div className="col-span-4">
                <div className={styles.configAboutSection}>
                    <h5>{aboutContent.title1}</h5>
                    <p>{aboutContent.desc1}</p>
                    <button type="button">{aboutContent.btn}</button>
                </div>
            </div>
        </div>
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null;
    }
    return (
        <div className="grid grid-cols-12 grid-gap-0 px-0">
            <div className="col-span-8">
                <PageConfig2 />
            </div>
            <div className="col-span-4">
                <div className={styles.configAboutSection}>
                    <h5>{aboutContent.title1}</h5>
                    <p>{aboutContent.desc1}</p>
                    <button type="button">{aboutContent.btn}</button>
                </div>
            </div>
        </div>
    );
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null;
    }
    return (
        <div className="grid grid-cols-12 grid-gap-0 px-0">
            <div className="col-span-8">
                <PageConfig3 />
            </div>
            <div className="col-span-4">
                <div className={styles.configAboutSection}>
                    <h5>{aboutContent.title1}</h5>
                    <p>{aboutContent.desc1}</p>
                    <button type="button">{aboutContent.btn}</button>
                </div>
            </div>
        </div>
    );
}

function Step4(props) {
    if (props.currentStep !== 4) {
        return null;
    }
    return (
        <div className="grid grid-cols-12 grid-gap-0 px-0">
            <div className="col-span-8">
                <PageConfig4 />
            </div>
            <div className="col-span-4">
                <div className={styles.configAboutSection}>
                    <h5>{aboutContent.title1}</h5>
                    <p>{aboutContent.desc1}</p>
                    <button type="button">{aboutContent.btn}</button>
                </div>
            </div>
        </div>
    );
}
