export const validateDate = (date: string): boolean => {
  console.log(">>>> validateDate", date);

  const dateRegex = /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
  return dateRegex.test(date);
};

export const validateTime = (time: string): boolean => {
  console.log(">>>> validateTime", time);

  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
  console.log(">>>>", time, timeRegex.test(time));

  return timeRegex.test(time);
};
