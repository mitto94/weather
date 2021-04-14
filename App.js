import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords } = await Location.getCurrentPositionAsync()
      console.log(coords);
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("cnat's find you", "ssssaaaadd");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}