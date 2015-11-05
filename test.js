var BadLanguageFilter = require('./bad-language-filter');

var textfinder = new BadLanguageFilter();
console.log('hello mater: ' + textfinder.contains('hello mater'));
console.log('no thanks: ' + textfinder.contains('no thanks'));
console.log('hello mater, no thanks: ' + textfinder.contains('hello mater, no thanks'));
console.log('haha: ' + textfinder.contains('haha'));

console.log('hello mater: ' + textfinder.matches('hello mater'));
console.log('no thanks: ' + textfinder.matches('no thanks'));
console.log('hello mater, no thanks: ' + textfinder.matches('hello mater, no thanks'));
console.log('haha: ' + textfinder.matches('haha'));

console.log('hello mater: ' + textfinder.removeWords('hello mater'));
console.log('no thanks: ' + textfinder.removeWords('no thanks'));
console.log('hello mater, no thanks: ' + textfinder.removeWords('hello mater, no thanks'));
console.log('haha: ' + textfinder.removeWords('haha'));

console.log('hello mater: ' + textfinder.replaceWords('hello mater', 'word'));
console.log('no thanks: ' + textfinder.replaceWords('no thanks', 'word'));
console.log('hello mater, no thanks: ' + textfinder.replaceWords('hello mater, no thanks', 'word'));
console.log('haha: ' + textfinder.replaceWords('haha', 'word'));

var fs = require('fs');

fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log('text contains:' + textfinder.contains(data));
    console.log('text matches:' + textfinder.matches(data));
    console.log('text remove:' + textfinder.removeWords(data));
    console.log('text replace:' + textfinder.replaceWords(data, 'WHAT'));
});

