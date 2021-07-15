import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Row, Col, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './GooglePlaces.module.css';

function GooglePlaces() {
    const [address, setAddress] = React.useState("");
  const [, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  // state ={
  //   size: 'large',};

  // handleSizeChange = e => {
  //   this.setState({size: e.target.value});
  // }
  
  // const {size} = this.state;

  return (
    <div>
      <Row> 
      <Col span={12}>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='moveBox'>
            

            <input size='50'{...getInputProps({ placeholder: "Enter your address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </Col>
      
        <Col span={1}>
      <Button type="primary" shape="round" icon={<SearchOutlined />} 
      size={'large'}>Search</Button>
      </Col>
      </Row>
    </div>
  );
}

export default GooglePlaces;