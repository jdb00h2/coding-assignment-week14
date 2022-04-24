import React from 'react';
import ReviewList from './reviewList';
import "../styles/movie.css"
import Stars from './stars';



export default class Movie extends React.Component{
    render(){  
        return(
            <div className='card'>
                <img src={this.props.movie.poster}></img>
    
                <div className='card-title'>
                    <h2>{this.props.movie.title}</h2>
                    <Stars />
                    <br />
                </div>
                <div className='card-text'>
                    <p>
                        {this.props.movie.synopsis}
                    </p>
                </div>
                <div className='card-footer'>
                    <em>{this.props.movie.runtime}</em> <br/>
                    <em>Rated {this.props.movie.rating} <br/></em>
                    <em>Streaming on {this.props.movie.streaming}</em>
                </div>
                <div className='card'>
                    <br/>
                    <h4>User Reviews</h4>
                <ReviewList reviews={this.props.movie.reviews} />
                </div>
            </div>   
            
        )
    }

}