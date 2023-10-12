const addKey = (query: any, queryKey: string, queryValue: string) => {
  const searchParams = new URLSearchParams(query);
  searchParams.set(queryKey, queryValue);
  return `/?${searchParams.toString()}`;
};

const addKeyToGroup = (query: any, queryKey: string, queryValue: string) => {
  const searchParams = new URLSearchParams(query);
  let values = query[queryKey]?.split(",") ?? [];

  values.push(queryValue);
  searchParams.set(queryKey, values.join(","));

  return `/?${searchParams.toString()}`;
};

const removeKeyFromGroup = (
  query: any,
  queryKey: string,
  queryValue: string
) => {
  const searchParams = new URLSearchParams(query);
  let values = searchParams.getAll(queryKey)[0]?.split(",");
  values = values.filter((v) => v != queryValue);
  searchParams.set(queryKey, values.join(","));
  return `/?${searchParams.toString()}`;
};

export const between = (x: number, min: number | null, max: number | null) => {
  const isMinOK = min == null || x >= min;
  const isMaxOk = max == null || x <= max;
  return isMinOK && isMaxOk;
};

export { addKeyToGroup, removeKeyFromGroup, addKey };
