import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <p className={css.error}>
      Unfortunately, there was an unforeseen error. Please try reloading the
      page or visit it later.
    </p>
  );
}
