import React from 'react'
import { Row, Col} from 'antd';

const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'title',
        content: 'content 1',
    },
    {
        key: '2',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'title',
        content: 'content 1',
    },
    {
        key: '3',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'title',
        content: 'content 1',
    },
]

const AppAbout = () => {
    return (
       <div className="block aboutBlock">
           <div className="container-fluid">
            <div className="titleHolder">
             <h2>About Us</h2>   
             <p>Subbtitle</p>
            </div>
            <div className="contentHolder">
                <p>Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content</p>
            </div>
            <Row gutter={[16, 16]}>
            {items.map(item =>{
                return (
                <Col span={8}>
                    <div className="content">
                        <div className="icon">
                        {item.icon}
                        </div>                    
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                </Col>
                );
            })}
            </Row>            
           </div>
       </div>
    );
}

export default AppAbout;
