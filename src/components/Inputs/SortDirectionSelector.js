import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {changeSortDirection} from '../../actions';

const style = {
  display: 'inline-block',
  maxWidth: 110,
  marginLeft: 20,
  background: '#fff'
},
  labelStyle = {
    paddingLeft: 15
  };

class SortDirectionSelector extends Component {

  handlerChangeSortDirection = (event, index, value) => {
    const { changeSortDirection } = this.props;
    changeSortDirection(value);
  };

  render() {
    const { sortDirection } = this.props;
    return (
        <SelectField
          value={ sortDirection }
          { ...{style, labelStyle} }
          maxHeight={200}
          onChange={this.handlerChangeSortDirection}
        >
          <MenuItem value={'asc'} primaryText="asc" />
          <MenuItem value={'desc'} primaryText="desc" />
        </SelectField>
    )
  }
}

export default connect(
  state =>({
    sortDirection: state.sortDirection,
  }),
  { changeSortDirection }
)(SortDirectionSelector);