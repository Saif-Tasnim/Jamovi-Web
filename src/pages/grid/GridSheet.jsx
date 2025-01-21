import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import './grid.css'

ModuleRegistry.registerModules([AllCommunityModule]);

const GridSheet = () => {
  const [rowData] = useState(
    Array.from({ length: 20 }, () => ({
      A: "",
      B: "",
      C: "",
      D: "",
      E: "",
      F: "",
      G: "",
      H: "",
    }))
  );

  const [columnDefs] = useState([
    { field: "A", editable: true },
    { field: "B", editable: true },
    { field: "C", editable: true },
    { field: "D", editable: true },
    { field: "E", editable: true },
    { field: "F", editable: true },
    { field: "G", editable: true },
    { field: "H", editable: true },
  ]);

  return (
    <div
      className="ag-theme-alpine overflow-scroll"
      style={{ height: "100%", width: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection="multiple"
        enableCellTextSelection={true} 
        tabToNextCell={true} 
        onCellValueChanged={(event) => {
          console.log("Data updated", event.data);
        }}
        domLayout="autoHeight" 
        pagination={false} 
      />
    </div>
  );
};

export default GridSheet;

