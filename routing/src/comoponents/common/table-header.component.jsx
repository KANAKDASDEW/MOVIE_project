import React, { Component } from 'react';
const TableHeader = ({ columns,onSort, sortCloumn}) => {

    const handleSort = path =>{
        if(sortCloumn.path === path){
            if(sortCloumn.order === 'asc') onSort({ path, order:'desc'});
            else onSort({path,order: 'asc' });
        }
        else  onSort({path:path, order: 'asc'})
    }
    return ( 

        <thead>
        <tr>
            {
                columns.map(column => (
                    <th onClick ={() => handleSort(column.path)} key ={column.label} scope="col">{ column.label }
                  { sortCloumn.path === column.path ? sortCloumn.order === 'asc' ? <i class ="bi bi-sort-down ok"></i> : <i class ="bi bi-sort-down-alt"> </i> : null}</th>
                ))
            }
            {/* <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Rating</th>
            <th scope="col">Your Rating</th> */}
        </tr>
    </thead>
     );
}
 
export default TableHeader;