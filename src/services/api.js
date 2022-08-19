const base = import.meta.env.API_BASE;
const key = import.meta.env.API_KEY;

const baseUrl = async (url) => {
  const request = await fetch(`${base}${url}${key}`);
  const response = await request.json();
  return response;
};

export default baseUrl;
