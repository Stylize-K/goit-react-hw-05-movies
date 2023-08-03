import { useSearchParams } from 'react-router-dom';
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
    setSearchParams({ searchQuery: evt.target.elements.searchQuery.value });
    evt.currentTarget.reset();
  };

  return (
    <FormContainer>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          placeholder="enter a query"
          name="searchQuery"
          defaultValue={search}
        />
        <ButtonStyled type="submit">Search</ButtonStyled>
      </Form>
    </FormContainer>
  );
};
