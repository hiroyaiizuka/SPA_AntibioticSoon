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
    maginBottom: 40
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
    createData('サワシリン','1回500mg 1日1回、HD日はHD後'),
    createData('オーグメンチン','1回375mg 1日1回、HD日はHD後'),
    createData('ケフレックス','1回500mg 1日1回、HD日はHD後'),
    createData('クラリス','1回200mg 1日1回'),
    createData('ジスロマック','1回500mg 1日1回'),
    createData('エリスロシン','1回100-150mg 1日4回'),
    createData('ミノマイシン','1回100mg 1日2回'),
    createData('ダラシン', '1回300mg 1日3回'),
    createData('クラビット','1回250mg 2日に1回、HD日はHD後'),
    createData('シプロキサン','1回200mg 1日1回、HD日はHD後'),
    createData('ジェニナック','1回400mg 1日1回'),
    createData('ザイボックス','1回600mg 1日2回'),
  ];
  

const rows2 = [
    createData('ペニシリンG','1回50-200万単位 1日4回、HD日はHD後に、50万単位追加投与'),
    createData('ビクシリンS','1回1-2g 1日2回、HD日はHD後'),
    createData('ユナシンS','1回1.5g 1日2回、HD日はHD後'),
    createData('ゾシン','1回2.25g 1日3回、HD日はHD後に、0.75g追加投与'),
    createData('セファメジンα','1回0.5-1g 1日2回、HD日はHD後に、1g追加投与'),
    createData('セフメタゾン','1回1-2g 2日に1回、HD日はHD後 '),
    createData('セフトリアキソン','1回1-2g 1日1回'),
    createData('セフォタックス','1回0.5g 1日2回'),
    createData('モダシン','1回1g 1日1回、HD日はHD後に、1g追加投与'),
    createData('マキシピーム','1回0.5g 1日1回、HD日はHD後に、1g追加投与'),
    createData('ジスロマック','1回0.5g 1日1回'),
    createData('エリスロシン','1回0.25g 1日4回'),
    createData('メロペン','1回0.5g 1日1回、HD日はHD後に、0.5g追加投与'),
    createData('ミノマイシン','1回0.1g 1日2回'),
    createData('クラビット','1回0.25g 2日に1回、HD日はHD後'),
    createData('シプロキサン','0.2-0.4g 1日1回、HD日はHD後'),
    createData('ダラシン','1回0.6g 1日3回'),
    createData('アネメトロ','1回0.5g 1日3-4回'),
    createData('※バンコマイシン','初回20-25mg/kg、その後は透析後に、1回7.5-10mg/kg'),
    createData('ザイボックス','1回0.6g 1日2回、HD日はHD後'),
    createData('※ゲンタシン','0.3mg/kg 2日に1回、HD日はHD後に、1mg/kg追加投与'),
    createData('※アミカシン','2mg/kg 2-3日に1回、HD日はHD後に、2.5mg/kg追加投与')
  ];
  

function Dialysis(props) {
  const { classes } = props;

  return (
    <div>
        <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <CustomTableCell>商品名 (内服薬)</CustomTableCell>
                <CustomTableCell numeric>血液透析 (HD)</CustomTableCell>

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
     
       
                </TableRow>
                );
            })}
            </TableBody>
        </Table>
        </Paper>
    <div style = {{margin: 40}}></div>
        <Paper>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <CustomTableCell>商品名 (静注薬)</CustomTableCell>
                <CustomTableCell numeric>血液透析 (HD)</CustomTableCell>
            </TableRow>
            </TableHead>
        
            <TableBody>
            {rows2.map(row => {
                return (
                <TableRow className={classes.row} key={row.id}>
                    <CustomTableCell component="th" scope="row">
                    {row.name}
                    </CustomTableCell>
                    <CustomTableCell numeric>{row.calories}</CustomTableCell>
                </TableRow>
                );
            })}
            </TableBody>
        </Table>
        </Paper>
    </div>
  );
}

Dialysis.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dialysis);
