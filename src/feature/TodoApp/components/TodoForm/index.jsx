import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import InputField from "custom-field/InputField";
import { Button, Col, FormGroup, Row } from "reactstrap";
TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { initialValues, onSubmit } = props;
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => {
        const { value, errors, touched } = formikProps;
        console.log({ value, errors, touched });
        return (
          <Form>
            <Row>
              <Col md={6}>
                <FastField
                  name="title"
                  component={InputField}
                  label="Title:"
                  placeholder="Eg: Play game ..."
                />
              </Col>

              <Col md={6}>
                <FastField
                  name="description"
                  component={InputField}
                  label="Description:"
                  placeholder="Eg: Asphalt 8 ..."
                />
              </Col>
            </Row>

            <FormGroup>
              <Button color="primary">Add Todo</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default TodoForm;
