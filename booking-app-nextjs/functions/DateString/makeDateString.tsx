// ThuSep212023 다음과 같은 string을 입력 받아
//
//     startDate: `${year}-${month}-${day}T00:00:00.000+00:00`,
//     endDate: `${year}-${month}-${day}T23:59:59.999+00:00`
// 
// 위의 형태로 반환

import monthNameToPaddedNumber from "./monthNameToPaddedNumber";

const makeDateString: tMakeDateString = (date) => {
    const year = date.slice(8, 12);
    const monthEn = date.slice(3, 6);
    if (monthEn === undefined) {
        return {
            startDate: `비었음`,
            endDate: `비었음`
        }
    }
    const month = monthNameToPaddedNumber(monthEn);
    const day = date.slice(6, 8);
    return {
        startDate: `${year}-${month}-${day}T00:00:00.000+00:00`,
        endDate: `${year}-${month}-${day}T23:59:59.999+00:00`
    };
}

type tMakeDateString = {
    (date: string): {
        startDate: string,
        endDate: string
    }
}

export default makeDateString;