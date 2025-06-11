import { Formik, Form, Field } from 'formik';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = ({ searcher }, actions) => {
    if (searcher.trim() === '') {
      toast.error('Enter text to search for images.');
      return;
    }
    onSubmit(searcher);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ searcher: '' }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name='searcher'
            type='text'
            autocomplete='off'
            autofocus
            placeholder='Search images and photos'
          />
          <button className={css.button} type='submit'>
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}
