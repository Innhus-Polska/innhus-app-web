import React from 'react';
import Select, { components } from 'react-select';
import Checkbox from 'react-custom-checkbox';
import styles from '../../styles/styles.module.css';
import { colourOptions } from '../../utils/data/colourOptions';
import InputRange from 'react-input-range';
import { ReactComponent as SearchIcon } from '../../assets/images/icons/search-icon.svg';

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

export default class FiltersOfferTop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: { min: 2, max: 10 },
        };
    }
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
            <div className="w-full bg-white" style={{ boxShadow: '0px 5px 15px rgba(0,0,0,0.15' }}>
                <div className="container mx-auto items-stretch px-5 py-2">
                    <div className="grid grid-cols-12 grid-gap-0 items-stretch mx-5 px-5">
                        <div className="col-span-2">
                            <div className="grid-flow-col mr-5 my-3">
                                <h3 className={styles.opinionUserName}>Lokalizacja</h3>
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
                        <div className="col-span-2">
                            <div className="grid-flow-col mr-5 my-3">
                                <h3 className={styles.opinionUserName}>Rodzaj transakcji</h3>
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
                        <div className="col-span-2">
                            <div className="grid-flow-col mr-5 my-3">
                                <h3 className={styles.opinionUserName}>Typ transakcji</h3>
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
                        <div className="col-span-4">
                            <div className="grid-flow-col w-100 my-3">
                                <h3 className={styles.opinionUserName}>Cena</h3>
                                <div className="w-100 pt-2">
                                    <InputRange
                                        maxValue={20}
                                        minValue={0}
                                        value={this.state.value}
                                        onChange={(value) => this.setState({ value })}
                                        // eslint-disable-next-line react-native/no-inline-styles
                                        style={{ width: 'calc(100% - 15px)' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 mx-5 my-5">
                            <button className={styles.btnSearchTopFilter}>
                                <SearchIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
