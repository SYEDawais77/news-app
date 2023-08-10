import React from 'react'
import "../App.css"

const NewItem = (props) => {

    let { title, description, imageUrl, url, author, dateTime, source } = props
    return (
        <div className="card my-3 mx-auto" style={{ width: "300px", height: "500px", borderRadius: "15px" }}>
            <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{ left: "20%", height: "25px", textAlign: "center", position: "absolute" }}>{source}</span>
            <img src={imageUrl ? imageUrl : "https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985600.jpg?w=900&t=st=1690544161~exp=1690544761~hmac=00cb587fba1eafc980e8277fba119f4611386cfe365ed6fc1b606a27bc20fa52"} className="card-img-top" alt="" style={{ borderTopRightRadius: "15px", borderTopLeftRadius: "15px", height: "300px", width: "300px" }} />
            <div className="card-body text-center">
                <h5 className="card-title">{title ? title.slice(0, 70) : ""}... </h5>
                <p className="card-text">{description ? description.slice(0, 100) : ""}...</p>
                <p className="card-text"><small className="text-muted">by {author ? author : "Unknown"} on {new Date(dateTime).toGMTString()}  </small></p>
                <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary mx-auto" >Read More</a>
            </div>
        </div>
    )

}

export default NewItem
