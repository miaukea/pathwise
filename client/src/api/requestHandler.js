export const requestHandler = async (url, method, options, data) => {
  const response = await fetch(url, {
    method: method,
    ...options,
    body: data ? JSON.stringify(data) : undefined, // Only stringify if data is defined
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};