export const saveTokenOnLocalStorage = (key: string, data: string) => localStorage
  .setItem(key, JSON.stringify(data));

export const getTokenFromLocalStorage = (key: string) => {
  
  const data = localStorage.getItem(key) || undefined;
    
  if (!data) {
    return undefined;
  }

  return JSON.parse(data)
  
}