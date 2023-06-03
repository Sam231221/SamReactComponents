import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import './LazyImage.css'

export function LazyImage({ image }) {
    return (

        <>
            <LazyLoadImage className="lazyimage"
                src={image.src}
                effect="blur"
                height={"100%"}
                width={"100%"}
                placeholderSrc={image.src}
                style={{ "objectFit": "cover" }}
            />

            {/* <LazyLoadImage
                key={image.name}
                src={`http://localhost:9000/${image.name}`}
                height={500}
                width={333}
                effect="blur"
                placeholderSrc={`http://localhost:9000/${image.name}`}
            /> */}

        </>

    );
}


