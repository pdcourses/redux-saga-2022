import React from 'react';
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux';
import {createUser} from '../../actions';

const UserCreatedForm = (props) => {
  const {createUserAction} = props;
  const initialValues = {
    login: '',
    email: ''
  };
  const submitHandler = (values, formikBag) => {
    createUserAction(values);
    formikBag.resetForm();
  }
  return (
    <>
    <h2>Add new user</h2>
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {formikProps => {
            return(
                <Form>
                    <Field name="login" placeholder="login" />
                    <Field name="email" placeholder="email" />
                    <button type="submit">create new usere</button>
                </Form>
            )
        }}
    </Formik>
    </>
  )
}

const mapStateToProps = state => state.userReducer;

const mapDispatchToProps = dispatch => {
    return{
        createUserAction: data => {dispatch(createUser(data))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserCreatedForm);