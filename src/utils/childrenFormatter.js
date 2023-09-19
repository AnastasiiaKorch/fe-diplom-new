const childrenFormatter = (number) => {
  let word;
  switch (number) {
    case 1:
      word = 'ребёнок';
      break;
    case 2:
    case 3:
    case 4:
      word = 'ребёнка';
      break;
    default:
      word = 'детей';
  }

  return word;
}

export default childrenFormatter;