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
          <Text style={styles.title}>{rowData.title}</Text>
          <Text style={styles.subtitle}>{rowData.subtitle}</Text>
        </View>
      </View>
    )
      }
    }
    
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    padding: 5,
    alignItems: 'center',
  },
  icon: {
    width: 15,
    height: 15,
    margin: 15,
    opacity: 0.75,
  },
  title: {
    color: 'black',
  },
  subtitle: {
    color: 'darkgray',
    fontSize: 13,
  }
})
