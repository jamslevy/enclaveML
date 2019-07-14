import React from 'react';
import { Layout, Row, Col } from 'antd'
import { Link } from "react-router-dom";


const Home = () => (
  <Layout.Content style={{marginTop:'50px'}}>
    <Row type="flex" justify="center" align="middle">
      <Col span={12}>
        <h1>enclaveML</h1>
      </Col>
      </Row>
      <br/>
      <Row type="flex" justify="center" align="middle">
      <Col span={12}>
        <p>enclaveML is an experimental framework for tokenized federated learning.</p>
        <p>It aims to accomplish the following goals:</p>
        <ul>
          <li>Allow the training of many types of machine learning models without requiring the transmission of private client-side data</li>
          <li>Track and tokenize the contributed delta from participating clients, facilitating a crypto-economic primitive around the decentralized training of machine learning models.
          </li>
        </ul>
        
      </Col>
    </Row>
  </Layout.Content>
);

export default Home;