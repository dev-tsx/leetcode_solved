function totalMoney(n: number): number {
    let mondayAmount = 0;
    let weekDay = 0;
    let result = 0;
    for (let i = 0; i < n; i++) {

        if (weekDay === 7) {
            weekDay = 1;
            mondayAmount++;
        } else {
            weekDay++;
        }
        result += mondayAmount + weekDay
    }
    return result;
};