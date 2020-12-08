import React, { useState } from 'react';

import { Col, Row, Form, Input, Checkbox, Layout, Menu} from 'antd';


const { Item } = Form;
const { Password } = Input; // Password input

const App = () => {

   // form Sucess and Failed component
  const formSuccess = (data) => {
    console.log("Form sended successfully", data);
  }
  const formFailed = (error) => {
    console.log("Error: ", error);
  }
    return (        
            
    <div>
    <br />
    <br />
      
      <Row>
            <Col xs={24} sm={12} md={8} lg={6}><div> X </div></Col>

            <Col xs={24} sm={24} md={8} lg={6}>
            <div>

            <Form name="formName" intialValues={{
          remember: true         
        }}
        onFinish={formSuccess}
        onFinishFailed={formFailed}>
          <Item label="User"
           name="username" 
           rules={[{
             required: true,
             message: "Please type your username"
           }
           ]}>
            <Input />
            </Item>

            <Item label="Password"
            name="password"
            rules={[{
              required: true,
              message: "Please type your password"
            }
            ]}>
            <Password />
            </Item>

            <Item name="remember" valuePropName="checked">
              <Checkbox>Remember user</Checkbox>
            </Item>
            <Item>
              <button type="primary" htmlType="submit">Log In</button>
            </Item>          
        </Form>
        </div>
        </Col>

            <Col xs={24} sm={12} md={8} lg={6}><div></div></Col>
        </Row>        
       
    </div>
    );
}

export default App
