let day = +prompt("gün giriniz");
let month = +prompt("ay giriniz");

let yaz = "yaz";
let ilkbahar = "ilkbahar";
let sonbahar = "sonbahar";
let kis = "kış";

if (
  (month === 2 && day >= 21) ||
  month === 3 ||
  month === 4 ||
  (month === 5 && day <= 31)
) {
  console.log(ilkbahar);
} else if (
  (month === 6 && day > 1) ||
  month === 7 ||
  month === 8 ||
  (month === 9 && day <= 21)
) {
  console.log(yaz);
} else if (
  (month === 9 && day > 22) ||
  month === 10 ||
  month === 11 ||
  (month === 12 && day <= 20)
) {
  console.log(sonbahar);
} else if (
  (month === 12 && day > 21) ||
  month === 1 ||
  month === 2 ||
  (month === 3 && day <= 20)
) {
  console.log(kis);
} else {
  console.log("yanlış değer");
}
