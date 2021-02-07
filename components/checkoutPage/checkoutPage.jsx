import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import axios from 'axios';

import AddressForm from './forms/addressForm';


import validationSchema from './formModel/validationSchema';
import checkoutFormModel from './formModel/checkoutFormModel';
import formInitialValues from './formModel/formInitialValues';

import useStyles from './styles';


const { formId, formField } = checkoutFormModel;


export default function CheckoutPage() {
  const classes = useStyles();
  const [serverErrors, setServerErrors] = useState({});

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    const config = {
      method: 'post',
      url: 'http://localhost:3000/api/formtest',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify(values, null, 2)
    };

     axios(config).then((response) => {
       console.log(response);

      // Check if it's HTTP 400  error
      if (response.status === 200) {
      }
      // You can get response data (mostly the reason would be in it)
  
        setServerErrors({});
        


        

      
}).catch(error => {
      console.log(error.response);
  
      // Check if it's HTTP 400  error
      if (error.response.status === 400) {
      }
      // You can get response data (mostly the reason would be in it)
      if (error.response.data) {
        setServerErrors(error.response.data);
        


      }

    }).finally(() => {
      actions.setTouched({});
      actions.setSubmitting(false);
    });

 


  }

  function _handleSubmit(values, actions) {

      _submitForm(values, actions);

  }


  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>

      <React.Fragment>
 
          <Formik
            initialValues={formInitialValues}
            validationSchema={validationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                <AddressForm formField={formField} {...serverErrors} />

                <div className={classes.buttons}>

                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      <div className={classes.circularspinnercontainer}>
                      
                      {isSubmitting ? (
                      <CircularProgress
                        size={20}
                        className={classes.buttonProgress}
                      /> ) : 'Next'}

                      </div>

                   
                    </Button>

                  </div>
                </div>
              </Form>
            )}
          </Formik>
       
      </React.Fragment>
    </React.Fragment>
  );
}