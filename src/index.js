module.exports = function check(str, bracketsConfig) {
    const parenthesisArr = [];
    const leftBrackets = [];
    const rightBrackets = [];

    if (str.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < bracketsConfig.length; ++i) {
        leftBrackets.push(bracketsConfig[i][0]);
        rightBrackets.push(bracketsConfig[i][1]);

        const leftCount = str.split('').filter(x => x === bracketsConfig[i][0]).length;
        const rightCount = str.split('').filter(x => x === bracketsConfig[i][1]).length;
        if (leftCount !== rightCount) {
            return false;
        }
    }

    for (let i = 0; i < str.length; ++i) {
        const curBracket = str[i];
        const curLength = parenthesisArr.length;
        const lastBracket = parenthesisArr[curLength - 1];
        const isLeftBracketLast = leftBrackets.indexOf(lastBracket) !== -1;

        if (curLength === 0 && rightBrackets.indexOf(curBracket) !== -1 && (leftBrackets.indexOf(curBracket) !== rightBrackets.indexOf(curBracket))) {
            return false;
        } else if (isLeftBracketLast &&
            (leftBrackets.indexOf(lastBracket) === rightBrackets.indexOf(curBracket))) {
            parenthesisArr.pop();
            continue;
        }

        parenthesisArr.push(curBracket);
    }

    return parenthesisArr.length === 0;
}
