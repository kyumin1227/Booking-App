// 달의 이름이 영어로 들어오면 숫자로 변경하여 내보내는 함수

const monthNameToPaddedNumber = (monthName: string): string => {
  const months: { [key: string]: string } = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  };

  // 입력된 월 이름을 대문자로 변환하여 매핑된 숫자를 가져옴
  const paddedNumber = months[monthName.charAt(0).toUpperCase() + monthName.slice(1)];

    // undefined면 함수 실행을 시키지 않음
//     if (paddedNumber === undefined) {
//         // console.log("비어있음");
//         // throw new Error('잘못된 월 이름입니다.', paddedNumber);
//   }

  return paddedNumber;
}

export default monthNameToPaddedNumber;