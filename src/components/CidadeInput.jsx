import React, { useContext } from 'react';
import Context from '../context/Context';
import TextField from '@material-ui/core/TextField';

const CidadeInput = () => {
  const { setCidade } = useContext(Context);

  return (
    <div className="city">
      <TextField 
        id="standard-basic"
        label="Cidade"
        variant="standard" 
        onChange={(event) => setCidade(event.target.value)}
      />
    </div>
  )
}

export default CidadeInput
