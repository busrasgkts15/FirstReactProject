import React from "react";
import SearchBar from "./SearchBar";
import CustomerTable from "./CustomerTable";
import { useState } from "react";
import JsExample from "./JsExample";

function FilterCustomerTable({ customers }) {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <CustomerTable
        customer={customers}
        filterText={filterText}
        setFilterText={setFilterText}
      />
     {/* <JsExample customer={customers}></JsExample> */}
    </div>
  );
}

export default FilterCustomerTable;
