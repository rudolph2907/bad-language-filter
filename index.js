var fs = require('fs');
var badwords = require('./badwords.json').badwords;
var TextFinder = require('./textfinder');

// Constructor
function BadLanguageFilter() {
	this.textfinder = new TextFinder(badwords);
}

// Check if any bad words is contained in content
BadLanguageFilter.prototype.contains = function(content) {
	return this.textfinder.contains(content);
};

// Check if any bad words is contained in content and returns array of words
BadLanguageFilter.prototype.matches = function(content) {
    return this.textfinder.matches(content);
};

// Remove bad words from content
BadLanguageFilter.prototype.removeWords = function(content) {
    return this.textfinder.removeWords(content);
};

// Replace bad words from content
BadLanguageFilter.prototype.replaceWords = function(content, replacestr) {
    return this.textfinder.replaceWords(content, replacestr);
};

module.exports = BadLanguageFilter;