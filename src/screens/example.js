import React, { Component } from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";

class Example extends React.Component {
  render() {
    return (
      <View>
        <Button title=" test button" />
      </View>
    );
  }
}

export default connect()(Example);
