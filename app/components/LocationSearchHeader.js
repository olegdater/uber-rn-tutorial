import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
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
      <View style={styles.navHeader}>
        <Image source={require('../images/icon-arrow-left.png')} style={styles.backButton}/>
      </View>
      <View style={styles.searchControl}>
        <View style={styles.searchControldecoration}>
          <View style={styles.circle}></View>
          <View style={styles.line}></View>
          <View style={styles.square2}></View>
        </View>
        <View style={styles.searchControlInputs}>
          <View style={styles.searchFrom}>
            <TextInput placeholder='Work' style={styles.textInputFrom}>
            </TextInput>
          </View>
          <View style={styles.searchTo}>
            <TextInput placeholder={placeholder} style={styles.textInputTo} onFocus={this.onFocus}>
            </TextInput>
          </View>
        </View>
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
  searchControl: {
    flex: 2,
    flexDirection: 'row',
  },
  searchControldecoration: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'auto',
    justifyContent: 'center',
  },
  searchControlInputs: {
    flex: 1,
    marginLeft: 10,
  },
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
    flex: 0.5,
  },
  navHeader: {
    flex: 0.3,
  },
  backButton: {
    opacity: 0.3,
    width: 25,
    height: 25,
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
    margin: 5,
  },
  square: {
    flex: 0,
    alignSelf: 'center',
    width: 10,
    height: 10,
    backgroundColor: 'black',
    margin: 10,
  },
  line: {
    flex: 0,
    alignSelf: 'center',
    width: 2,
    height: 50,
    backgroundColor: 'gray',
    margin: 0,
  },
  circle: {
    flex: 0,
    alignSelf: 'center',
    width: 10,
    height: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 5,
  }
})
