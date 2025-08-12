function numberOfWays(n: number, x: number): number {
    const MOD = 1_000_000_007;
    const cache: Record<string, number> = {};

    function dfs(curr: number, total: number): number {
        if (total === n) return 1;
        if (total > n || Math.pow(curr, x) > n) return 0;

        const key = `${curr}-${total}`;
        if (cache[key] !== undefined) return cache[key];

        const power = Math.pow(curr, x);

        const take = dfs(curr + 1, total + power) % MOD;
        const skip = dfs(curr + 1, total) % MOD;

        const res = (take + skip) % MOD;
        cache[key] = res;
        return res;
    }

    return dfs(1, 0);
}