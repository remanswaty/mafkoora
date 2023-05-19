import ImageSlider from "./ImageSlider";
import LazyLoad from 'react-lazy-load';
import placeholderImage from '../public/img/placeholder-image.jpg';
const PageSection = ({ title, description, image, id, images }) => {
    return (
        <div>
            <div id={id} className={`section ${title}`}>
                <div className="section-left">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div style={{placeholderImage: placeholderImage}}>
                        <LazyLoad offset={200} debounce={false} once={true}>
                        <img src={image}></img>
                    </LazyLoad>
                    </div>
                </div>
                <div className="section-right">
                    <ImageSlider images={images} />
                </div>
            </div>
            <div className="gradient" />
        </div>
    );
}

export default PageSection;