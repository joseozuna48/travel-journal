export default function Post(props){

    console.log(props.country);
    return (
        <article>
            <img src={props.image} alt="" height={50} className="post--image" />
            <div className="post--content">
                <h2 className="post--country"><i className="fa-solid fa-map-pin"></i>{props.country} <a href={props.map}> View on google maps</a> </h2>
                <h1 className="post--title">{props.place}</h1>
                <p className="post--date">{props.date}</p>
                <p className="post--summary">{props.content}</p>
            </div>
            
        </article>
    );
}