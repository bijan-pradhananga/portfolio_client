import GalleryCollection from './GalleryCollection';
import { galleryInfo } from './GalleryInfo';

const Gallery = () => {
    return (
        <section className="max-w-screen-xl mt-4 px-4">
            <div className="mb-6">
                <h1 className="font-bold text-3xl lg:text-4xl mb-2">{galleryInfo.title}</h1>
                <p className="text-gray-500 font-semibold">{galleryInfo.description}</p>
            </div>
            <GalleryCollection />
        </section>
    );
};

export default Gallery;
