import css from './ImageCard.module.css';

export default function ImageCard({ image: { urls, alt_description } }) {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src={urls.small}
        alt={alt_description}
        width='300px'
        height='300px'
      />
    </div>
  );
}
