import React  from "react";
import TableHeader from "./table-header.component";
import TableBody from "./tablebody.component";

const Table = ({ columns, items,onSort ,sortCloumn}) => {
    return (
        <table class="table">
             
             <TableHeader 
              columns={columns} onSort={ onSort } sortCloumn = {sortCloumn}/>

              <TableBody columns={columns} items={items} />
            
        </table>
    );
};

export default Table;
