import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


let id = 0;

function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {id, name, calories, fat, carbs, protein};
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BasicTable({items, onSelect}) {

  return (
    <div className="table-responsive-material">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Login</TableCell>
            <TableCell align="right">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => {
            return (
              <TableRow key={item.id} onClick={() => onSelect(item)}>
                <TableCell>{item.id}</TableCell>
                <TableCell align="right">{item.login}</TableCell>
                <TableCell align="right">{item.url}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}


export default BasicTable;