export default function normator(tel) {
  let normtel = tel.replace(/^8/, '+7');
  // eslint-disable-next-line no-useless-escape
  normtel = normtel.replace(/[\s-\(\)]/g, '');
  return normtel;
}

// const a = normator('8 (927) 000-00-00');
// console.log(a);
// const aa = normator('+7 960 000 00 00');
// console.log(aa);
// const aaa = normator('+86 000 000 0000');
// console.log(aaa);
