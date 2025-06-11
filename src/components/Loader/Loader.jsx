import { ClipLoader } from 'react-spinners';

export default function Loader({ isLoading }) {
  return (
    <ClipLoader
      size='35'
      color='#000000'
      loading={isLoading}
      speedMultiplier='1'
    />
  );
}
