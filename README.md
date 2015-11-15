# bad-language-filter
A node.js module for detecting, removing and replacing bad language from content.

##  Install with npm
npm install bad-language-filter --save

##  Initialize
var BadLanguageFilter = require('bad-language-filter');

var filter = new BadLanguageFilter();

## Functions
**contains**

filter.contains("content");

The contains function will return **true/false** whether any of the bad words can be found in the content.

**match**

filter.match("content");

The match function will return the instances of the bad words to be found in the content.

**removeWords**

filter.removeWords("content");

The match function will remove the instances of the bad words to be found in the content.

**replaceWords**

filter.replaceWords("content", "replaceword");

The match function will replace the instances of the bad words with the given "replaceword" to be found in the content.

**badwords.json** contains the list of bad words that will be used to filter the content.  You can change and update this, just remember to restart your app again.






