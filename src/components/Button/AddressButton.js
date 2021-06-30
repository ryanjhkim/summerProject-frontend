import React from 'react';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);

function AddressButton() {
  return (
    <Space direction="vertical">
    <Search
      placeholder="Enther Your Address"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    
  </Space>
  );
}

export default AddressButton;