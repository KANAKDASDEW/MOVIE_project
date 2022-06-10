import React  from 'react';

import Table from '../common/table.component';
const MovieTable = ({ movies , onSort , sortCloumn}) => {

    const columns =[
        {path: 'title', label:'Title', content: movie => movie.title},
        {path: 'posterurl', label:'Image',content: movie => <img style={{width:'60px',height:'60px'}} src={movie.posterurl}/>},
        {path: 'imdbRating', label:'Rating', content: movie =>  movie.imdbRating  },
        {path: 'my_rated', label:'Your Rating',content: movie => movie.my_rate ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i>},
        
    ];
  

    return ( 
      
        <Table items = { movies } columns={ columns } onSort ={onSort} sortCloumn={sortCloumn} />
        
     );
}
 
export default MovieTable;