import { handle } from 'express/lib/router';
import React, { Component } from 'react';


const  TableBody = ({ columns, items }) => {

        return (
            <tbody>
                {items.map(item => (
                    <tr className="table">
                        {
                            columns.map(column => <td >{ column.content( item)}</td>)
                                
                        }       
                                
                            
                        
                        </tr>
                 ))    
                
                 } 
            </tbody>
            
        );
    
 }
 
export default TableBody ;