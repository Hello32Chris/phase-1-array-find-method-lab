function superbowlWin(array) {
    let winResult = array.find(thing => thing.result === "W");
    if (winResult) {
        return winResult.year;
    } else {
        return undefined;
    }
}









