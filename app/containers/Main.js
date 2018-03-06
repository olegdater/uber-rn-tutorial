import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import Reactotron from 'reactotron-react-native'


import {
  LocationButtonGroup,
  LocationSearchHeader,
  LocationSearchResults,
  SearchResultsList,
  NavigationIcon,
  UberMapView,
} from '../components'

const mapStateToProps = (state) => ({
  recentLocations: state.main.recentLocations,
  shortcutLocations: state.main.recentLocations.slice(0, 3),
  animationState: state.main.animationState
})

class Main extends Component {

  render() {
    const {recentLocations, shortcutLocations} = this.props

    return (
      <View style={styles.mainContainer}>
        <UberMapView />
        <View style={styles.searchHeader}>
          <LocationSearchHeader placeholder='Where to?' ></LocationSearchHeader>
        </View>
          <LocationSearchResults recentLocations={recentLocations}>
          </LocationSearchResults>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'gray',
    opacity: 1,
    alignSelf: 'stretch',
    flex: 1,
  },
  searchHeader: {
    top: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 2,
  },
})

export default (Reactotron.overlay(connect(mapStateToProps)(Main)));
