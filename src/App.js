import React from 'react';
import {connect} from "react-redux";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature} from "./actions/actions";

const App = (props) => {
  const state = props;

  const removeFeature = item => {
    props.removeFeature(item);
  };

  const addFeature = item => {
    props.addFeature(item);
  };


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateIntoProps = (state) => {
  console.log(state);
  return {
    car: state.car,
    additionalFeatures: state.AdditionalFeatures,
    additionalPrice: state.additionalPrice,
    price: state.price
    };
};

export default connect(mapStateIntoProps, {removeFeature, addFeature})(App);
