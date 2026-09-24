import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import PageTitle from '../../components/pagetitle/PageTitle.jsx'
import BlogSingle from '../../components/BlogDetails/BlogSingle.jsx'
import Scrollbar from '../../components/scrollbar/scrollbar.jsx'
import Footer from '../../components/footer/Footer.jsx';
import Logo from '../../images/logo.svg'
const BlogDetailsFull =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogSingle blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsFull;