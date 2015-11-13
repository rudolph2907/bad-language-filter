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

describe('test matches function', function() {
  it('should return 2 matches', function() {
    var filter = new BadLanguageFilter();
    filter.matches("cock fuck ").length.should.equal(2);
  });

  it('should return 1 match', function() {
    var filter = new BadLanguageFilter();
    filter.matches("no bad fuck words").length.should.equal(1);
  });

  it('should return no match', function() {
    var filter = new BadLanguageFilter();
    (filter.matches("no bad words") === null).should.equal(true);
  });
});

describe('test removeWords function', function() {
  it('should return content without bad words', function() {
    var filter = new BadLanguageFilter();
    filter.removeWords("cock fuck ").length.should.equal(0);
  });

  it('should not updated any content', function() {
    var filter = new BadLanguageFilter();
    var originalString = "no bad words";
    filter.removeWords(originalString).should.equal(originalString);
  });
});

describe('test replaceWords function', function() {
  it('should return updated content without any bad words', function() {
    var filter = new BadLanguageFilter();
    filter.replaceWords("cock fuck ", "test ").should.equal("test test ");
  });

  it('should not updated any content', function() {
    var filter = new BadLanguageFilter();
    var originalString = "no bad words";
    filter.replaceWords(originalString, "test").should.equal(originalString);
  });
});


