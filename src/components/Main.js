export default function Main(props) {
    return (
        <div className="main">
            <div className="main--imgbox">
                <img src={props.imageUrl} className="main--img" />
            </div>
            <div className="main--right">
                <div className="main--stats">
                    <img src={require("../images/location.png")} />
                    <h4 className="country">{props.location}</h4>
                    <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <div className="main--text">
                    <h1 className="main--title" >{props.title}</h1>
                    <h4 className="main--date">{props.startDate} - {props.endDate}</h4>
                    <p className="main--description" >{props.description}</p>
                </div>
            </div>

        </div>
    )
}