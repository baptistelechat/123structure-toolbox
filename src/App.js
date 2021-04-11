import React from "react";
import logo from "./logo.svg";
import "./App.css";

import readXlsxFile from 'read-excel-file'


function App() {

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
      </header>
    </div>
  );
}

export default App;