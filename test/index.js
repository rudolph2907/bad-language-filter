var should = require('chai').should(),
    BadLanguageFilter = require('../index');

describe('test contains function', function() {
  it('should contain bad words', function() {
    var filter = new BadLanguageFilter();
	filter.contains("shit fuck").should.equal(true);
  });
  
  it('should not bad words', function() {    
	var filter = new BadLanguageFilter();
	filter.contains("no bad words").should.equal(false);
  });
});

