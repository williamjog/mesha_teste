import React, { useContext } from 'react';
import Context from '../context/Context';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TabelaCidadePesquisada = () => {
  const { temperatura, cidadePesquisada, estilo } = useContext(Context);

  return (
    cidadePesquisada ? 
    <div className="cidadePesquisada">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cidade</TableCell>
              <TableCell>Temperatura</TableCell>
              <TableCell>Estilo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{cidadePesquisada}</TableCell>
              <TableCell>{temperatura} ºC</TableCell>
              <TableCell>{estilo}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
     : ''
  )
}

export default TabelaCidadePesquisada
