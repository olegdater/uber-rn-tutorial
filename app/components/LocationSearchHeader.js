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
  Keyboard,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
export default class LocationSearchHeader extends Component {
  firstState = true;
  transitionDuration = 500;
  handleSearchOneRef = ref => this.searchOneRef = ref;
  handleSearchTwoRef = ref => this.searchtwoRef = ref;

  componentWillMount() {
    this.firstState = true;
  }

  onFocus = () => {
    console.log('Component touched');
    
    this.firstState = false;
    this.searchOneRef.transitionTo({
      opacity: 0,
      zIndex: 1,
      height: 150,
      top: 0,
      left: 0,
      right: 0,
    }, this.transitionDuration)
    this.searchtwoRef.transitionTo({ opacity: 1, zIndex: 2, }, this.transitionDuration)
    this.refs.secondWhereInput.focus(); 
    this.setState({
      firstState: false,
    })
  }

  onBackButtonPressed = () => {
    this.firstState = true;
    this.searchOneRef.transitionTo({
      opacity: 1,
      zIndex: 2,
      height: 50,
      top: 120,
      left: 20,
      right: 20,
    }, this.transitionDuration)
    this.searchtwoRef.transitionTo({ opacity: 0, zIndex: 1 }, this.transitionDuration)
    Keyboard.dismiss();
    this.setState({
      firstState: true,
    })
  }

  render() {
    // return this.firstState ? this.renderFirstState() : this.renderSecondState();
    const { placeholder } = this.props;
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.onFocus}>
          <Animatable.View ref={this.handleSearchOneRef} style={styles.searchBarFirst}>
          <View style={styles.square}></View>
            <Text style={styles.textWhereTo}>
              {placeholder}    
          </Text>
          </Animatable.View>
        </TouchableWithoutFeedback>
        <Animatable.View style={styles.searchBarSecond} ref={this.handleSearchTwoRef}>
        <View style={styles.header}>
        </View>
        <TouchableOpacity style={styles.navHeader} onPress={this.onBackButtonPressed}>
          <Image source={require('../images/icon-arrow-left.png')} style={styles.backButton} />
        </TouchableOpacity>
        <View style={styles.searchControl}>
          <View style={styles.searchControldecoration}>
            <View style={styles.circle}></View>
            <View style={styles.line}></View>
            <View style={styles.square2}></View>
          </View>
          <View style={styles.searchControlInputs}>
            <View style={styles.searchFrom}>
              <TextInput value='Work' style={styles.textInputFrom}>
              </TextInput>
            </View>
            <View style={styles.searchTo}>
                <TextInput ref='secondWhereInput' placeholder={placeholder} style={styles.textInputTo}>
              </TextInput>
            </View>
          </View>
        </View>
        </Animatable.View>
      </View>  
    );
  }
  
  renderFirstState = () => {
    const { placeholder } = this.props;
    return (<Animatable.View style={styles.searchBarFirst} transition="opacity">
      <View style={styles.square}></View>
      <TextInput placeholder={placeholder} style={styles.textInput} onFocus={this.onFocus}>
      </TextInput>
    </Animatable.View>);
  }

  renderSecondState = () => {
    const { placeholder } = this.props;
    return (
      <Animatable.View style={styles.searchBarSecond} transition="opacity">
      <View style={styles.header}>
      </View>
      <TouchableOpacity style={styles.navHeader} onPress={this.onBackButtonPressed}>
        <Image source={require('../images/icon-arrow-left.png')} style={styles.backButton} />
      </TouchableOpacity>
      <View style={styles.searchControl}>
        <View style={styles.searchControldecoration}>
          <View style={styles.circle}></View>
          <View style={styles.line}></View>
          <View style={styles.square2}></View>
        </View>
        <View style={styles.searchControlInputs}>
          <View style={styles.searchFrom}>
            <TextInput value='Work' style={styles.textInputFrom}>
            </TextInput>
          </View>
          <View style={styles.searchTo}>
            <TextInput placeholder={placeholder} style={styles.textInputTo} onFocus={this.onFocus}>
            </TextInput>
          </View>
        </View>
      </View>
    </Animatable.View>);
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
    top: 120,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
    left: 20,
    right: 20,
    alignSelf: 'stretch',
    opacity: 1,
    zIndex: 2,
  },
  searchBarSecond: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 5,
    alignSelf: 'stretch',
    opacity: 0,
    zIndex: 1,
  },
  searchFrom: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 25,
  },
  searchTo: {
    backgroundColor: 'white',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 25,
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
  textWhereTo: {
    flex: 1,
    fontSize: 20,
    alignSelf: 'center',
    color: 'gray',
  },
  textInputTo: {
    flex: 0.8,
    backgroundColor: 'lightgray',
    padding: 8,
    margin: 8,
  },
  textInputFrom: {
    flex: 0.8,
    backgroundColor: 'whitesmoke',
    padding: 8,
    margin: 8,
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
    height: 35,
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
