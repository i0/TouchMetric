function template(e, type, slider) {
    let obj = {
        force: e.force,
        locationX: e.locationX,
        locationY: e.locationY,
        pageX: e.pageX,
        pageY: e.pageY,
        timestamp: e.timestamp,
    }
    if (slider) {
        obj.slider = slider;
    }
    return obj;
}

var cacheType = [];
var cacheMove = [];
var cacheSwipe = [];
export default function logger(activity, e, type, slider) {
    let obj = template(e, type, slider);
    if (type === 'move') {
        cacheMove.push(obj)
    } else {
        cacheSwipe.push(obj)
    }
    // console.log(count++)
}

export function typeLogger(string, word, originalWord) {
    let obj = {
        word: word,
        string: string,
        originalWord: originalWord,
        timestamp: Date.now()
    };
    cacheType.push(obj);
}

export function extract() {
    return [
        {type: 'move', data: cacheMove},
        {type: 'swipe', data: cacheSwipe},
        {type: 'type', data: cacheType}
    ];
}