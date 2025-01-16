function xorAllNums(n1: number[], n2: number[]): number {
        let XOR_1 = 0, XOR_2 = 0;

        if (n2.length % 2 != 0) 
            for (const n of n1) 
                XOR_1 ^= n;
                
        if (n1.length % 2 != 0) 
            for (const n of n2) 
                XOR_2 ^= n;

        return XOR_1 ^ XOR_2;
};