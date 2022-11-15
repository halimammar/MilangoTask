import {useQuery} from '@tanstack/react-query';

interface Params {
  perPage?: number;
  lang?: string;
}

const fetchRepos = async ({perPage, lang}: Params) => {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=created${
      lang ? `+language:${lang}` : ''
    }&sort=stars&order=desc&per_page=${perPage || 100}`,
  );
  return await res.json();
};
const useFetchRepos = ({perPage, lang}: Params) => {
  const {data, error, isLoading} = useQuery({
    queryKey: ['Respoitories', perPage, lang],
    queryFn: () => fetchRepos({perPage, lang}),
  });
  return {data, error, isLoading};
};

export default useFetchRepos;
