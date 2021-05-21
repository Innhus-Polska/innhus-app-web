import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import styles from '../../styles/styles.module.css';
import ProductOcassion from '../atoms/ProductOcassion';
import COMPANIES from '../../utils/data/Companies.json';
import { ReactComponent as IconHeart } from '../../assets/images/icons/heart.svg';

function CompaniesSearchFilter() {
    const [searchCompany, setSearchCompany] = useState('');
    return (
        <div className="w-100 py-3">
            <div className="flex flex-row my-5">
                <input
                    type="text"
                    placeholder="Szukaj wykonawcy"
                    className={styles.searchInput}
                    onChange={(event) => {
                        setSearchCompany(event.target.value);
                    }}
                />
            </div>
            <h3 className={styles.h3}>Producenci domów modułowych</h3>
            <div className={styles.filteringResults}>
                {COMPANIES.filter((val) => {
                    if (searchCompany == '') {
                        return val;
                    } else if (val.title.toLowerCase().includes(searchCompany.toLowerCase())) {
                        return val;
                    }
                }).map((COMPANIES, key) => {
                    return (
                        <div className="w-full py-2" key={key}>
                            <div className="w-full flex">
                                <a href={COMPANIES.link} className="flex">
                                    <div className="flex justify-left align-items-center" style={{ width: 124 }}>
                                        <img src={COMPANIES.image} className={styles.companyIcon} alt="" />
                                    </div>
                                    <div className={styles.searchResultCompanies}>
                                        <span className={styles.searchResultCompany}>{COMPANIES.name}</span>
                                        {'\n'}
                                        <span className={styles.searchResultCategory}>{COMPANIES.category}</span>
                                        {'\n'}
                                        <span className={styles.searchResultAddress}>{COMPANIES.address}</span>
                                    </div>
                                    <div className="ml-auto mr-0">
                                        <Button className={styles.btnProduct}>
                                            <IconHeart />
                                        </Button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CompaniesSearchFilter;
