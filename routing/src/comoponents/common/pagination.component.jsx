import React, { Component } from 'react';
import _ from 'lodash'
class Pagination extends Component {
  
    render() { 

        const { total, pageCount, activePage, onChangePage } = this.props;
        const totalPages = Math.ceil(total/pageCount);

        const pages = _.range(1, totalPages+1, 1 );
        if(total <= pageCount) return null;
        return (
            <nav aria-label="Page navigation example">
                <div className="row">
                <div class="col-sm-2 col-md-2"></div>
                <div class="col-sm-10 col-md-10">
                    <ul class="pagination">
                        <li class="page-item"
                        onClick={() => activePage-1 >=1 ?  onChangePage(activePage-1) : null}
                        disabled={activePage-1}
                        >
                            <a className ="page-link" style={{cursor: 'pointer'}} >
                                Previous
                            </a>
                        </li>
                        {
                          pages.map((page => 
                        <li
                         onClick={() => onChangePage(page)}

                         className={ activePage === page ? "page-item active" :"page-item"}>
                            <a className="page-link" style={{cursor: 'pointer'}} >{page}</a> </li>
                         ))
                          }

                        <li className="page-item"
                         onClick={() => activePage+1 <= totalPages ? onChangePage(activePage+1) : null}
                       
                        >
                            <a class="page-link" style={{cursor: 'pointer'}}  >
                                Next
                            </a>
                        </li>
                    </ul>
                    </div>
                  
                    </div>
                </nav>
        );
    }
}
 
export default Pagination;