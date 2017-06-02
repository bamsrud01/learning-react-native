//  Import libraries
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

//  Import component
import ListItem from './ListItem';

//  Create component
class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

//  Function to take global state object and provide props for component
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

//  Export component using connect (returns a function)
export default connect(mapStateToProps)(LibraryList);
