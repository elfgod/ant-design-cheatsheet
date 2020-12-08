import React from 'react';
import { Carousel, Button } from 'antd';


const items = [
    {
        key: '1',
        title: 'title 1',
        content: 'content 1',
    },
    {
        key: '1',
        title: 'title 1',
        content: 'content 1',
    },
    {
        key: '1',
        title: 'title 1',
        content: 'content 1',
    },
]

const AppHero = () => {
    return (

        <div className="heroBlock">
        <Carousel>
        {items.map(item => {
            return (
             <div key={item.key} className="container-fluid">
             <div className="content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <div className="btnHolder">
              <Button type="primary" size="large">Learn more</Button>
              <Button type="secondary" size="middle">Watch a demo</Button>
              </div>
             </div>
             </div>
            );
        })}        
       </Carousel>
      </div>
    );
}

export default AppHero;