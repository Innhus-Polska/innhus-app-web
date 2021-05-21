import React from 'react';
import { View } from 'react-native-web';
import CompanyContent from '../organisms/CompanyContent';
import FooterBlock from '../molecules/Footer';
import TopbarPromo from '../molecules/Topbar';
import MenuTopMain from '../molecules/Menu';
import FilterList from '../molecules/FilterList';
import BreadcrumbsProduct from '../atoms/BreadcrumbsProduct';
import AccordionProduct from '../atoms/AccordionProduct';
import AdvisorProduct from '../atoms/AdvisorProduct';
import AskAboutOffer from '../atoms/AskAboutOffer';

class PageCompany extends React.Component {
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
                    <div className="col-span-6">
                        <BreadcrumbsProduct />
                        <CompanyContent />
                    </div>
                    <div className="col-span-3">
                        <AskAboutOffer />
                    </div>
                </div>
                <FooterBlock />
            </View>
        );
    }
}

export default PageCompany;
