import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker, Button, Typography, Space, Input, Select, message } from 'antd';
//import { Input } from 'antd';
import 'antd/dist/antd.css';
// this is the icons library
import { PlusCircleFilled, CloseCircleTwoTone, SearchOutlined } from '@ant-design/icons';

import { UserOutlined } from '@ant-design/icons';

const {Title, Text, Link, Paragraph} = Typography;

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
    message.success("Message Success");
  }
  return (
    <div className="App">
      <br />      
      <h2>###Menssage</h2>
      <Button>Mensaje Success</Button>
      ("    ")
      <Button>Mensaje Error</Button>
      ("    ")
      <Button>Mensaje Info</Button>
      ("    ")
      <Button>Mensaje Warning</Button>
      ("    ")
      <Button>Mensaje Loading</Button>
      ("    ")
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
