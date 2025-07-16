export const Card = ({title, text, img, link}) => {
    return (
        <div className="col-md">
            <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <a href={link} className="btn btn-primary">Go Wiki</a>
                    </div>
            </div>
        </div>
    )
}