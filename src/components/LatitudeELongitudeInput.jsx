import React, { useContext } from 'react';
import Context from '../context/Context';
import TextField from '@material-ui/core/TextField';

const LatitudeELongitudeInput = () => {
  const { setLatitude, setLongitude } = useContext(Context);

  return (
    <div className="wrapperLatElong">
      <div className="latitude">
        <TextField 
          id="standard-basic"
          label="Latitude"
          variant="standard"
          type="number"
          onChange={(event) => setLatitude(event.target.value)}
        />
      </div>
      <div className="longtitude">
        <TextField
          id="standard-basic"
          label="Longitude"
          variant="standard"
          type="number"
          onChange={(event) => setLongitude(event.target.value)}
        />
      </div>
    </div>
  )
}

export default LatitudeELongitudeInput
