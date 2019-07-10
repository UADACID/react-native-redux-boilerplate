import React, { Component } from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";

import client from "../utils/service";

class Example extends React.Component {
  onPress = async () => {
    this.props.dispatch(this.action())
  };

  action = () => async (dispatch, getState) => {
    console.log({ dispatch, getState: getState() })
    const result = await client.get("todos");
    console.log(result)
    dispatch({ 'type': 'addTodo', payload: result.data })
    setTimeout(() => {
      dispatch({ 'type': 'getTodo', payload: result.data })
    }, 4000)
  }

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
