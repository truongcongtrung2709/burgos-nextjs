export const getCurrentDateTime = () =>{
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${hour}:${minutes}/${month}/${date}/${year}`;
}