import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import SearchForm from './SearchForm';
import SearchResultCard from './SearchResultCard';
import Loading from './Loading';
import { handleFoodData } from './api/fetchFood';

const searchWasFound = result => (result.length > 0);

export default function SearchFood({ meal, close }) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    if(error) setError(undefined);
    setIsLoading(true);
    try {
      const result = await handleFoodData(query);
      setResponse(result);
    } catch(error) {
      setError(error.message)
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className='fixed inset-0 bg-black/75 flex'>
      <main className='mx-auto flex flex-col items-center w-[min(100%,500px)] bg-[ghostwhite] md:rounded md:h-fit md:max-h-[40%] md:mt-10'>
        <div className='px-4 w-full'>
          <button className='self-end my-4' onClick={close}>
            <Icon path={mdiClose} size={1} />
          </button>
          <SearchForm
            query={query}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        {
          isLoading
            ? <Loading />
            : error
              ? <div className='py-10'>{error}</div>
              : (
                response.length > 0 &&
                <ul className='h-100% overflow-y-auto mb-5 flex flex-col gap-3'>
                  {
                    response.map((food, index) =>
                      <SearchResultCard
                        key={index}
                        food={food}
                        meal={meal}
                        close={close}
                      />
                    )
                  }
                </ul>
              )
        }
      </main>
    </div>
  );
};