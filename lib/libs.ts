export function determineState(value:number) {
    if (value >= -6 && value <= 6) {
        return "침착";
    } else if (value >= -18 && value <= -7) {
        return "분노 1";
    } else if (value >= 7 && value <= 18) {
        return "우울 1";
    } else if (value >= -28 && value <= -19) {
        return "분노 2";
    } else if (value >= 19 && value <= 28) {
        return "우울 2";
    } else if (value >= -40 && value <= -29) {
        return "분노 3";
    } else if (value >= 29 && value <= 40) {
        return "우울 3";
    }
    return "알 수 없는";
}
export function classifyType(number:number) {
    switch (number) {
        case 1:
            return "배려하는 타입";
        case 2:
            return "스트레스를 바로 해소하는 타입";
        case 3:
            return "참는 타입";
        case 4:
            return "신경쓰지 않는 타입";
    }
    return "알 수 없는";
}

export function getBirthYearRange(){
    const NOW = new Date();
    let CURRENT_YEAR = NOW.getFullYear();
    let YEAR_RANGE = [] as number[];

    for(let i=1950; i <= CURRENT_YEAR; i++){
        YEAR_RANGE.push(i);
    }

    YEAR_RANGE = YEAR_RANGE.sort((a:number, b:number) => (b - a));

    return YEAR_RANGE;
}