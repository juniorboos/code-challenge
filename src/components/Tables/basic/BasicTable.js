import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import PropTypes from "prop-types";


function BasicTable(props) {

  const {items, selected, onSelect} = props

  return (
    <Table className="table-responsive-material">
      <TableHead>
        <TableRow>
          <TableCell className="bg-secondary text-primary sticky">ID</TableCell>
          <TableCell className="bg-secondary text-primary sticky" align="right">Type</TableCell>
          <TableCell className="bg-secondary text-primary sticky" align="right">Login</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Create a row for each item */}
        {items.map(item => {
          return (
            <TableRow 
              key={item.id} 
              onClick={() => onSelect(item)} 
              className={selected && selected.id === item.id ? 'row selected' : 'row'}>
              <TableCell type="number" className="text-secondary">{item.id}</TableCell>
              <TableCell type="text" className="text-secondary" align="right">{item.type}</TableCell>
              <TableCell type="text" className="text-secondary" align="right">{item.login}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

BasicTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.object,
  onSelect: PropTypes.func.isRequired
}

export default BasicTable;