import React, { Component } from 'react'
import { ListView, View, Text, StyleSheet } from 'react-native'

import SearchResultsRow from './SearchResultsRow'

export default class SearchResultsList extends Component {
  render() {
    const { recentLocations } = this.props
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(recentLocations);
    
    return (
      <ListView style={styles.listView}
        dataSource={dataSource}
        renderRow={(rowData) => <SearchResultsRow rowData={rowData}></SearchResultsRow>}
      />
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'white',
    top: 0,
  }
})
