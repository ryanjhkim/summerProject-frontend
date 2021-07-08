import React from 'react';
import 'antd/dist/antd.css';

import GooglePlaces from '../MapAPI/GooglePlaces';
// import { Button, Tooltip } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';


function AddressButton() {
  return (
    <div>
    <GooglePlaces />
    </div>
  );
}

export default AddressButton;