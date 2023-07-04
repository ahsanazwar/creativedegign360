
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '@actions/userActions';

import Meta from '@components/meta';
import Header from '@components/header';
import Footer from '@components/footer';
import MainBanner from '@components/main-banner';
import SubscribeSection from '@components/subscribe-section';
import BlogsSection from '@components/blogs-section';
import BlogCategory from '@components/blogCategory';


function CategoriesPage(props) {

  const router = useRouter()
  const { categoryId } = router.query
    
  const [myData, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getMorePost()
  },[categoryId]);

  const getMorePost = () => {
    categoryId?
    props.actions
            .blogsByCategoryGet(categoryId)
            .then((todos) => {
                if (!todos.failed && !todos.pending) {
                    const newPosts = todos.data.data;
                    setData(newPosts);
                    setHasMore(false)
                }
            }) : ''
    
  };

  return (
    <div className="page-wrapper">
      <Meta
        pageTitle = {`Blogs Categories ${categoryId?categoryId:''}`}
      />


      <Header {...props}/>

        <main>
            <ToastContainer/>
            <MainBanner bannerTitle = {`Category: ${categoryId}`} content = ""/>  
            <SubscribeSection/>       
            <BlogCategory/> 
            <BlogsSection
                getBlogs = {myData}
                getMore = {''}
                hasMore = {hasMore}
            />
        </main>
      
      <Footer/>
    </div>
  )
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({ ...userActions }, dispatch),
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPage);

