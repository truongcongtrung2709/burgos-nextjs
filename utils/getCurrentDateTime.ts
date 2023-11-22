export const getCurrentDateTime = () =>{
  const today = new Date();
  const time = today.getTime();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${time}/${month}/${date}/${year}`;
}