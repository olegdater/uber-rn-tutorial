import React, { Component, PropTypes } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

import SearchResultsList from "./SearchResultsList";
export default class LocationSearchHeader extends Component {

  render() {
    const { recentLocations } = this.props
   
    return (
      <SearchResultsList recentLocations={recentLocations}>
      </SearchResultsList>
    )
  }
}

const styles = StyleSheet.create({

})
