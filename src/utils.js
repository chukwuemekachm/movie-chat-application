export function formatRuntime(runtime) {
  const mins = runtime % 60;
  const hrs = Math.floor(runtime / 60);

  return `${hrs}h ${mins}m`;
}
