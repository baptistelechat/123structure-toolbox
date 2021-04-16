import React from "react";
import logo from "./logo.png";
import "./App.css";

import readXlsxFile from 'read-excel-file'
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import PDF from './components/PDF'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    textTransform: 'none'
  },
  input: {
    display: 'none'
  },
  download: {
    textTransform: 'none',
    textDecoration: 'none'
  }
}));

function App() {

  const classes = useStyles();

  const readExcel = (file) => {
    readXlsxFile(file, { getSheets: true }).then((sheets) => {
      // Get the list of sheets
      // sheets === [{ name: 'Sheet1' }, { name: 'Sheet2' }]
      console.log(sheets)
      readXlsxFile(file, {sheet: 3}).then((rows) => {
        // `rows` is an array of rows
        // each row being an array of cells.
        console.log(rows)
      })
    })
  }

  return (
    <div className="App">
      {console.log(`
 ██╗██████╗ ██████╗     ███████╗████████╗██████╗ ██╗   ██╗ ██████╗████████╗██╗   ██╗██████╗ ███████╗
███║╚════██╗╚════██╗    ██╔════╝╚══██╔══╝██╔══██╗██║   ██║██╔════╝╚══██╔══╝██║   ██║██╔══██╗██╔════╝
╚██║ █████╔╝ █████╔╝    ███████╗   ██║   ██████╔╝██║   ██║██║        ██║   ██║   ██║██████╔╝█████╗  
 ██║██╔═══╝  ╚═══██╗    ╚════██║   ██║   ██╔══██╗██║   ██║██║        ██║   ██║   ██║██╔══██╗██╔══╝  
 ██║███████╗██████╔╝    ███████║   ██║   ██║  ██║╚██████╔╝╚██████╗   ██║   ╚██████╔╝██║  ██║███████╗
 ╚═╝╚══════╝╚═════╝     ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝

                                                                             made by @baptistelechat
                                        visit https://github.com/baptistelechat/123structure-toolbox
                                                                       visit https://123structure.fr
                                          `)}
      <img src={logo} className="App-logo" alt="logo" />
      <input
        id="upload-file"
        type="file"
        accept=".xls,.xlsx,.xlsm"
        className={classes.input}
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      <label htmlFor="upload-file">
        <Button
          variant="contained"
          component="span"
          color="default"
          size="large"
          className={classes.button}
          startIcon={<SaveAltIcon />}
        >
          Charger un fichier ...
        </Button>
      </label>
      <PDFViewer style={{width:'40%', height:'25%'}}>
        <PDF/>
      </PDFViewer>
      <PDFDownloadLink document={<PDF />} fileName="123Structure.pdf" className={classes.download}>
        <Button
          variant="contained"
          component="span"
          color="default"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Télécharger mon rapport
        </Button>
      </PDFDownloadLink>
    </div>
  );
}

export default App;