import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import {
  LocationButtonGroup,
  LocationSearchHeader,
  LocationSearchResults,
  SearchResultsList,
  NavigationIcon,
} from '../components'

const mapStateToProps = (state) => ({
  recentLocations: state.recentLocations,
  shortcutLocations: state.recentLocations.slice(0, 3),
})

class Main extends Component {

  render() {
    const {recentLocations, shortcutLocations} = this.props

    return (
      <View>
        <Text style={{ 'marginTop': 40 }}> App Started </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps)(Main)
