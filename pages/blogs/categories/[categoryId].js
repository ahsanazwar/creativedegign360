
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
    getMorePost();

  });

  const getMorePost = () => {
    props.actions
            .blogsGet()
            .then((todos) => {
                if (todos.data.length) {
                    // console.log(JSON.stringify(todos.data.slice(0,1)));
                    // setData(todos.data);

                    const newPosts = todos.data;
                    setData(newPosts);
                }else{
                    setHasMore(false);
                }
            });
    
  };

  return (
    <div className="page-wrapper">
      <Meta
        pageTitle = {`Blogs Categories ${categoryId}`}
      />


      <Header {...props}/>

        <main>
            <ToastContainer/>
            <MainBanner bannerTitle = "Blogs" content = "News From Thrive And Around The World Of Web Design And Online Marketing."/>  
            <SubscribeSection/>       
            <BlogCategory/> 
            <BlogsSection
                getBlogs = {myData}
                getMore = {getMorePost()}
                hasMore = {hasMore}
            />
            <div>
                {categoryId}
            </div>
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

