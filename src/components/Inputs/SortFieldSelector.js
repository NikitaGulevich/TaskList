import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {changeSortField} from '../../actions';

const style = {
  display: 'inline-block',
  maxWidth: 150,
  marginLeft: 20,
  marginTop: 20,
  background: '#fff'
},
  labelStyle = {
    paddingLeft: 15
  };

class SortFieldSelector extends Component {

  handlerChangeSortField = (event, index, value) => {
    const { changeSortField } = this.props;
    changeSortField(value);
  };

  render() {
    const { sortField } = this.props;

    return (
        <SelectField
          value={ sortField }
          maxHeight={200}
          { ...{style, labelStyle} }

          onChange={this.handlerChangeSortField}
        >
          <MenuItem value={'id'} primaryText="ID" />
          <MenuItem value={'taskname'} primaryText="Name" />
        </SelectField>
    )
  }
}

export default connect(
  state =>({
    sortField: state.sortField,
  }),
  { changeSortField }
)(SortFieldSelector);