import React from 'react';
import ProductElement from './ProductElement';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from '../../styles/styles.module.css';
import PROPERTIES from '../../utils/data/Properties.json';

class ListProducts extends React.Component {
    renderItemDetails() {
        return (
            <ProductElement
                productList={this.props.productList}
                addListClick={this.addListClick.bind(this)}
                removeListClick={this.removeListClick.bind(this)}
            />
        );
    }

    addListClick() {
        this.props.history.push('/wishlist');
    }

    removeListClick() {
        this.props.history.push('/wishlist');
    }

    render() {
        const itemDetails = this.renderItemDetails();

        return (
            <div className="container">
                <hr />
                {itemDetails}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.product.data,
    };
};

export default withRouter(connect(mapStateToProps)(ListProducts));
