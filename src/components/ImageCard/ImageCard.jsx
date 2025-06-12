import css from './ImageCard.module.css';

export default function ImageCard({ image, onImageClick }) {
  return (
    <div className={css.wrapper}>
      <img
        onClick={() => onImageClick(image)}
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        width='300px'
        height='300px'
      />
      <div className={css.description}>
        <p className={css.likes}>Likes: {image.likes}</p>
        <a className={css.link} href={image.links.download} target='_blanc'>
          Download
        </a>
      </div>
    </div>
  );
}
