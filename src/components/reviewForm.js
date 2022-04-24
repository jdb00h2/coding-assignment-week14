import React from 'react';
import '../styles/form.css';
import Stars from './stars';

export default class ReviewForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            reviewInfo: {
                author: '',
                text: '',
                date: '',
                rating:'',
            }
        };
        {this.changeChild = React.createRef()}
    }

    onNameChange = (event) => {
        this.setState(state => {
            const copyOfInfo = {...state.reviewInfo};
            copyOfInfo.author = event.target.value;
            return {reviewInfo: copyOfInfo}
        });
    }

    onTextChange = (event) => {
        this.setState(state => {
            const copyOfInfo = { ...state.reviewInfo};
            copyOfInfo.text = event.target.value;
            return {reviewInfo: copyOfInfo}
        });
    }

    addRating = (newRating) => {
            this.setState(state => {
            const copyOfInfo = { ...state.reviewInfo}
            copyOfInfo.rating = (newRating);
            return { reviewInfo: copyOfInfo }
        });
    }
    
    onUserSubmit = () => {
        const current = new Date;
        const newReview = {
            author: this.state.reviewInfo.author,
            text: this.state.reviewInfo.text,
            date: `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`,
            rating: this.state.reviewInfo.rating + '\u{2605}'
        }
        this.props.onSubmit(newReview);
        this.setState({reviewInfo: {author: '', text: ''}});
        this.changeChild.current.clearStars();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div id='form'>
                    <h3>Share your thoughts!</h3>
                    <Stars onChange={this.addRating} ref={this.changeChild}/>
                    <input type='text' className='form-control' placeholder='Name' value={this.state.reviewInfo.author} onChange={this.onNameChange}/>
                    <textarea className='form-control' placeholder='How do you feel about this movie?' value={this.state.reviewInfo.text} onChange={this.onTextChange} />
                    <br/>
                    <button className='btn btn-primary' type='button' onClick={this.onUserSubmit}>Submit</button>
                </div>
                <br/><br/>
            </form>
        )
    } 
}