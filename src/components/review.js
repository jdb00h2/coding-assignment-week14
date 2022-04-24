import React from 'react';
import '../styles/review.css'

export default class Review extends React.Component{
    render() {
        return (
            <div className="card" id='review'>
                <div className="card-body">
                    <h5 className="card-title">{ this.props.review.author } </h5>
                    <p className="card-text">
                        {this.props.review.rating} <br/>
                        "{ this.props.review.text }"
                    </p> 
                    <p className="card-text">
                       <em>{this.props.review.date}</em>
                    </p>
                </div>
                
            </div>
        )
    }
}