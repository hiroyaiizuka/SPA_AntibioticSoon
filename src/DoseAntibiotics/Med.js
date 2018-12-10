import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "gray",
    color: theme.palette.common.white,
    fontSize: 18,
  },
  body: {
    fontSize: 15,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return { id, name, calories, fat, carbs};
}

const rows = [
    createData('サワシリン', '500mg (2Cp) (1日3-4回)','500mg (2Cp) (1日2-3回)','500mg (2Cp) (1日1回)'),
    createData('オーグメンチン', '375mg (1錠) (1日3回)','375mg (1錠) (1日2回)','375mg (1錠) (1日1回)'),
    createData('ケフレックス', '500mg (2Cp) (1日3回)','500mg (2Cp) (1日2回)','500mg (2Cp) (1日1回)'),
    createData('クラリシッド', '200-400mg (1-2錠) (1日2回)','200mg (1錠) (1日1-2回)','200mg (1錠) (1日1回)'),
    createData('ジスロマック', '500mg (2錠) (1日1回)','投与量･間隔 調整不要','投与量･間隔 調整不要'),
    createData('ミノマイシン', '100mg (1Cp) (1日2回)','投与量･間隔 調整不要','投与量･間隔 調整不要'),
    createData('ビブラミシン', '初日: 100mg(1錠) (1日2回)    2日目以降: 100mg(1錠) (1日1回)','投与量･間隔 調整不要','投与量･間隔 調整不要'),
    createData('ダラシン', '300mg (2Cp) (1日3回)','投与量･間隔 調整不要','投与量･間隔 調整不要'),
    createData('シプロキサン', '200-400mg (1-2錠) (1日2回)','100-200mg (0.5-1錠) (1日2回)','200mg (1錠) (1日1回)'),
    createData('クラビット', '500mg (2錠) (1日1回)', '250mg (1錠) (1日1回)', '250mg (1錠) (2日に1回)'),
    createData('バクタ配合錠', '1回2錠  (1日2回)','1回1錠 (1日2回)','基本的には使用しない'),
    createData('フラジール', '500mg (2錠) (1日3回)','500mg (2錠) (1日2回)','250mg (1錠) (1日1回)'),
  ];


function Med(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>商品名 (内服薬)</CustomTableCell>
            <CustomTableCell numeric>Ccr > 50</CustomTableCell>
            <CustomTableCell numeric>Ccr 10 - 50</CustomTableCell>
            <CustomTableCell numeric>Ccr ＜ 10</CustomTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell numeric>{row.calories}</CustomTableCell>
                <CustomTableCell numeric>{row.fat}</CustomTableCell>
                <CustomTableCell numeric>{row.carbs}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

Med.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Med);
