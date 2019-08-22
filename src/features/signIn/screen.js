import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";

import styles from "./style";

const SignIn = props => {
  const { onRequest, onRequestFailed, onRequestSuccess, doSignIn } = props;
  const [loading, setLoading] = useState(onRequest);

  useEffect(() => {
    if (onRequest) {
      setLoading(onRequest);
    } else {
      setLoading(false);
    }

    if (onRequestFailed) {
      Alert.alert("login failed");
    }

    if (onRequestSuccess) {
      Alert.alert("login berhasil");
    }
  }, [onRequest, onRequestFailed, onRequestSuccess]);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator />}
      <Text onPress={doSignIn}>Tekan tombol ini</Text>
    </View>
  );
};

export default SignIn;
