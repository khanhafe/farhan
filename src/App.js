import React from "react";
import Table from "./Table.js";

export default class App extends React.Component {
  state = {
    tableData: [
      { Name: "Abc", Age: 15, Location: "Bangalore" },
      { Name: "Def", Age: 43, Location: "Mumbai" },
      { Name: "Uff", Age: 30, Location: "Chennai" },
      { Name: "Ammse", Age: 87, Location: "Delhi" },
      { Name: "Yysse", Age: 28, Location: "Hyderabad" }
    ]
  };

  render() {
    return (
      <div className="App">
        Hello, React
        <br />
        <Table data={this.state.tableData} />
      </div>
    );
  }
}
