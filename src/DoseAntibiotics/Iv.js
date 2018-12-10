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
    backgroundColor: "rgb(225, 0, 80)",
    color: theme.palette.common.white,
    fontSize: 17,
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
  createData('ペニシリンG', '200-400万単位 (4時間毎)','200万単位 (4時間毎)','100万単位 (6時間毎)'),
  createData('ビクシリン', '2g (6時間毎)','2g (8時間毎)','2g (12時間毎)'),
  createData('ユナシン','1.5-3g (6時間毎)','1.5-3g (8時間毎)','1.5-3g (12時間毎)'),
  createData('ゾシン','4.5g (6時間毎)','2.25g (6時間毎)','2.25g (8時間毎)'),
  createData('セファメジン', '1-2g (8時間毎)','1-2g (12時間毎)','1g (24時間毎)'),
  createData('セフメタゾン', '1g (6-8時間毎)','1g (12時間毎)','1g (24時間毎)'),
  createData('パンスポリン', '1g (6-8時間毎)','1g (12時間毎)','1g (24時間毎)'),
  createData('ロセフィン' ,'髄膜炎: 2g (12時間毎)    その他:1-2g (24時間毎)','投与量･間隔調整不要','投与量･間隔調整不要'),
  createData('モダシン', '1g (6-8時間毎)','1g (12時間毎)','1g (24時間毎)'),
  createData('スルペラゾン', '2g (12時間毎)','2g (12時間毎)','2g (24時間毎)'),
  createData('マキシピーム', '発熱性好中球減少症、緑膿菌感染: 2g (12時間毎)      その他: 1g (8時間毎)','1g (12時間毎)','500mg-1g (24時間毎)'),
  createData('メロペン', '1g (8時間毎)','1g (12時間毎)','500mg (24時間毎)'),
  createData('チエナム', '500mg (6時間毎)','500mg (12時間毎)','250mg (12時間毎)'),
  createData('ミノマイシン', '100mg (12時間毎)','投与量･間隔調整不要','投与量･間隔調整不要'),
  createData('エリスロシン', '500mg (6時間毎)','500mg (6時間毎)','250mg (6時間毎)'),
  createData('ジスロマック', '500mg (24時間毎)','投与量･間隔調整不要','投与量･間隔調整不要'),
  createData('ダラシンS', '600mg (8時間毎)','投与量･間隔調整不要','投与量･間隔調整不要'),
  createData('シプロキサン', '300mg (12時間毎)','300mg (12時間毎)','300mg (24時間毎)'),
  createData('クラビット', '500mg (24時間毎)','250mg (24時間毎)','250mg (48時間毎)'),
  createData('バンコマイシン', '1g (12-24時間毎)','0.5-1g (24時間毎)','0.5g (72時間毎)'),
  createData('ゲンタシン', '4-5mg/kg (24時間毎)','0.5-1mg/kg (24時間毎)','0.3mg/kg (48時間毎)'),
  createData('ファンガード', 'カンジダ: 100mg (24時間毎)  アスペルギルス: 150-300mg (24時間毎)','投与量･間隔調整不要','投与量･間隔調整不要'),
  createData('ゾビラックス', '10mg/kg (8時間毎)','CCr: 30-50 10mg/kg (12時間毎)    CCr: 10-30 10mg/kg (24時間毎)','5mg/kg (24時間毎)'),

];

function Iv(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>商品名 (静注薬)</CustomTableCell>
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

Iv.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Iv);
