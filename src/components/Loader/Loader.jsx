import css from './Loader.module.css';
import { ClipLoader } from 'react-spinners';

export default function Loader({ isLoading }) {
  return (
    <div className={css.loader}>
      <ClipLoader
        size='35'
        color='#000000'
        loading={isLoading}
        speedMultiplier='1'
      />
    </div>
  );
}
