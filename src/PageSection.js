import ImageSlider from "./ImageSlider";

ImageSlider
const PageSection = ({ title, description, image, id, images }) => {
    return (
       <div>
             <div id={id} className={`section ${title}`}>
            <div className="section-left">
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={image}></img>
            </div>
            <div className="section-right">
                <ImageSlider images={images} />
            </div>
        </div>
        <div className="gradient"/>
       </div>
    );
}

export default PageSection;