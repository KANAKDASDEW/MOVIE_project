import React  from "react";

const Filter = (props) => {
    const { filteredItems, onClick, selectedItem } = props;
    return ( 
        <div className="col-sm-2 col-md-2 listofGroup">
        <ul className="list-group">
           
           {filteredItems.map(item =>  <li style={{cursor: 'pointer'}}  key={item._id} className= { selectedItem === item.name ?"list-group-item active" : 'list-group-item' }onClick={() => onClick(item.name)}>{item.name} </li>
            )}
           </ul>
       </div>
     );
}
 
export default Filter;

