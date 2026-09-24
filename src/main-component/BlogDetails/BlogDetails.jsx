import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import PageTitle from '../../components/pagetitle/PageTitle.jsx'
import Scrollbar from '../../components/scrollbar/scrollbar.jsx'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs.js'
import BlogSingle from '../../components/BlogDetails/BlogSingle.jsx'
import Footer from '../../components/footer/Footer.jsx';
import Logo from '../../images/logo-2.svg'

const BlogDetails = () => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <BlogSingle />
            <Footer ftClass={'s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;
