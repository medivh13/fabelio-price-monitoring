import React from 'react';
import useInputState from '../states/useInputState';
import { Form, FormControl, Button, Breadcrumb, Row, Col} from 'react-bootstrap';

function ProductForm() {
  const { value, handleSubmit, onChange } = useInputState('');

  return (
    <Form>
    <Breadcrumb>
      <Row>
        <Col>
        <Form inline onSubmit={handleSubmit}>
            <FormControl type="text" placeholder="Product Link Submission" className="mr-sm-2"
              value={value}
              onChange={onChange}
              required />
            <Button variant="primary" className="submit-button" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Breadcrumb>
    </Form>
  )
}

export default ProductForm;