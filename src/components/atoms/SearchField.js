import React, { Component, useState } from 'react';
import styles from '../../styles/styles.module.css';
import { ReactComponent as SearchIcon } from '../../assets/images/icons/surface1.svg';
import { ReactComponent as SortListIcon } from '../../assets/images/icons/sort-amount-dsc.svg';

export default function SearchField() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>
            <h5 className={styles.labelSearchBox}>Wyszukaj po nazwie</h5>
            <div className="flex flex-row mb-3">
                <SortListIcon style={{ marginTop: 15, marginRight: 10 }} />
                <input
                    type="text"
                    placeholder="Szukaj wśród projektów"
                    className={styles.searchInput}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <SearchIcon className={styles.btnSearching} />
            </div>
        </div>
    );
}
