import React, { Component } from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";

import client from "../utils/service";

class Example extends React.Component {
  onPress = async () => {
    const result = await client.get("todos");
    console.log({ result });
  };

  render() {
    return (
      <View>
        <Button title=" test button" onPress={this.onPress} />
      </View>
    );
  }
}

export default connect()(Example);
