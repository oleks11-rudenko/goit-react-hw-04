import css from './ImageModal.module.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export default function ImageModal({ image, showModal, onCloseModal }) {
  return (
    <ReactModal
      className={css.modal}
      isOpen={showModal}
      onRequestClose={onCloseModal}
      overlayClassName={css.overlay}
    >
      {image && (
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      )}
    </ReactModal>
  );
}
