import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Product from './product'
import api from "../../api";
import ProductTabs from './alltab';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.svg'


const ProductSinglePage = (props) => {

    const { slug } = useParams();
    const dispatch = useDispatch();

    const products = api();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (!products?.length) return;

        const found = products.find((p) => p.slug === slug);

        setProduct(found || null);
    }, [slug]);

    const addToCartProduct = (item, qty = 1) => {
        dispatch(addToCart({ ...item, qty }));
    };

    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Product Single'} pagesub={'Product Single'} />
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {product && (
                        <Product item={product} addToCart={addToCartProduct} />
                    )}
                    <ProductTabs />
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ProductSinglePage;
