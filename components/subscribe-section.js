import { useState, useEffect } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import { Form, Field } from 'react-final-form';
import { toast } from 'react-toastify';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';



function SubscribeSection(props) {
    const [userIp, setUserIp] = useState('');
    const fetchData = async () => {
        return await fetch("https://api.ipify.org/?format=json")
              .then((response) => response.json())
              .then((data) => setUserIp(data));
      }
    
      useEffect(() => {
        fetchData();
      },[])

    const onSubmit = (value) => {

        const payload = {
            password: value.email,
            ip: userIp.ip,
        };
        props.actions.subscribe(payload)
        .then((todos) => {
            console.log(todos);
            if (!todos.failed && !todos.pending) {
                
                toast.success(todos.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored'
                    });
            } 
            else {
                toast.error(todos.error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored'
                }); 
            }
    })
}
    const validate = (values) => {
        const errors = {};
    
            // if (!values.pnumber) {
            //     errors.pnumber = 'Phone Number is required.';
            // }
        
        if (!values.email) {
            errors.email = 'Email is required.';
        }
    
    
        return errors;
    }; 

    return(

        

    <>  
        
        <section className="subscribe-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="subscribe-wrap">
                            <div>
                                <h3>JOIN OVER 3,000</h3>
                            </div>
                            <div>
                                <p>Subscribers who get fresh content to help their business weekly.</p>
                            </div>
                            <div>
                            <Form
                                        onSubmit={onSubmit}
                                        validate={validate}
                                        render={({ handleSubmit }) => (
                                            <form onSubmit={handleSubmit} className="subscribe-form" id="subscribe-form">
                                                
                                                <Field
                                                    name="email"
                                                    component="input"
                                                    placeholder="Enter Password"
                                                >
                                                    {({ input, meta }) => (
                                                        <div>
                                                            {meta.touched && meta.error && (
                                                                <span className="field-error">{meta.error}</span>
                                                            )}
                                                            <div className="field-wrap">
                                                                <input
                                                                    type="email"
                                                                    placeholder="Enter Email"
                                                                    value=''
                                                                    className="email-input"
                                                                    {...input}
                                                                />
                                                            </div>
                                                            {meta.touched && meta.error && (
                                                                <span className="field-error">This field is required.                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>  
                                                <Button className="submit-btn btn-secondary" type="secondary" shape="round" htmlType="submit"><span>SUBSCRIBE</span></Button>
                                            </form>
                                        )}
                                    />
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
)(SubscribeSection);