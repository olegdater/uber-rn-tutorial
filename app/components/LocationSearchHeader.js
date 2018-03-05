import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
  Keyboard,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { connect } from 'react-redux'
import { mainActionCreators } from '../redux'

const mapStateToProps = (state) => ({
  //fetch relevent redux state and pass into props here
  animateForward: state.main.animateForward,
  animateBack: state.main.animateBack,
})

class LocationSearchHeader extends Component {

  transitionInDuration = 500;
  transitionOutDuration = 200;
  handleSearchOneRef = (searchOneRef) => this.searchOneRef = searchOneRef;
  handleSearchTwoRef = ref => this.searchtwoRef = ref;
  handleWhereOneRef = ref => this.whereOneRef = ref;

  onFirstWherePressed = async () => {
    this.props.dispatch(mainActionCreators.animateForward());
  }

  onBackButtonPressed = () => {
    this.props.dispatch(mainActionCreators.animateBack());
  }

  animateForward = () => {
    this.searchOneRef.transitionTo({
      opacity: 0,
      zIndex: 1,
      left: 0,
      right: 0,
      paddingLeft: 15,
      top: 0,
      height: 150,
    }, this.transitionInDuration)
    this.whereOneRef.transitionTo({
      opacity: 0,
    }, this.transitionInDuration)

    this.searchtwoRef.transitionTo({
      opacity: 1,
      zIndex: 3,
    }, this.transitionInDuration)
    setTimeout(() => {
      this.refs.secondWhereInput.focus();
    }, this.transitionInDuration);
  }

  animateBack = () => {
    this.searchOneRef.transitionTo({
      opacity: 1,
      zIndex: 2,
      top: 100,
      height: 50,
      left: 20,
      right: 20,
      paddingLeft: 0,
    }, this.transitionOutDuration)
    this.searchtwoRef.transitionTo({
      opacity: 0, zIndex: 1
    }, this.transitionOutDuration)
    this.whereOneRef.transitionTo({
      opacity: 1,
    }, this.transitionOutDuration)
    Keyboard.dismiss();
    this.setState({
      firstState: true,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.animateForward) {
      this.animateForward();
    } else if (nextProps.animateBack) {
      this.animateBack();
    }
  }

  render() {
    const { placeholder } = this.props;
    return (
      <View>
        <Animatable.View ref={this.handleSearchOneRef} style={styles.searchBarFirst}>
          <TouchableOpacity style={styles.touchZone} onPress={this.onFirstWherePressed}>
            <View style={styles.square}></View>
            <Animatable.Text ref={this.handleWhereOneRef} style={styles.textWhereTo}>
                {placeholder}    
            </Animatable.Text>
          </TouchableOpacity>
        </Animatable.View>
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
    top: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    left: 20,
    right: 20,
    alignSelf: 'stretch',
    opacity: 1,
    zIndex: 4,
  },
  searchBarFirstView: {
    flex: 1,
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
    shadowColor: 'gray',
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    zIndex: 3,
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
    width: 25,
    height: 25,
    flex: 0.5,
    // borderWidth: 3,
  },
  backButton: {
    opacity: 0.5,
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
    marginTop: 10,
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
  },
  touchZone: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 10,
  }
})

export default connect(mapStateToProps)(LocationSearchHeader)
