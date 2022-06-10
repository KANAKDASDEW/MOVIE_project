import React, { Component } from "react";

import Pagination from "../common/pagination.component";

import { getmovies, getGenres  } from "./movie.services";
import Filter from "../common/filtering.component";
import MovieTable from "./movies-table.components";
import _ from 'lodash';


class Movies extends Component {
    state = {
        movies: getmovies(),
        geners: [{ name: 'ALL Genre' }, ...getGenres()],
        activePage: 1,
        pageCount: 9,
        selectedGenre:'All Genre',
        sortCloumn:{path:'title', order: 'asc'}
    };
   

    handleChangePage = (page) => {
        this.setState({ ...this.state, activePage: page });
    };

    paginateMovies = (movies) => {
        const { activePage, pageCount } = this.state;
        const start = (activePage - 1) * pageCount;
        const paginateMovies = movies.slice(start, start + pageCount);
        return paginateMovies;
    };

    filterMovies = () => {
        const { movies, selectedGenre} = this.state;
        const  filteredMovies = movies.filter(movie => {
            if(selectedGenre === 'ALL Genre') return true;
            if(movie.genres.includes(selectedGenre)) return true;
            return false;
        });
        return filteredMovies;
    };

    sortMovies = (movies) =>{
        const {sortCloumn } = this.state;
        const sortedMovies = _.orderBy(movies, [sortCloumn.path],[sortCloumn.order]);
        return sortedMovies;
    }

    handleClickGenre = (genre) =>{
       
        this.setState({...this.state, selectedGenre: genre, activePage: 1})
    };

    handleSort = sortCloumn =>{
        this.setState({...this.state, sortCloumn }) 
    }


  

    render() {
        const filtered = this.filterMovies();

        const sorted = this.sortMovies(filtered);

        const movies = this.paginateMovies(sorted);

        return (
            <>
                <div className="row">
                    
                     
                    <br />
                    <Filter 
                            filteredItems={this.state.geners.map((genre, idx) => ({_id: idx , name: genre.name }) )}
                            onClick={this.handleClickGenre}
                            selectedItem ={this.state.selectedGenre}

                    />
                    
                    <div className="col-sm-10 col-md-10">
                        <div className="row">
                        <div className="col-sm-1 col-md-1"></div>
                        </div>
                        <h2>Showing {filtered.length} Movies</h2>

                        <MovieTable 
                            movies={movies}
                            onSort ={this.handleSort}
                            sortCloumn={this.state.sortCloumn}
                        />
                    </div>
                </div>
                <Pagination
                    total={filtered.length}
                    pageCount={this.state.pageCount}
                    activePage={this.state.activePage}
                    onChangePage={this.handleChangePage}
                />
            </>
        );
    }
}

export default Movies;
