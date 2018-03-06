import React, { Component, PropTypes } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { connect } from 'react-redux'

import SearchResultsList from "./SearchResultsList";

const mapStateToProps = (state) => ({
  //fetch relevent redux state and pass into props here
  animateForward: state.main.animateForward,
  animateBack: state.main.animateBack,
})

class LocationSearchHeader extends Component {
  transitionInDuration = 500;
  transitionOutDuration = 700;
  handleSearchResults = (searchResults) => this.searchResults = searchResults;

  componentWillReceiveProps(nextProps) {
    if (nextProps.animateForward) {
      this.searchResults.transitionTo({
        top: 150,
      }, this.transitionInDuration)
    } else if (nextProps.animateBack) {
      this.searchResults.transitionTo({
        top: 700,
      }, this.transitionOutDuration)
    }
  }

  render() {
    const { recentLocations } = this.props
   
    return (
      <Animatable.View ref={this.handleSearchResults} style={styles.searchResults}>
        <SearchResultsList recentLocations={recentLocations}>
        </SearchResultsList>
      </Animatable.View>  
    )
  }
}

const styles = StyleSheet.create({
  searchResults: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 700,
    bottom: 0,
    zIndex: 1,
  }
})

export default connect(mapStateToProps)(LocationSearchHeader)
