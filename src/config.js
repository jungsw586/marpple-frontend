// 필요한 전역 변수 저장
// endpoint 주소
export const KAKAO_KEY = "ad06f292f2e019a3ebd5c3ebd090ea6d";
export const AddComma = price => {
  let priceToString = price.toString();
  let cnt = 0;
  let commaPrice = [];
  for (let i = priceToString.length - 1; i >= 0; i--) {
    if (cnt === 3) {
      commaPrice.unshift(",");
      cnt = 0;
    }
    commaPrice.unshift(priceToString[i]);
    cnt = cnt + 1;
  }
  return commaPrice.reduce((acc, curr) => acc + curr);
};
