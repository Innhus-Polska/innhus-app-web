import React from 'react';
import Select, { components } from 'react-select';
import { View } from 'react-native-web';
import { Typography } from '@material-ui/core';
import styles from '../../styles/styles.module.css';
import chroma from 'chroma-js';
import { colourOptions } from '../../utils/data/colourOptions';
import { ReactComponent as MapIcon } from '../../assets/images/icons/map-marker-black.svg';
import { ReactComponent as ServiceIcon } from '../../assets/images/icons/service.svg';
import { ReactComponent as SortListIcon } from '../../assets/images/icons/sort-amount-dsc.svg';

const region = [
    { value: 'dol', label: 'dolnośląskie' },
    { value: 'kuj', label: 'kujawsko-pomorskie' },
    { value: 'lbl', label: 'lubelskie' },
    { value: 'lbl', label: 'lubuskie' },
    { value: 'lod', label: 'łódzkie' },
    { value: 'mal', label: 'małopolskie' },
    { value: 'maz', label: 'mazowieckie' },
    { value: 'opo', label: 'opolskie' },
    { value: 'pdk', label: 'podkarpackie' },
    { value: 'pdl', label: 'podlaskie' },
    { value: 'pom', label: 'pomorskie' },
    { value: 'slk', label: 'śląskie' },
    { value: 'skr', label: 'świętokrzyskie' },
    { value: 'war', label: 'warmińsko-mazurskie' },
    { value: 'wlk', label: 'wielkopolskie' },
    { value: 'zpm', label: 'zachodnio-pomorskie' },
];

const transactionType = [
    { value: 'buy', label: 'zakup' },
    { value: 'rent', label: 'wynajem' },
];

const transactionAdvanced = [
    { value: 'buy', label: 'zakup' },
    { value: 'rent', label: 'wynajem' },
];

const transactionRules = [
    { value: 'buy', label: 'zakup' },
    { value: 'rent', label: 'wynajem' },
];

export default class SearchInput extends React.Component {
    state = {
        selectedOption1: null,
        selectedOption2: null,
        selectedOption3: null,
        selectedOption4: null,
    };
    handleChange1 = (selectedOption1) => {
        this.setState({ selectedOption1 }, () => console.log('Wybrana opcja:', this.state.selectedOption1));
    };
    handleChange2 = (selectedOption2) => {
        this.setState({ selectedOption2 }, () => console.log('Wybrana opcja:', this.state.selectedOption2));
    };
    handleChange3 = (selectedOption3) => {
        this.setState({ selectedOption3 }, () => console.log('Wybrana opcja:', this.state.selectedOption3));
    };
    handleChange4 = (selectedOption4) => {
        this.setState({ selectedOption4 }, () => console.log('Wybrana opcja:', this.state.selectedOption4));
    };
    render() {
        const { selectedOption1, selectedOption2, selectedOption3, selectedOption4 } = this.state;
        return (
            <div className="inline-flex">
                <div className="grid-flow-col mr-5">
                    <h5 className={styles.labelSearchBox}>Lokalizacja</h5>
                    <div className="flex flex-row">
                        <MapIcon style={{ marginTop: 7, marginRight: 10 }} />
                        <Select
                            value={selectedOption1}
                            defaultValue={colourOptions[2]}
                            onChange={this.handleChange1}
                            options={region}
                            isMulti={true}
                            className="w-48 selectCategory"
                            placeholder={'Wybierz'}
                            menuColor="red"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 10,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#719599',
                                    primary: 'black',
                                    neutral0: '#EBEBEB',
                                    neutral20: 'white',
                                    neutral50: 'black',
                                },
                            })}
                        />
                    </div>
                </div>
                <div className="grid-flow-col mr-5">
                    <h5 className={styles.labelSearchBox}>Rodzaj transakcji</h5>
                    <div className="flex flex-row">
                        <ServiceIcon style={{ marginTop: 10, marginRight: 10 }} />
                        <Select
                            value={selectedOption2}
                            defaultValue={colourOptions[2]}
                            onChange={this.handleChange2}
                            options={transactionType}
                            isMulti={true}
                            className="w-48 selectCategory"
                            placeholder={'Wybierz'}
                            menuColor="red"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 10,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#719599',
                                    primary: 'black',
                                    neutral0: '#EBEBEB',
                                    neutral20: 'white',
                                    neutral50: 'black',
                                },
                            })}
                        />
                    </div>
                </div>
                <div className="grid-flow-col mr-5">
                    <h5 className={styles.labelSearchBox}>Typ transakcji</h5>
                    <div className="flex flex-row">
                        <ServiceIcon style={{ marginTop: 10, marginRight: 10 }} />
                        <Select
                            value={selectedOption3}
                            defaultValue={colourOptions[2]}
                            onChange={this.handleChange3}
                            options={transactionAdvanced}
                            isMulti={true}
                            className="w-48 selectCategory"
                            placeholder={'Wybierz'}
                            menuColor="red"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 10,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#719599',
                                    primary: 'black',
                                    neutral0: '#EBEBEB',
                                    neutral20: 'white',
                                    neutral50: 'black',
                                },
                            })}
                        />
                    </div>
                </div>
                <div className="grid-flow-col">
                    <h5 className={styles.labelSearchBox}>Kryteria</h5>
                    <div className="flex flex-row">
                        <SortListIcon style={{ marginTop: 12, marginRight: 10 }} />
                        <Select
                            value={selectedOption4}
                            defaultValue={colourOptions[2]}
                            onChange={this.handleChange4}
                            options={transactionRules}
                            isMulti={true}
                            className="w-48 selectCategory"
                            placeholder={'Wybierz'}
                            menuColor="red"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 10,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#719599',
                                    primary: 'black',
                                    neutral0: '#EBEBEB',
                                    neutral20: 'white',
                                    neutral50: 'black',
                                },
                            })}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
