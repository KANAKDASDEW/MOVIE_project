import React, { Component } from 'react';
import Form from './from.componet';
import Input from './input.component';

class Movieform extends Form {
    state = { 
        data: {
            title: '',
            poster:'',
            rating: ''
        },
        errors: {}
     } 

     doSubmit =(e) =>{

     }

    render() { 
        return (

            <div  className="container w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
            <div class="mb-3">
                <Input 
                    
                    label="Movie Title"
                    name= "title"
                    id="title"
                    type="text"
                    value={this.state.data.title}
                    onChange={e => this.handleChange(e)}
                    errors ={ this.state.errors}
                    />           
            </div>
            <div className="mb-3">
            <Input        
                    label="Poster URL"
                    name= "poster"
                    id="poster"
                    type="text"
                    value={this.state.data.poster}
                    onChange={e => this.handleChange(e)}
                    errors ={ this.state.errors}

                    />
            </div>
            <div className="mb-3">
            <Input        
                    label="IMDB Rating"
                    name= "rating"
                    id="rating"
                    type="text"
                    value={this.state.data.rating}
                    onChange={e => this.handleChange(e)}
                    errors ={ this.state.errors}

                    />
            </div>
          
          
            <button type="submit" class="btn btn-primary">
                Movie Add
            </button>
        </form>
        </div>
        );
    }
}
 
export default Movieform;