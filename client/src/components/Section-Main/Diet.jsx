import React from "react";
import MainLayout from "./Partials/MainLayout";
import diet from "./Data/diet-data";
import Diet_details from "./Diet-details";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./css/diet.css";
function createData(witamina, dawka4, dawka, funkcja) {
  return { witamina, dawka4, dawka, funkcja };
}

const rows = [
  createData("A - Retinol", "1,3 mg", "2,2 mg", "zwiększa odporność organizmu na infekcje"),
  createData("D - Kalciferol", "10 ug", "10 ug", "wspomaga przyswajanie wapni i fosforu"),
  createData("E - Tokoferol", "15 mg", "19 mg", "wpływa na elastyczność tkanki łącznej"),
  createData("B1 - Tiamina", "2,1 mg", "2,4 mg", "wspomaga przemianę węglowodanów"),
  createData("B2-Ryboflawina", "2,4 mg", "2,9 mg", "znacznie wpływa na przemianę materii"),
  createData("PP Niacyna - kwas nikotynowy", "17 mg", "20 mg", "bierze udział w przemianie białko-tłuszczowej-węglowodanowej"),
  createData("B6 - Fosforan pirydoksalu", "3,3 mg", "2,8 mg", "ważna dla przemiany białkowej, tworzenia krwi"),
  createData("Kwas foliowy", "1600 ug", "1200 ug", "ważne dla tworzenia krwi"),
  createData("Kwas pantotenowy", "14 mg", "15 mg", "ważne dla przemiany tłuszczów"),
  createData("B12 Cyjanokobalamina", "6 ug", "6 ug", "ważne dla odbudowy komórek i powstawania krwi"),
  createData("C - kwas askorbinowy", "143 mg", "178 mg", "wzmacnia siły obronne organizmu"),
];
export default function Diet(props) {
  return (
    <MainLayout history={props.history}>
      <Grid container spacing={3}>
        {diet.map((diet) => (
          <Diet_details title={diet.title} description={diet.description} />
        ))}
      </Grid>
      <TableContainer component={Paper} className="all">
        <Table>
          <TableHead>
            <TableRow className="tabela">
              <TableCell>Witamina dawkowana dziennie</TableCell>
              <TableCell align="right">
                {"> 4 miesiąc ciąży"}
              </TableCell>
              <TableCell align="right">Kobiety karmiące</TableCell>
              <TableCell align="center">Funckje witamin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.witamina}>
                <TableCell component="th" scope="row">
                  {row.witamina}
                </TableCell>
                <TableCell align="right">{row.dawka4}</TableCell>
                <TableCell align="right">{row.dawka}</TableCell>
                <TableCell align="center">{row.funkcja}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
}
