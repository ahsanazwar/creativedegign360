import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {Container,Row,Col,Button} from 'react-bootstrap';
import { Form, Field } from 'react-final-form';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';

function BlogCategory(props) {

    const [myCategoryData, setCategoryData] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
    getCategories();

    });

    const getCategories = () => {
    props.actions
            .blogsCategoryGet()
            .then((todos) => {
                if (todos.data.length) {
                    // console.log(JSON.stringify(todos.data.slice(0,1)));
                    // setData(todos.data);

                    const newPosts = todos.data;
                    setCategoryData(newPosts);
                }
            });
    
    };  

    const dropDownClick = () => {
        setToggle(!toggle);
    }  

    const onSubmit = (value) => {
    }
    const validate = (values) => {
        const errors = {};
        
        if (!values.email) {
            errors.email = 'Insert Search';
        }

        return errors;
    }; 

    return(
    <>  
        <section className='blog-search-wrap'>
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="blog-search-section">
                                <div>
                                    <Form
                                        onSubmit={onSubmit}
                                        validate={validate}
                                        render={({ handleSubmit }) => (
                                            <form onSubmit={handleSubmit} className="subscribe-form" id="subscribe-form">
                                                
                                                <Field
                                                    name="search"
                                                    component="input"
                                                    placeholder="Search"
                                                >
                                                    {({ input, meta }) => (
                                                        <div>
                                                            {meta.touched && meta.error && (
                                                                <span className="field-error">{meta.error}</span>
                                                            )}
                                                            <div className="field-wrap">
                                                                <input
                                                                    type="search"
                                                                    value=''
                                                                    placeholder="Search"
                                                                    className="search-input"
                                                                    {...input}
                                                                />
                                                            </div>
                                                            {meta.touched && meta.error && (
                                                                <span className="field-error">This field is required.                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>  
                                                <Button className="btn-secondary" type="secondary" shape="round" htmlType="submit"><span>SEARCH</span></Button>
                                            </form>
                                        )}
                                    />
                                </div>
                                <div>
                                    <div className="category-dropdown" onClick={() =>{dropDownClick()}}>
                                        <Link href=""><a className="">Select Category</a></Link>
                                        <ul style={{ display: toggle ? 'block' : 'none' }}>
                                            {
                                                myCategoryData.map((category) => {
                                                    return(
                                                        <li key={category.id}><Link href={`/blogs/categories/${category.slug}`}><a className="">{category.title}</a></Link></li>
                                                    )
                                                })
                                             }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
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
)(BlogCategory);