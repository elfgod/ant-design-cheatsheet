import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker, Button, Typography, Space, Input, Select, message } from 'antd';
//import { Input } from 'antd';
import 'antd/dist/antd.css';
// this is the icons library
import { PlusCircleFilled, CloseCircleTwoTone, SearchOutlined } from '@ant-design/icons';

import { UserOutlined } from '@ant-design/icons';

import { Row, Col, Divider } from 'antd';
import { Form, Checkbox, Layout, Menu} from 'antd';

const {Title, Text, Link, Paragraph} = Typography;
// const { Password } = Input;

function App() {

const { Password } = Input; // Password input

  // listener captures the input on realtime
  const [inputText, setInputText] = useState({
    input:''
  });

  const handleChange = e =>{
    const {name, value} = e.target;
    setInputText({...inputText,
    [name]: value
    });
    console.log(inputText);
  }

  const [edit, setEdit] = useState("Editable Text")
  
  // Select 02
  const eventOnFocus = () => {
    console.log("Event OnFocus");
  }
  const eventOnBlur = () => {
    console.log("Event OnBlur");
  }
  const eventOnCHange = (data) => {
    console.log("Event On Change" + data);
  }
  // Select 01
  const { Option } = Select;

  const selectStart = (
    <Select defaultValue="1">
      <Option value="1">http://</Option>
      <Option value="1">https://</Option>
    </Select>
  )
  const selectFinal = (
    <Select defaultValue="1">
      <Option value="1">.com</Option>
      <Option value="2">.net</Option>
      <Option value="3">.org</Option>
      <Option value="4">.edu</Option>
    </Select>
  );

  //  Menssage
  const messageSuccess = () => {
    message.success({
      content: "Message Success",
      className: "successMessage"})
  }
  const messageError = () => {
    message.error({
      content: "Message Error",
      duration: 10,
      className: "successMessage"});
  }
  const messageInfo = () => {
    message.info({
      content: "Message Info",
      className: "successMessage"});
  }
  const messageWarning = () => {
    message.warning({
      content: "Message Warning",
      className: "successMessage"});
  }
  const messageLoading = () => {
    message.loading({
      content: "Message Loading",
      className: "successMessage"})
  }
  // form Sucess and Failed component
  const formSuccess = (data) => {
    console.log("Form sended successfully", data);
  }
  const formFailed = (error) => {
    console.log("Error: ", error);
  }
  return (
    
    <div className="App">
    {/* CheatSheet */}
      <h2>###Form</h2>
      
      <div className="containerFirst">
      <div className="containerSecond">
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
      </div>
         
      <h2>###Grid Pixels</h2>
      <h3> Extra Small (xs) less than 576px<br /> Small (sm) more and equal 576px<br />Medium (md) more and equal 768px<br />Large (lg) more and equal 992px<br />Extra Large (xl) more and equal 1200px </h3>
      <h2>###Grid</h2>
      <Divider>2 columns (12 c/u)</Divider>  
      <Row>
      <Col xs={24} sm={12}><div  style={{ backgroundColor:'green', color: 'white'}}>xs24 - sm12</div></Col>
      <Col xs={24} sm={12}><div  style={{ backgroundColor:'green', color: 'white'}}>xs24 - sm12</div></Col> 
      </Row>
      <Divider>3 columns (8 c/u)</Divider>  
      <Row>
      <Col xs={24} sm={12} md={8}><div  style={{ backgroundColor:'green', color: 'white'}}>xs24 - sm12</div></Col>
      <Col xs={24} sm={12} md={8}><div  style={{ backgroundColor:'green', color: 'white'}}>xs24 - sm12</div></Col> 
      <Col xs={24} sm={12} md={8}><div  style={{ backgroundColor:'green', color: 'white'}}>xs24 - sm12</div></Col> 
      </Row>     
      <Divider>2 columns (6 c/u)</Divider>  
      <Row>
      <Col xs={12} sm={8} md={6} lg={4}><div  style={{ backgroundColor:'green', color: 'white'}}>responsive column</div></Col>
      <Col xs={12} sm={8} md={6} lg={4}><div  style={{ backgroundColor:'green', color: 'white'}}>responsive column</div></Col> 
      <Col xs={12} sm={8} md={6} lg={4}><div  style={{ backgroundColor:'green', color: 'white'}}>responsive column</div></Col> 
      <Col xs={12} sm={8} md={6} lg={4}><div  style={{ backgroundColor:'green', color: 'white'}}>responsive column</div></Col> 
      <Col xs={12} sm={8} md={6} lg={4}><div  style={{ backgroundColor:'green', color: 'white'}}>responsive column</div></Col> 
      <Col xs={12} sm={8} md={6} lg={4}><div  style={{ backgroundColor:'green', color: 'white'}}>responsive column</div></Col> 
      </Row>    
           
      <Divider> column 1 (24 c/u)</Divider>      
      <Row>
        <Col span={24} style={{ backgroundColor:'purple', color: 'white'}} >column</Col>
      </Row>
      <Divider> 2 columns (12 c/u)</Divider>
      <Row>
        <Col span={12} style={{ backgroundColor:'green', color: 'white'}} >column</Col>
        <Col span={12} style={{ backgroundColor:'green', color: 'white'}} >column</Col>
      </Row>
      <Divider> 3 columns (8 c/u)</Divider>
      <Row>
        <Col span={8} style={{ backgroundColor:'black', color: 'white'}} >column</Col>
        <Col span={8} style={{ backgroundColor:'black', color: 'white'}} >column</Col>
        <Col span={8} style={{ backgroundColor:'black', color: 'white'}} >column</Col>
      </Row>
      <Divider> 4 columns (6 c/u)</Divider>
      <Row>
        <Col span={6} style={{ backgroundColor:'yellow', color: 'black'}} >column</Col>
        <Col span={6} style={{ backgroundColor:'yellow', color: 'black'}} >column</Col>
        <Col span={6} style={{ backgroundColor:'yellow', color: 'black'}} >column</Col>
        <Col span={6} style={{ backgroundColor:'yellow', color: 'black'}} >column</Col>
      </Row>
      <br />   
      <h2>###Grid Gutter</h2>
      <Divider> column 1 (24 c/u)</Divider>
      <Row>
        <Col span={24} ><div style={{ backgroundColor:'purple', color: 'white'}}>column</div></Col>
      </Row>
      <Divider> 2 columns (12 c/u)</Divider>
      <Row gutter={[8, 8]}>
        <Col span={12} ><div  style={{ backgroundColor:'green', color: 'white'}}>column</div></Col>
        <Col span={12} ><div  style={{ backgroundColor:'green', color: 'white'}}>column</div></Col>
      </Row>
      <Divider> 3 columns (8 c/u)</Divider>
      <Row gutter={[16, 16]}>
        <Col span={8} ><div style={{ backgroundColor:'black', color: 'white'}}>column</div></Col>
        <Col span={8} ><div style={{ backgroundColor:'black', color: 'white'}}>column</div></Col>
        <Col span={8} ><div style={{ backgroundColor:'black', color: 'white'}}>column</div></Col>
      </Row>
      <Divider> 4 columns (6 c/u)</Divider>
      <Row gutter={[32, 32]}>
        <Col span={6}  ><div style={{ backgroundColor:'yellow', color: 'black'}}>column</div></Col>
        <Col span={6}  ><div style={{ backgroundColor:'yellow', color: 'black'}}>column</div></Col>
        <Col span={6}  ><div style={{ backgroundColor:'yellow', color: 'black'}}>column</div></Col>
        <Col span={6}  ><div style={{ backgroundColor:'yellow', color: 'black'}}>column</div></Col>
      </Row>
      <h2>###Grid Flex</h2>
      <Divider> 3 columns (8 c/u)</Divider>
      <Row gutter={[16, 16]}>
        <Col flex={2} ><div style={{ backgroundColor:'black', color: 'white'}}>2lex</div></Col>
        <Col flex={1} ><div style={{ backgroundColor:'black', color: 'white'}}>1flex</div></Col>
        <Col flex={3} ><div style={{ backgroundColor:'black', color: 'white'}}>3flex</div></Col>
      </Row>
      <Divider> 2 columns (1 of 200px and the other the rest of the row on auto)</Divider>
      <Row gutter={[8, 8]}>
        <Col flex="200px"><div style={{ backgroundColor:'yellow', color: 'black'}}>column</div></Col>        
        <Col flex="auto"><div style={{ backgroundColor:'yellow', color: 'black'}}>column</div></Col>
      </Row>
      <br />    
      <h2>###Menssage</h2>
      <Button onClick={messageSuccess}>Message Success</Button>
      {"    "}
      <Button onClick={messageError}>Message Error</Button>
      {"    "}
      <Button onClick={messageInfo}>Message Info</Button>
      {"    "}     
      <Button onClick={messageWarning}>Message Warning</Button>
      {"    "}
      <Button onClick={messageLoading}>Message Loading</Button>
      {"    "}
      <br />
      <h2>###Select 02</h2>
      <Select placeholder="Choose a Country" size="small"
      showSearch
      defaultValue={["1", "2"]}
      optionFilterProp="children"
      className="selectSearch"
      mode="multiple"
      onFocus={eventOnFocus}
      onBlur={eventOnBlur}
      onChange={eventOnCHange}
      >
        <Option value="1">Mexico</Option>
        <Option value="2">Colombia</Option>
        <Option value="3">Peru</Option>
        <Option value="4">Argentina</Option>
        <Option value="5">Ecuador</Option>
        <Option value="6">Bolivia</Option>
        <Option value="7">Chile</Option>
      </Select>
      <br /><br />
      <h2>###Input</h2>
      <Password placeholder="Password" bordered={false} minLength={4} maxLength={10} className="inpPurp"/><br /><br />
      <Input placeholder="my first onChange input" onChange={handleChange} name="input" /><br /><br />
     <Input placeholder="my first input small" size="small" prefix={<UserOutlined />}/><br /><br />
     <Input placeholder="my first input middle" prefix={<UserOutlined />}/><br /><br />
     <Input placeholder="my first input" size="large"prefix={<UserOutlined />}/><br /><br />   
     
    
     <Input defaultValue="Mi Sitio web" addonBefore={selectStart} addonAfter={selectFinal} />


     <br />
     <br />
     <DatePicker />     
     <br />
     <br />
     <h2>###Type of icons Outlined / Filled / Twi Tone</h2>
     <PlusCircleFilled style={{ fontSize: '30px', color: '#08c' }} />
     <PlusCircleFilled style={{ fontSize: '30px', color: '#08c' }} spin={true} />
     <PlusCircleFilled style={{ fontSize: '30px', color: '#08c' }} rotate={25} />
     <CloseCircleTwoTone style={{ fontSize: '25px'}} twoToneColor="#795DF5"  />
     <CloseCircleTwoTone style={{ fontSize: '25px'}} twoToneColor="#9492C4"  />
     <CloseCircleTwoTone style={{ fontSize: '25px'}} twoToneColor="#484697"  />
     <br />
     <br />
    <h2>###Type of Buttons Outlined / Filled / Twi Tone</h2>
    <Button type="primary">Primary</Button>
    <Button type="default">Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="text">Text</Button>
    <br />
    <br />
    <h2>Adicional properties of Buttons</h2>
    <Button danger type="primary" size="small" href="https://google.com" target="blank">Primary</Button>
    <Button ghost size="large" onClick={()=>alert("onClick event on the type default button")} >Primary</Button>
    <Button disable type="primary" size="middle">Primary</Button>
    <Button loading type="primary">Primary</Button>
    <Button style={{ color: '#795DF5'}}> Primary</Button>
    <br />
    <Button primary type="primary" size="large" icon={<SearchOutlined />} />
    <Button primary type="primary" size="large" icon={<SearchOutlined />} className="btnPurp" shape="circle" />
    <br />
    <br />
    <h2>###Typhography</h2>
    <h2>Title</h2>
    <Title>h1</Title>
    <Title level={2}>h2</Title>
    <Title level={3}>h3</Title>
    <Title level={4}>h4</Title>
    <Title level={5}>h5</Title>
    <h2>Text</h2>
    <Space direction="vertical">
    <Text>Default</Text>
    <Text type="secondary">Secondary</Text>
    <Text type="success">Success</Text>
    <Text type="warning">Warning</Text>
    <Text type="danger">Danger</Text>
    <Text disabled>Disabled</Text>
    <Text mark>Mark</Text>
    <Text code>Code</Text>
    <Text keyboard>Keyboard</Text>
    <Text underline>Underline</Text>
    <Text strong>Strong</Text>
    <Text delete>Delete</Text>
    <Text>Link</Text>
    <Link href="https://google.com">Google</Link>
    <Text>Paragraph</Text>
    <Paragraph>Lorem ipsum
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Wikipedia</Paragraph>
    <Paragraph copyable>Lorem ipsum</Paragraph>
    <Paragraph editable={{onChange: setEdit}}>{edit}</Paragraph>  
    </Space>
    <br />
    <br />
    

    </div>
  );
}

export default App;
