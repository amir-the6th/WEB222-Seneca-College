const caseData = require('../toronto-covid-cases-partial.json');
const { getCasesByNeighbourhood } = require('./cases');

describe('Problem 05 - getCasesByNeighbourhood() function', function() {
  test('exact neighbourhood name returns an Array of expected results', function() {
    let neighbourhoodName = 'Niagara';
    let results = getCasesByNeighbourhood(caseData, neighbourhoodName);
    expect(Array.isArray(results)).toBe(true);
    results.forEach(result => expect(result['Neighbourhood Name']).toBe(neighbourhoodName));
  });

  test('exact neighbourhood name only works if the case is the same', function() {
    let neighbourhoodName = 'niagara';
    let results = getCasesByNeighbourhood(caseData, neighbourhoodName);
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBe(0);
  });

  test('fuzzy neighbourhood name returns an Array of expected results', function() {
    let neighbourhoodName = 'Niagara';
    let results = getCasesByNeighbourhood(caseData, neighbourhoodName, true);
    expect(Array.isArray(results)).toBe(true);
    results.forEach(result => expect(result['Neighbourhood Name']).toBe(neighbourhoodName));
  });

  test('fuzzy neighbourhood fragment returns an Array of expected results', function() {
    let neighbourhoodName = 'Niagara';
    let results = getCasesByNeighbourhood(caseData, 'gar', true);
    expect(Array.isArray(results)).toBe(true);
    results.forEach(result => expect(result['Neighbourhood Name']).toBe(neighbourhoodName));
  });

  test('fuzzy neighbourhood fragment with mixed case returns an Array of expected results', function() {
    let neighbourhoodName = 'Niagara';
    let results = getCasesByNeighbourhood(caseData, 'IaGA', true);
    expect(Array.isArray(results)).toBe(true);
    results.forEach(result => expect(result['Neighbourhood Name']).toBe(neighbourhoodName));
  });

  test('fuzzy neighbourhood fragment with upper case returns an Array of expected results', function() {
    let neighbourhoodName = 'Niagara';
    let results = getCasesByNeighbourhood(caseData, 'IAGA', true);
    expect(Array.isArray(results)).toBe(true);
    results.forEach(result => expect(result['Neighbourhood Name']).toBe(neighbourhoodName));
  });

  test('fuzzy neighbourhood fragment with lower case returns an Array of expected results', function() {
    let neighbourhoodName = 'Niagara';
    let results = getCasesByNeighbourhood(caseData, 'iaga', true);
    expect(Array.isArray(results)).toBe(true);
    results.forEach(result => expect(result['Neighbourhood Name']).toBe(neighbourhoodName));
  });
});
