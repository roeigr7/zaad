import React from "react";
import { Field, reduxForm} from "redux-form";
import TextArea from "./fields/TextArea";
import TextInput from "./fields/TextInput";
import { withRouter } from 'react-router-dom';
import { Button } from "../style/style";
import {composeValidators,hasLengthLessThan,combineValidators,isRequired} from 'revalidate'

const validate=combineValidators({
  name:
  composeValidators(
  isRequired({message: 'לא הוכנס שם'}),
  hasLengthLessThan(50)({message: 'מקסימום 50 תווים'})
  )(),
  content:
  composeValidators(
  isRequired({message: "חובה לרשום תוכן"}),
  hasLengthLessThan(400)({message: 'מקסימום 400 תווים'})
  )()
})

const ReviewForm = ({ cancel,handleSubmit, reset, addReview }) => {
  const handleCommentSubmit =async values => {
    await addReview(values);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleCommentSubmit)}>
      <Field ph='שם' name='name' type='text' component={TextInput}  />
      <Field ph='כתוב תוכן' name='content' type='text' component={TextArea} rows={3} />
      <Button success type='submit'>שלח תגובה</Button>
      <Button onClick={reset}>נקה הכל</Button>
      <Button cancel onClick={reset&&cancel}>בטל תגובה</Button>
    </form>
  );
};
export default withRouter(reduxForm({ form: "ReviewComment",validate })(ReviewForm));
