
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


function SearchPage(props) {

  const router = useRouter()
  const { searchId } = router.query
    
  const [myData, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getMorePost()
  },[searchId]);

  const getMorePost = () => {
    searchId?
    props.actions
            .blogsBySearchGet(searchId)
            .then((todos) => {
                if (!todos.failed && !todos.pending) {
                    const newPosts = todos.data;
                    setData(newPosts);
                    setHasMore(false)
                }
            }) : ''
  };

  return (
    <div className="page-wrapper">
      <Meta
        pageTitle = {`Blogs Categories ${searchId?searchId:''}`}
      />


      <Header {...props}/>

        <main>
            <ToastContainer/>
            <MainBanner bannerTitle = {`Search: ${searchId}`} content = ""/>  
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
)(SearchPage);

