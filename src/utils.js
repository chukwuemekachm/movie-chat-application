export function formatRuntime(runtime) {
  const mins = runtime % 60;
  const hrs = Math.floor(runtime / 60);

  return `${hrs}h ${mins}m`;
}

export function formatMovieID(title, runtime) {
  return `${title.replace(/ /g, '-').replace(/:/g, '').replace(/'/g, '').trim().toLowerCase()}-${runtime}`;
}
