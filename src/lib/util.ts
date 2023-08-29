export function getSafeImageUrl(url: string | undefined) {
  if (!url)
    return 'https://via.placeholder.com/230x130.jpg/ffffff?text=No+Movie+Poster';
  return `https://image.tmdb.org/t/p/original${url}`;
}
