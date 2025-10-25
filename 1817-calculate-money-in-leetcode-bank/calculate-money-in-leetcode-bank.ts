function totalMoney(n: number): number {
    const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    let weeksCount = 0;
    let day = 0;
    let money = 0;

    for (let i = 0; i < n; i++) {

        if (!week[day]) {
            day = 1;
            weeksCount++;
        } else {
            day++;
        }
        money += weeksCount + day
    }
    return money;
};