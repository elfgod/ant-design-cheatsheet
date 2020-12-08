import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const AppWorks = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };  
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
        <div className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Subtitle is ready Subtitle is ready</p>
                </div>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={isModalVisible}                    
                    onCancel={handleCancel}
                    footer={null}
                >
                    <iframe width="100%" height="350"
                    src="https://www.youtube.com/embed/BMGixkvJ-6w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen"
                    ></iframe>

                </Modal>
            </div>
        </div>
    );
  }

export default AppWorks;

