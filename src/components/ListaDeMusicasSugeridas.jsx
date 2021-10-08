import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListaDeMusicasSugeridas = () => {
  const { musicas, estilo, setMusicas, pesquisando, setPesquisando } = useContext(Context);

  useEffect(() => {
    if (estilo) {
      const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: `${estilo}`},
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '4adb30b43emsh10ba71eb8218599p1bfc19jsn75a2ad157744'
        }
      };
      const buscarMusicas = async () => {
        await axios.request(options)
        .then(response => response.data)
        .then(res => setMusicas(res.data))
        .then(_r => setPesquisando(false));
      } 
      buscarMusicas();
    }
  }, [estilo, setMusicas, setPesquisando, pesquisando]);
 
  return (
    !pesquisando ? (
    <div className="musicasSugeridas">
      <span className="musicTitle">Músicas Recomendas para o tempo atual</span>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Titulo</TableCell>
              <TableCell>Artista</TableCell>
              <TableCell>Duracao</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {musicas && musicas.map((musica, index) => (
            index < 5 ? (
            <TableRow key={musica.id}>
              <TableCell>{musica.title}</TableCell>
              <TableCell>{musica.artist.name}</TableCell>
              <TableCell>{musica.duration} s</TableCell>
            </TableRow>
            ) : <tr key={musica.id}></tr>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ) : '');
}

export default ListaDeMusicasSugeridas
