const PageSection = ({title, description, image, bgColor, id}) => {
    return(
    <div id={id} className={`section ${bgColor}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image}></img>
    </div>
    );
}

export default PageSection;