import { actions } from '../actions/product';

const getInitialState = () => {
    return {
        data: [
            {
                image: '../../assets/images/pexels-naim-benjelloun-2029665.jpg',
                title: 'Dom modułowy willa z basenem',
                category: 'Dom modułowy',
                from: 'od',
                fromPrice: ' 24 598',
                to: '',
                toPrice: '',
                currency: 'PLN',
                square: '62',
                squarePrice: '7.984,00',
                link: '',
                isAddedToWishlist: 'false',
                isRemovedFromWishlist: 'true',
            },
            {
                image: '../../assets/images/pexels-naim-benjelloun-2029665.jpg',
                title: 'Dom modułowy willa z basenem',
                category: 'Dom modułowy',
                from: 'od',
                fromPrice: ' 24 598',
                to: '',
                toPrice: '',
                currency: 'PLN',
                square: '62',
                squarePrice: '7.984,00',
                link: '',
                isAddedToWishlist: 'false',
                isRemovedFromWishlist: 'true',
            },
            {
                image: '../../assets/images/pexels-naim-benjelloun-2029665.jpg',
                title: 'Dom modułowy willa z basenem',
                category: 'Dom modułowy',
                from: 'od',
                fromPrice: ' 24 598',
                to: '',
                toPrice: '',
                currency: 'PLN',
                square: '62',
                squarePrice: '7.984,00',
                link: '',
                isAddedToWishlist: 'false',
                isRemovedFromWishlist: 'true',
            },
            {
                image: '../../assets/images/pexels-naim-benjelloun-2029665.jpg',
                title: 'Dom modułowy willa z basenem',
                category: 'Dom modułowy',
                from: 'od',
                fromPrice: ' 24 598',
                to: '',
                toPrice: '',
                currency: 'PLN',
                square: '62',
                squarePrice: '7.984,00',
                link: '',
                isAddedToWishlist: 'false',
                isRemovedFromWishlist: 'true',
            },
            {
                image: '../../assets/images/pexels-naim-benjelloun-2029665.jpg',
                title: 'Dom modułowy willa z basenem',
                category: 'Dom modułowy',
                from: 'od',
                fromPrice: ' 24 598',
                to: '',
                toPrice: '',
                currency: 'PLN',
                square: '62',
                squarePrice: '7.984,00',
                link: '',
                isAddedToWishlist: 'false',
                isRemovedFromWishlist: 'true',
            },
        ],
    };
};

const product = (state = getInitialState(), action) => {
    switch (action.type) {
        case actions.UPDATE_WISHLIST: {
            return {
                ...state,
                data: action.productList,
            };
        }

        default:
            return state;
    }
};

export default product;
