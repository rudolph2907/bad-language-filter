# bad-language-filter
A javascript module for detecting, removing and replacing bad language from content.

### Install with npm
npm install bad-language-filter --save

### Initialize
var BadLanguageFilter = require('bad-language-filter');
var filter = new BadLanguageFilter();

### Functions
**contains**
filter.contains("content");

The contains function will return **true/false** whether any of the bad words can be found in the content.

**match**
filter.match("content");

The match function will return the instances of the bad words to be found in the content.






