export function getAgeFrom(birthDate) {
  if (!birthDate) {
    return "?";
  }

  const [year, month, day] = birthDate.split("-");
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() * 1;
  const todayDate = today.getDate();

  const age = todayYear - parseInt(year, 10);

  if (parseInt(month, 10) > todayMonth) {
    return age - 1;
  }

  if (parseInt(month, 10) === todayMonth && parseInt(day, 10) > todayDate) {
    return age - 1;
  }

  return age;
}
