import css from './App.module.css';
import { useEffect, useState } from 'react';
import { fetchImages } from '../../images-api';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

export default function App() {
  const [images, setImages] = useState([]);
  const [requestedWord, setRequestedWord] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
    <>
      <SearchBar onSubmit={handleSearch} />
      <Loader isLoading={isLoading} />
      {isError && <ErrorMessage />}
      {!isError && <ImageGallery images={images} />}
      {hasImages && !isLoading && !isLastPage && (
        <LoadMoreBtn onClick={nextPage} />
      )}
    </>
  );
}
