import React from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const AppFeature = () => {
    return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
            <div className="titleHolder">
               <h2>Feature title</h2> 
               <p>Feature content</p>
            </div>
            <Row gutter={[16, 16]}>
            <Col span={8}>
            <Card
                hoverable
       
                cover={<img alt="example" src="https://cdn.comparitech.com/wp-content/uploads/2018/03/server-room.jpg" />}
            >
                <Meta title="Backend" />
            </Card>
            </Col><Col span={8}>
            <Card
                hoverable
       
                cover={<img alt="example" src="https://cdn.comparitech.com/wp-content/uploads/2018/03/server-room.jpg" />}
            >
                <Meta title="Backend" />
            </Card>
            </Col>
            <Col span={8}>
            <Card
                hoverable
       
                cover={<img alt="example" src="https://cdn.comparitech.com/wp-content/uploads/2018/03/server-room.jpg" />}
            >
                <Meta title="Backend" />
            </Card>
            </Col>
            <Col span={8}>
            <Card
                hoverable
       
                cover={<img alt="example" src="https://cdn.comparitech.com/wp-content/uploads/2018/03/server-room.jpg" />}
            >
                <Meta title="Backend" />
            </Card>
            </Col>
            <Col span={8}>
            <Card
                hoverable
       
                cover={<img alt="example" src="https://cdn.comparitech.com/wp-content/uploads/2018/03/server-room.jpg" />}
            >
                <Meta title="Backend" />
            </Card>
            </Col>
            <Col span={8}>
            <Card
                hoverable
       
                cover={<img alt="example" src="https://cdn.comparitech.com/wp-content/uploads/2018/03/server-room.jpg" />}
            >
                <Meta title="Backend" />
            </Card>
            </Col>
            </Row>
           
            </div>
        </div>
    );
}

export default AppFeature;
