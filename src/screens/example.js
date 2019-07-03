import React, { Component } from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";

import client from "../utils/service";

class Example extends React.Component {
  onPress = async () => {
    const result = await client.get("todos");
    console.log({ result });
  };

  onNavigate = () => {
    this.props.navigation.navigate("StaticCounter");
  };

  render() {
    return (
      <View>
        <Button title=" test button" onPress={this.onPress} />
        <Button title=" navigasi " onPress={this.onNavigate} />
      </View>
    );
  }
}

export default connect()(Example);
