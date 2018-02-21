import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class LocationSearchHeader extends Component {
  firstState = false;

  componentWillMount()
  {
    this.firstState = false;
  }

  onFocus = () => {
    this.firstState = false;
    this.setState({
      firstState: false,
    })
  }

  render() {
    //return this.firstState ? this.renderFirstState() : this.renderSecondState();
    const { placeholder } = this.props;
    return (<TouchableOpacity style={styles.searchBarSecond}>
      <View style={styles.header}>
      </View>
      <View style={styles.searchFrom}>
        <View style={styles.circle}></View>
        <TextInput placeholder='Work' style={styles.textInputFrom}>
        </TextInput>
      </View>
      <View style={styles.searchTo}>
        <View style={styles.square2}></View>
        <TextInput placeholder={placeholder} style={styles.textInputTo} onFocus={this.onFocus}>
        </TextInput>
      </View>
    </TouchableOpacity>);
    }
  
  renderFirstState = () => {
    const { placeholder } = this.props;
    return ( <TouchableOpacity style={styles.searchBarFirst}>
      <View style={styles.square}></View>
      <TextInput placeholder={placeholder} style={styles.textInput} onFocus={this.onFocus}>
      </TextInput>
    </TouchableOpacity> );
  }

  renderSecondState = () => {
    const { placeholder } = this.props;
    return (<TouchableOpacity style={styles.searchBarSecond}>
      <View style={styles.square2}></View>
      <TextInput placeholder={placeholder} style={styles.textInput} onFocus={this.onFocus}>
      </TextInput>
    </TouchableOpacity>);
  }
}

const styles = StyleSheet.create({
  searchBarFirst: {
    position: 'absolute',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
    top: 120,
    left: 20,
    right: 20,
    alignSelf: 'stretch',
  },
  searchBarSecond: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 20,
    alignSelf: 'stretch',
  },
  searchFrom: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 30,
  },
  searchTo: {
    backgroundColor: 'white',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 30,
  },
  header: {
    flex: 1,
  },
  textInput: {
    flex: 1,
  },
  textInputTo: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 10,
  },
  textInputFrom: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    padding: 10,
    margin: 10,
  },
  square2: {
    flex: 0,
    alignSelf: 'center',
    width: 10,
    height: 10,
    backgroundColor: 'black',
    margin: 10,
  },
  square: {
    flex: 0,
    alignSelf: 'center',
    width: 10,
    height: 10,
    backgroundColor: 'black',
    margin: 10,
  },
  circle: {
    flex: 0,
    alignSelf: 'center',
    width: 10,
    height: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 10,
  }
})
