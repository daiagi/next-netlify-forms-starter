import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
  }
} = checkoutFormModel;


export default 
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`)

  });
