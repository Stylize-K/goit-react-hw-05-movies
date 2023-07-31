import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('searchQuery') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ searchQuery: evt.target.elements.searchQuery.value });
    evt.currentTarget.reset();
  };
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter a query"
          name="searchQuery"
          defaultValue={search}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

//   const updateQueryString = evt => {
//     if (evt.target.value === '') {
//       return setSearchParams({});
//     }
//     setSearchParams({ query: evt.target.value });
//   };
