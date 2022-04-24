import React from 'react';
import Movie from './movie';
import '../styles/movieList.css'

export default class MovieList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            movieList: [
                {
                    id:0,
                    poster: 'https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
                    title: 'Fargo',
                    synopsis: 'A man deeply in debt hires two incompetent henchmen to kidnap his wife and split the ransom money but things go awry when the inept criminals instead kill a highway patrolman and 2 hapless bystanders.',
                    runtime: '1h38m',
                    rating: 'R',
                    streaming:'Amazon Prime Video',
                    reviews: [{
                        text:'A great watch! Would definitely recommend.',
                        author: 'Joe',
                        date: '3/20/2022',
                        rating:'5\u{2605}'
                    }]
                },
                {
                    id:1,
                    poster: 'https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
                    title: 'The Usual Suspects',
                    synopsis: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.',
                    runtime: '1h46m',
                    rating: 'R',
                    streaming:'Amazon Prime Video',
                    reviews: [{
                        text:'My head is still spinning from this plot.',
                        author: 'Jason',
                        date: '1/20/2022',
                        rating:'4\u{2605}'
                    }
                    ]

                },
                {
                    id:2,
                    poster: 'https://www.spectatornews.com/wp-content/uploads/2015/11/WEB_there-will-be-blood-641x900.jpg',
                    title: 'There Will Be Blood',
                    synopsis: 'An ambitious prospector strikes it rich and turns a simple village into a boomtown, stoking the ire of a charismatic young preacher.',
                    runtime: '2h38m',
                    rating: 'R',
                    streaming: 'Netflix',
                    reviews: [{
                        text:'I liked it but it seemed a bit long.',
                        author: 'John',
                        date: '4/12/2022',
                        rating: '3\u{2605}'
                    },
                    {
                        text:'A bastard in a basket. What an impactful line.',
                        author: 'Heather',
                        date: '11/3/2021',
                        rating:'5\u{2605}'
                    }]
                },
                {
                    id:3,
                    poster:'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
                    title: 'Mad Max: Fury Road',
                    synopsis: 'In a post-apocalyptic wasteland, a women rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
                    runtime: '2h',
                    rating: 'R',
                    streaming:'HBO Max',
                    reviews: [{
                        text: 'What a wild ride!!',
                        author: 'Mark',
                        date:'3/12/2022',
                        rating: '5\u{2605}'
                    }]
                },
                {
                    id:4,
                    poster: 'https://m.media-amazon.com/images/M/MV5BMTQxNDYzMTg1M15BMl5BanBnXkFtZTgwNzk4MDgxMTE@._V1_.jpg',
                    title: 'My Cousin Vinny',
                    synopsis: 'Two New Yorkers accused of murder in rural Alabama while on their way back to college call in the help of one of their cousins, a loudmouth lawyer with no trial experience.',
                    runtime: '2h',
                    rating: 'R',
                    streaming: 'HBO Max',
                    reviews:[{
                        text: 'So much more fun than I expected. Great chemistry!',
                        author: 'Jillian',
                        date: '3/24/2022',
                        rating: '4\u{2605}',
                    }]
                },
                {
                    id:5,
                    poster: 'https://m.media-amazon.com/images/M/MV5BNDcwN2VjZDEtNWNhMS00MDc4LWIwZWQtM2Q2NjQyZTcwYzBjXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg',
                    title: 'Snatch',
                    synopsis: 'Gangsters. Bookies. Brawlers. Everyone wants to get their hands on the stone. Why can\'t anyone hang onto it?',
                    runtime: '1h42m',
                    rating: 'R',
                    streaming: 'Netflix',
                    reviews:[{
                        text: 'A thrilling movie, start to finish!',
                        author: 'Jeffery',
                        date: '1/30/2022',
                        rating: '5\u{2605}'
                    }]
                },
                {
                    id:6,
                    poster: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg',
                    title: 'No Country For Old Men',
                    synopsis: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
                    runtime: '2h2m',
                    rating: 'R',
                    streaming: 'HBO Max',
                    reviews: [{
                        text:'The ending really makes you think. Javier Bardem delivers a knock out performance.',
                        author: 'Thomas',
                        date: '12/23/2022',
                        rating:'5\u{2605}'
                    }]
                },
                {
                    id:7,
                    poster:'https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_FMjpg_UX1000_.jpg',
                    title: 'Léon: The Professional',
                    synopsis: 'Léon, a hit man in New York, becomes the unwilling custodian of Mathilda, a vengeful 12-year-old whose family was wiped out by a crooked DEA agent.',
                    runtime: '1h49m',
                    rating: 'R',
                    streaming: 'Netflix',
                    reviews: [{
                        text:'I could tell it was a well made movie. However, it feels a bit dated.',
                        author: 'Terry',
                        date: '2/17/2022',
                        rating:'3\u{2605}'
                    }]
                },
                {
                    id:8,
                    poster: 'https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_FMjpg_UX1000_.jpg',
                    title: 'Train to Busan',
                    synopsis: 'Train to Busan is a harrowing zombie horror-thriller that follows a group of terrified passengers fighting their way through a countrywide viral outbreak, trapped on a suspicion-filled, blood-drenched bullet train ride to the Safe Zone...which may or may not still be there.',
                    runtime: '1h58m',
                    rating: '13+',
                    streaming: 'Amazon Prime Video',
                    reviews: [{
                        text:'Intense thrill of a train ride. Makes you think a lot about trust. Great message!',
                        author: 'Megan',
                        date: '4/5/2022',
                        rating:'4\u{2605}'
                    }]
                }
            ],
        }
    }

    render() {
        return (
            <div className="container">
                <h1 id='title'>Welcome to the Movie Vault!</h1>
                <Movie movie={this.state.movieList[0]} />
                <Movie movie={this.state.movieList[1]} />
                <Movie movie={this.state.movieList[2]} />
                <Movie movie={this.state.movieList[3]} />
                <Movie movie={this.state.movieList[4]} />
                <Movie movie={this.state.movieList[5]} />
                <Movie movie={this.state.movieList[6]} />
                <Movie movie={this.state.movieList[7]} />
                <Movie movie={this.state.movieList[8]} />
            </div>
        )
    }
}