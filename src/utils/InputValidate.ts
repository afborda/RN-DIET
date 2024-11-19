export const validateDate = (date: string) => {
  const dateRegex = /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
  return dateRegex.test(date);
};

export const validateTime = (time: string) => {
  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
  return timeRegex.test(time);
};
