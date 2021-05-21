import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../molecules/Topbar';
import MenuTopMain from '../molecules/Menu';
import FilterList from '../molecules/FilterList';
import AccordionProduct from '../atoms/AccordionProduct';
import AdvisorProduct from '../atoms/AdvisorProduct';
import BreadcrumbsProduct from '../atoms/BreadcrumbsProduct';
import FooterBlock from '../molecules/Footer';
import MapDefaultMockup from '../molecules/MapDefaultMockup';
import CompaniesSearchFilter from '../molecules/CompaniesSearchFilter';
import styles from '../../styles/styles.module.css';
import ProductOcassion from '../atoms/ProductOcassion';
import PROPERTIES from '../../utils/data/Properties.json';

class PageCompanies extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <FilterList />
                <div className="grid grid-cols-12 grid-gap-0 container mx-auto mt-4">
                    <div className="col-span-3">
                        <AccordionProduct />
                        <AdvisorProduct />
                    </div>
                    <div className="col-span-5">
                        <BreadcrumbsProduct />
                        <CompaniesSearchFilter />
                    </div>
                    <div className="col-span-4">
                        <MapDefaultMockup className="w-full" />
                    </div>
                </div>
                <FooterBlock />
            </View>
        );
    }
}

export default PageCompanies;
