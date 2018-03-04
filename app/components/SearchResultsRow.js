import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import AssetMap from '../config/AssetMap'

export default class SearchResultsRow extends Component {

  render() {
    const { rowData } = this.props
    return (
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={AssetMap[rowData.icon]}
        />
        <View>
          <Text>{rowData.title}</Text>
          <Text>{rowData.subtitle}</Text>
        </View>
      </View>
    )
      }
    }
    
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'whitesmoke',
    padding: 5,
    alignItems: 'center',
  },
  icon: {
    width: 15,
    height: 15,
    margin: 10,
  }
})
