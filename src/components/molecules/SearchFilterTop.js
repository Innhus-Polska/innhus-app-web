import React, { Component, useState } from 'react';
import FilterMobile from './FilterMobile';
import styles from '../../styles/styles.module.css';
import ProductOcassion from '../atoms/ProductOcassion';
import PROPERTIES from '../../utils/data/Properties.json';

function SearchFilterTop() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="w-100 px-5 py-3">
            <div className="flex flex-row">
                <input
                    type="text"
                    placeholder="Szukaj wśród projektów"
                    className={styles.searchInput}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <FilterMobile />
            </div>
            <div className={styles.filteringResults}>
                {PROPERTIES.filter((val) => {
                    if (searchTerm == '') {
                        return val;
                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map((PROPERTIES, key) => {
                    return (
                        <div className="w-100 py-2" key={key}>
                            <div className="w-100 flex">
                                <a href={PROPERTIES.link} className="flex">
                                    <div className="flex justify-left align-items-center" style={{ width: 64 }}>
                                        <img src={PROPERTIES.image} className={styles.propertyIcon} alt="" />
                                    </div>
                                    <span className={styles.searchResult}>{PROPERTIES.title}</span>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SearchFilterTop;
