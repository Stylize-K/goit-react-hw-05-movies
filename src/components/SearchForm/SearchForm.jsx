import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  FormContainer,
  Form,
  ButtonStyled,
  InputStyled,
} from './SearchForm.styled';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('searchQuery') ?? '';

  //Функція сабміту форми пошуку
  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.searchQuery.value.trim() === '') {
      toast.error('You didnt enter anything');
      return;
    }
    setSearchParams({ searchQuery: evt.target.elements.searchQuery.value });
    evt.currentTarget.reset();
  };

  return (
    <FormContainer>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          placeholder="Enter movie name..."
          name="searchQuery"
          defaultValue={search}
        />
        <ButtonStyled type="submit">Search</ButtonStyled>
      </Form>
    </FormContainer>
  );
};
