function totalMoney(n: number): number {
    let weeksCount = 0;
    let day = 0;
    let money = 0;

    for (let i = 0; i < n; i++) {

        if (day == 7) {
            day = 1;
            weeksCount++;
        } else {
            day++;
        }
        money += weeksCount + day
    }
    return money;
};