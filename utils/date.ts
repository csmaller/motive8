export const prettyDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-us');
};

export const prettyTime = (date: string) => {
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(date).toLocaleTimeString('en-us', options);
};
