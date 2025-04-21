import "./index.scss";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {PORTFOLIO_IMAGE_URL} from "../../../constants.js";

function PhotosPortfolioDetails({ project }) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Use the images from the project prop and filter for .webp files
    const images = project?.images?.filter(image => image.endsWith('.webp')) || [];

    return (
        <section
            id="photosPortfolioDetails"
            className={isAnimating ? "animating" : ""}
        >
            <div className="title" data-aos="fade-right">Postlar</div>
            <div className="description" data-aos="fade-up">HAZIRLADIĞIMIZ ŞƏKİL TİPLİ KONTENTLƏR</div>
            <div className="row">
                {images.map((img, index) => (
                    <div
                        className="col-3 col-md-3 col-sm-6 col-xs-6"
                        key={index}
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-up"}
                    >
                        <div className="video-wrapper">
                            <img
                                src={PORTFOLIO_IMAGE_URL + img}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PhotosPortfolioDetails;
