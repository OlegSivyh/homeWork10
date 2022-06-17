function homeWork() {
    let arr = [];

    while (true) {
        const string = prompt('Ждем вашего ввода');

        if (string === null || string === '') {
            break;
        } else {
            arr.push(string);
        }

    }
    let uPper = arr.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);
    return  uPper.sort(function (a,b) {
        if(a.toLowerCase().length < b.toLowerCase().length)
            return -1
        if(a.toLowerCase().length > b.toLowerCase().length){
            return 1
        }
        else {
            return  0
        }
    });

}
homeWork();