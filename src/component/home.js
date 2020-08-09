import React, { Component } from 'react'
import Axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmData: null
        }
    }

    componentDidMount(){
        if (this.state.filmData === null) {
            Axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                const data = res.data.map(el => {
                    return {
                        title: el.title,
                        description: el.description,
                        year: el.year,
                        duration: el.duration,
                        genre: el.genre,
                        rating: el.rating    
                    }
                })
                this.setState({
                    filmData: data
                })
            })
        }
    }

    render(){
        return (
            <>
            <div className="section">
                <h1>Featured Posts</h1>
                <div id="article-list">
                    {
                       this.state.filmData !== null && this.state.filmData.map((dat, index) => {
                           return (
                            <div key={index}>
                                <p hidden>{index + 1}</p>
                                <h3>{dat.title}</h3>
                                <p>Tahun Rilis: {dat.year}</p>
                                <p>Rating: {dat.rating}</p>
                                <p>Durasi: {dat.duration / 60} Jam</p>
                                <p>Genre: {dat.genre}</p>
                                <p>Deskripsi: {dat.description}</p>
                                <hr/>
                            </div>
                           )
                       }) 
                    }
                </div>
            </div>
            </>
        )
    }
}

export default Home