import { useEffect, useState } from 'react';
import { fetchImages } from '../../images-api';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [images, setImages] = useState([]);
  const [requestedWord, setRequestedWord] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectImage, setSelectImage] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = (newRequestedWord) => {
    setRequestedWord(newRequestedWord);
    setCurrentPage(1);
    setImages([]);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const openModal = (image) => {
    setSelectImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectImage(null);
    setShowModal(false);
  };

  useEffect(() => {
    if (requestedWord === '') {
      return;
    }

    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(requestedWord, currentPage);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [currentPage, requestedWord]);

  const isLastPage = currentPage === totalPages;
  const hasImages = images.length > 0;

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      <Loader isLoading={isLoading} />
      {isError && <ErrorMessage />}
      {!isError && <ImageGallery images={images} onImageClick={openModal} />}
      {hasImages && !isLoading && !isLastPage && (
        <LoadMoreBtn onClick={nextPage} />
      )}
      <ImageModal
        image={selectImage}
        showModal={showModal}
        onCloseModal={closeModal}
      />
    </div>
  );
}
