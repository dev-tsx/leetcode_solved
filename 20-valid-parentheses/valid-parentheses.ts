function isValid(s: string): boolean {
    const st = [];

    const map = {
        ")":"(",
        "]":"[",
        "}":"{"
    }

    for(let p of s){
        if(map[p] && st[st.length - 1] == map[p]) st.pop();
        else if(map[p] && st[st.length - 1] !== map[p]) return false;
        else st.push(p);
    }
    return st.length === 0
};