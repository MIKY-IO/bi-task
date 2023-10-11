const addKey = (query: any, queryKey: string, queryValue: string) => {
  const searchParams = new URLSearchParams(query);
  let values = query[queryKey]?.split(",") ?? [];

  values.push(queryValue);
  searchParams.set(queryKey, values.join(","));
  console.log(searchParams.getAll(queryKey));

  return `/?${searchParams.toString()}`;
};

const removeKey = (query: any, queryKey: string, queryValue: string) => {
  const searchParams = new URLSearchParams(query);
  let values = searchParams.getAll(queryKey)[0]?.split(",");
  values = values.filter((v) => v != queryValue);
  searchParams.set(queryKey, values.join(","));
  return `/?${searchParams.toString()}`;
};

export { addKey, removeKey };
