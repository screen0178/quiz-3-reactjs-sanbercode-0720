import React, { useState, useEffect} from 'react'
import Axios from 'axios'

const MovieEdit = () => {
    const [filmData, setFilmData] = useState(null)
    const [inpDescription, setInpDescription] = useState("")
    const [inpDuration, setInpDuration] = useState("")
    const [inpRating, setInpRating] = useState("")
    const [inpTitle, setInpTitle] = useState("")
    const [inpGenre, setInpGenre] = useState("")
    const [inpYear, setInpYear] = useState("")
    const [formStat, setFormStat] = useState("create")
    const [idUpdate, setIdUpdate] = useState(0)

    useEffect(() => {
        if (filmData === null) {
            Axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                setFilmData(res.data.map(el => {
                    return {
                        id: el.id,
                        title: el.title,
                        description: el.description,
                        year: el.year,
                        duration: el.duration,
                        genre: el.genre,
                        rating: el.rating    
                    }
                }))
            })
        }
    }, [filmData])

    const handleDelete = (evt) => {
        let id = parseInt(evt.target.value)
        let newFilmData = filmData.filter(el => el.id !== id)

        Axios.delete(`http://backendexample.sanbercloud.com/api/movies/${id}`)
        .then(res => {
            console.log(res)
        })
        setFilmData([...newFilmData])
    }

    const handleEdit = (evt) => {
        let id = parseInt(evt.target.value)
        let selectedData = filmData.find(el => el.id === id)
        setInpTitle(selectedData.title)
        setInpYear(selectedData.year)
        setInpRating(selectedData.rating)
        setInpDuration(selectedData.duration)
        setInpGenre(selectedData.genre)
        setInpDescription(selectedData.description)
        setIdUpdate(id)
        setFormStat("edit")
    }

    const handleChangeTitle = (evt) => {
        setInpTitle(evt.target.value)
    }
    const handleChangeYear = (evt) => {
        setInpYear(evt.target.value)
    }
    const handleChangeRating = (evt) => {
        setInpRating(evt.target.value)
    }
    const handleChangeDuration = (evt) => {
        setInpDuration(evt.target.value)
    }
    const handleChangeGenre = (evt) => {
        setInpGenre(evt.target.value)
    }
    const handleChangeDesc = (evt) => {
        setInpDescription(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        
        let title = inpTitle
        let year = parseInt(inpYear)
        let rating = parseInt(inpRating)
        let duration = parseInt(inpDuration)
        let genre = inpGenre
        let description = inpDescription

        if (title.replace(/\s/g,'') !== "") {
            if(formStat === "create") {
                Axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title, year, rating, duration, genre, description})
                .then(res => {
                    console.log(res)
                    setFilmData([
                        ...filmData,
                        {
                            id: res.data.id,
                            title: res.data.title,
                            year: res.data.year,
                            duration: res.data.duration,
                            genre: res.data.genre,
                            rating: res.data.rating,
                            description: res.data.description
                        }
                    ])
                })
            } else if (formStat === "edit") {
                Axios.put(`http://backendexample.sanbercloud.com/api/movies/${idUpdate}`, {title, year, rating, duration, genre, description})
                .then(res => {
                    let dataFilm = filmData.find(el => el.id === idUpdate)
                    dataFilm.title = res.data.title
                    dataFilm.year = res.data.year
                    dataFilm.duration = res.data.duration
                    dataFilm.genre = res.data.genre
                    dataFilm.rating = res.data.rating
                    dataFilm.description = res.data.description
                    setFormStat("create")
                    setFilmData([...filmData])
                })
            }
        }
    }
    
    return (
        <>
        <div className="movieContainer">
            <div className="movieList">
                {
                    filmData !== null && filmData.map((dat, index) => {
                        return (
                        <div key={index}>
                            <p hidden>{index + 1}</p>
                            <h3>{dat.title}</h3>
                            <p>Tahun Rilis: {dat.year}</p>
                            <p>Rating: {dat.rating}</p>
                            <p>Durasi: {dat.duration / 60} Jam</p>
                            <p>Genre: {dat.genre}</p>
                            <p>Deskripsi: {dat.description}</p>
                            <button value={dat.id} onClick={handleEdit}>Edit</button>
                            <button value={dat.id} onClick={handleDelete}>Delete</button>
                            <hr/>
                        </div>
                        )
                    }) 
                }
            </div>
            <div className="movieForm">
                <form>
                    <label>Judul : </label>
                    <input type="text" name="inpTitle" onChange={handleChangeTitle} value={inpTitle} />
                    <label>Tahun Rilis : </label>
                    <input type="text" name="inpYear" onChange={handleChangeYear} value={inpYear} />
                    <label>Rating : </label>
                    <input type="number" placeholder="1 - 10" min="1" max="10" name="inpRating" onChange={handleChangeRating} value={inpRating} />
                    <label>Durasi : </label>
                    <input type="text" name="inpDuration" onChange={handleChangeDuration} value={inpDuration} />
                    <label>Genre : </label>
                    <input type="text" name="inpGenre" onChange={handleChangeGenre} value={inpGenre} />
                    <label>Deskripsi : </label>
                    <textarea name="inpDescription" onChange={handleChangeDesc} value={inpDescription} />
                    <input type="submit" onClick={handleSubmit} />
                </form>
            </div>
        </div>
        </>
    )
}

export default MovieEdit