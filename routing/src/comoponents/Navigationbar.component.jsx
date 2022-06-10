import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./from.componet";
import { getmovies } from "./service/movie.services";

class Navigation extends Form {
    state = {
        data: { search_query: "" },
        errors: {},
        movies: getmovies(),
    };

    doSubmit = (e) => {};

    searchMovies = () => {
        if (this.state.data.search_query.trim() === "") return [];

        return this.state.movies.filter((movie) =>
            movie.title
                .toLowerCase()
                .includes(this.state.data.search_query.toLocaleLowerCase())
        );
    };

    render() {
        const searched_movies = this.searchMovies();
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/movies">
                        MOVIE
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                >
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Products/id">
                                    Products
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Posts">
                                    Post
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Admin">
                                    Admin
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/add-movie">
                                    ADD Movies
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={this.handleSubmit}>
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                name="search_query"
                                onChange={this.handleChange}
                                value={this.state.data.search_query}
                            />
                            <div
                                className={
                                    searched_movies.length
                                        ? "card"
                                        : "card d-none"
                                }
                                style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 300,
                                }}
                            >
                                <ul className="list-group list-group-flush">
                                    {searched_movies.map((movie, idx) => (
                                        <li key={idx} class="list-group-item">
                                            {movie.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                class="btn btn-outline-success search"
                                type="submit"
                            >
                                Search
                            </button>

                            {
                            !localStorage.getItem("accessToken") && (
                                <>
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                    <Link className="nav-link" to="/signup">
                                        SignUp
                                    </Link>
                                </>
                            )
                            }
                            {
                            localStorage.getItem("accessToken") && (
                              <>
                                <Link className="nav-link" to="/logout">
                                    Logout
                                </Link>

                                </>
                            )
                            }
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
