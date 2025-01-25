// epoch must be in milliseconds
export const epochToDate = (epoch: number): string => {
  const date = new Date(epoch);

  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

export const epochToHour = (epoch: number): string => {
  const date = new Date(epoch);

  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
};
