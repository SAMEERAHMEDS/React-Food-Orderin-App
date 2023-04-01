export function filterData(searchText, restaurants) {
  const resultData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return resultData;
}
