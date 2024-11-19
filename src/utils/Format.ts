export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0"); // Garantir 2 dígitos para o dia
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Garantir 2 dígitos para o mês
  const year = date.getFullYear(); // Ano com 4 dígitos

  return `${day}/${month}/${year}`;
};

export const formatTime = (time: number) => {
  const date = new Date(time);
  const hours = date.getHours().toString().padStart(2, "0"); // Formata as horas com 2 dígitos
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Formata os minutos com 2 dígitos
  return `${hours}:${minutes}`;
};
