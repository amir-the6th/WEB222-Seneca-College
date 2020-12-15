/**
 * WEB222 – Assignment 02
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Amirhossein Sabagh
 *      Student ID: 152956199
 *      Date: 2020-10-18
 *
 * Please see all unit tests in the files problem-01.test.js, problem-02.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to work with the cases data.
 *
 * Welcome to Assignment 2! In this assignment, you're going to be practicing
 * different ways of working with JavaScript Objects, both built-in Objects
 * like Array and String, and also working with custom Objects you create.
 *
 * Before you dive into all the problems below, let's spend a minute helping you
 * learn how to work with the sample user data included in this assignment.
 *
 * We've included two extra files in this assignment, `toronto-covid-cases-full.json`
 * and `toronto-covid-cases-partial.json`.
 *
 * These are JSON files, which is a text format for representing Objects (NOTE:
 * we'll talk more about JSON in later weeks, and you can read more about it at
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).
 *
 * You can think of JSON files like mini databases for loading Object data into
 * a program. We'll use it in this assignment to load a list of COVID-19 case
 * data for the City of Toronto.
 *
 * The City of Toronto publishes this data every week at the following URL:
 *
 * https://open.toronto.ca/dataset/covid-19-cases-in-toronto/
 *
 * You can download the data in a number of formats:
 *
 * - JSON: https://ckan0.cf.opendata.inter.prod-toronto.ca/download_resource/e5bf35bc-e681-43da-b2ce-0242d00922ad?format=json
 * - CSV: https://ckan0.cf.opendata.inter.prod-toronto.ca/download_resource/e5bf35bc-e681-43da-b2ce-0242d00922ad?format=csv
 * - XML: https://ckan0.cf.opendata.inter.prod-toronto.ca/download_resource/e5bf35bc-e681-43da-b2ce-0242d00922ad?format=xml
 *
 * This COVID-19 Case data is an Array where each item in the Array is a custom
 * Case Object. The Array is really [case1, case2, case3, ...], and each Case
 * Object has the following structure:
 *
 *  {
 *      "Age Group": "40 to 49 Years",
 *      "Neighbourhood Name": "Annex",
 *      "Outcome": "RESOLVED",
 *      "Client Gender": "FEMALE",
 *      "Classification": "CONFIRMED",
 *      "FSA": "M5R",
 *      "Currently Hospitalized": "No",
 *      "Episode Date": "2020-09-12",
 *      "Assigned_ID": 17712,
 *      "Outbreak Associated": "Sporadic",
 *      "Ever Intubated": "No",
 *      "Reported Date": "2020-09-16",
 *      "Currently in ICU": "No",
 *      "Source of Infection": "Healthcare",
 *      "_id": 161028,
 *      "Ever in ICU": "No",
 *      "Ever Hospitalized": "No",
 *      "Currently Intubated": "No"
 *  }
 *
 * We've provided two versions of this file, because the amount of data is so large.
 * The file `toronto-covid-cases-full.json` contains 17,872 Case Objects and is
 * 10M in size! This file is a complete history of COVID-19 Case data in Toronto,
 * but is so large that your computer might have trouble processing it.
 *
 * If you want to use a smaller sample data set, we also include the file
 * `toronto-covid-cases-partial.json`, which contains 500 case Objects, and is
 * easier/faster to process.
 *
 * The unit tests in the problem test files will use the smaller file,
 * `toronto-covid-cases-partial.json`. However, your code in `analysis.js`
 * will use the complete `toronto-covid-cases-full.json` file.
 */

/*******************************************************************************
 * Problem 00: Learning to write our tests
 *
 * Each of the functions below will be passed a `cases` argument, which is
 * the Array of Case Objects.
 *
 * To get you started, write a function that gets the first element in the
 * cases Array, and returns only the _id String for this case.
 *
 * You can try running this test using the following command:
 *
 * npm test problem-00
 *
 * See if you can get this test to pass by fixing the bug in the code below.
 ******************************************************************************/
function firstId(cases) {
  // Get the first element from the cases Array
  let firstCase = cases[0];
  // TODO: fix this code to use dot notation to access the _id field only
  firstCase = firstCase._id;
  return firstCase;
}

/*******************************************************************************
 * Problem 01 Part 1: use a for-loop to iterate over Arrays
 *
 * Write a function named `neighbourhoodInfo(cases)` that loops over every case
 * Object in the cases array, and calls `console.log()`, passing it a formatted
 * String:
 *
 * the case's Neighbourhood Name, a space, a '(', the Outcome, and a ')':
 *
 *   "Niagara (ACTIVE)"
 *
 * In your solution, make use of a for-loop to iterate over the items in users
 *
 * Your function doesn't need to return anything.
 ******************************************************************************/
function neighbourhoodInfo(cases) {
  for (let i = 0; i < cases.length; i++) {
    console.log(`${cases[i]['Neighbourhood Name']} (${cases[i]['Outcome']})`);
  }
}

/*******************************************************************************
 * Problem 01 Part 2: use forEach() to iterate over Arrays
 *
 * Rewrite your code from `neighbourhoodInfo(cases)` to use a forEach() function
 * instead of a for-loop.  Everything else should be identical.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 ******************************************************************************/
function neighbourhoodInfo2(cases) {
  cases.forEach(function(caseNo) {
    console.log(`${caseNo['Neighbourhood Name']} (${caseNo['Outcome']})`);
  });
}

/*******************************************************************************
 * Problem 02: getCasesByFSA(cases, fsa)
 *
 * Write a function that takes an Array of cases, as well as an FSA String value.
 * An FSA if a forward sortation area (the first 3 characters in a Canadian
 * postal code):
 *
 * https://en.wikipedia.org/wiki/Postal_codes_in_Canada#Forward_sortation_areas
 *
 * Return a new Array with only those case Objects that contain the given fsa
 * value.
 *
 * You should support the FSA value being CAPITALIZED or lowercase, as well
 * as deal with any case Objects that don't have an FSA value (e.g., null/undefined)
 *
 * In your solution, make use of the following:
 *
 *  - create an empty array
 *  - use a for...of loop to loop over all Objects in cases
 *  - if a case includes the given fsa, add the case Object to the empty Array
 *
 * Your function should return the newly created Array.
 ******************************************************************************/
function getCasesByFSA(cases, fsa) {
  let getFSA = [];
  let j = 0;
  for (const caseNo of cases) {
    if (caseNo.FSA === fsa && caseNo.FSA !== null && /^[A-Za-z]\d[A-Za-z]$/i) {
      caseNo.FSA = getFSA[j];
      j++;
    }
  }
  return getFSA;
}

/*******************************************************************************
 * Problem 3 Part I: transformCase(original) and transformCases(cases)
 *
 * Write functions to transform COVID case data into a new Object format.
 *
 * The `transformCase(original)` function takes an Object like so:
 *
 * {
 *   "Age Group": "20 to 29 Years",
 *   "Neighbourhood Name": "Humewood-Cedarvale",
 *   "Outcome": "ACTIVE",
 *   "Client Gender": "FEMALE",
 *   "Classification": "CONFIRMED",
 *   "FSA": "M6C",
 *   "Currently Hospitalized": "No",
 *   "Episode Date": "2020-09-11",
 *   "Assigned_ID": 17704,
 *   "Outbreak Associated": "Sporadic",
 *   "Ever Intubated": "No",
 *   "Reported Date": "2020-09-18",
 *   "Currently in ICU": "No",
 *   "Source of Infection": "Close contact",
 *   "_id": 161020,
 *   "Ever in ICU": "No",
 *   "Ever Hospitalized": "No",
 *   "Currently Intubated": "No"
 * },
 *
 * And transforms the data in the `original` case Object into a new Object
 * that looks like this (see comments on right-hand side with details):
 *
 * {
 *   id: 161020,                            // rename _id to id
 *   isActive: true,                        // true if Outcome is "ACTIVE", false otherwise
 *   neighbourhood: "Humewood-Cedarvale",   // rename Neighbourhood Name to neighbourhood
 *   hospitalInfo: {
 *     current: {
 *       hospitalized: false,               // true if Currently Hospitalized is Yes, false otherwise
 *       inICU: false                       // true if Currently In ICU is Yes, false otherwise
 *       intubated: false,                  // true if Currently Intubated is Yes, false otherwise
 *     },
 *     historical: {
 *       hospitalized: false,               // true if Ever Hospitalized is Yes, false otherwise
 *       inICU: false                       // true if Ever In ICU is Yes, false otherwise
 *       intubated: false,                  // true if Ever Intubated is Yes, false otherwise
 *     }
 *   }
 * }
 ******************************************************************************/
function transformCase(original) {
  // let caseNew = {
  //   id: original._id,
  //   isActive: function() {
  //     let result;
  //     if (original.Outcome === 'ACTIVE') {
  //       result = true;
  //     } else result = false;
  //     return result;
  //   },
  //   neighbourhood: original['Neighbourhood Name'],
  //   hospitalInfo: {
  //     current: {
  //       hospitalized: original['Currently Hospitalized'],
  //       inICU: original['Currently in ICU'],
  //       intubated: original['Currently Intubated']
  //     },
  //     historical: {
  //       hospitalized: original['Ever Hospitalized'],
  //       inICU: original['Ever in ICU'],
  //       intubated: original['Ever Intubated']
  //     }
  //   }
  // };
  // return caseNew;

  let caseNew = Object.create(original);

  caseNew.id = caseNew._id;
  delete caseNew._id;

  caseNew.isActive = caseNew.Outcome === 'ACTIVE' ? true : false;
  delete caseNew.Outcome;
  // if (caseNew.isActive === 'ACTIVE') {
  //   caseNew.isActive = true;
  // } else caseNew.isActive = false;

  caseNew.neighbourhood = caseNew['Neighbourhood Name'];
  delete caseNew['Neighbourhood Name'];

  caseNew.hospitalInfo = {};
  caseNew.hospitalInfo.current = {};
  caseNew.hospitalInfo.current.hospitalized =
    caseNew['Currently Hospitalized'] === 'Yes' ? true : false;
  delete caseNew['Currently Hospitalized'];
  // if (caseNew.hospitalInfo.current.hospitalized === 'Yes') {
  //   caseNew.hospitalInfo.current.hospitalized = true;
  // } else caseNew.hospitalInfo.current.hospitalized = false;

  caseNew.hospitalInfo.current.inICU = caseNew['Currently in ICU'] === 'Yes' ? true : false;
  delete caseNew['Currently in ICU'];
  // if (caseNew.hospitalInfo.current.inICU === 'Yes') {
  //   caseNew.hospitalInfo.current.inICU = true;
  // } else caseNew.hospitalInfo.current.inICU = false;

  caseNew.hospitalInfo.current.intubated = caseNew['Currently Intubated'] === 'Yes' ? true : false;
  delete caseNew['Currently Intubated'];
  // if (caseNew.hospitalInfo.current.intubated === 'Yes') {
  //   caseNew.hospitalInfo.current.intubated = true;
  // } else caseNew.hospitalInfo.current.intubated = false;

  caseNew.hospitalInfo.historical = {};
  caseNew.hospitalInfo.historical.hospitalized =
    caseNew['Ever Hospitalized'] === 'Yes' ? true : false;
  delete caseNew['Ever Hospitalized'];
  // if (caseNew.hospitalInfo.historical.hospitalized === 'Yes') {
  //   caseNew.hospitalInfo.historical.hospitalized = true;
  // } else caseNew.hospitalInfo.historical.hospitalized = false;

  caseNew.hospitalInfo.historical.inICU = caseNew['Ever in ICU'] === 'Yes' ? true : false;
  delete caseNew['Ever in ICU'];
  // if (caseNew.hospitalInfo.historical.inICU === 'Yes') {
  //   caseNew.hospitalInfo.historical.inICU = true;
  // } else caseNew.hospitalInfo.historical.inICU = false;

  caseNew.hospitalInfo.historical.intubated = caseNew['Ever Intubated'] === 'Yes' ? true : false;
  delete caseNew['Ever Intubated'];
  // if (caseNew.hospitalInfo.historical.intubated === 'Yes') {
  //   caseNew.hospitalInfo.historical.intubated = true;
  // } else caseNew.hospitalInfo.historical.intubated = false;

  //caseNew.prototype = original;
  //let caseNew2 = new caseNew();

  return caseNew;
}

/*******************************************************************************
 * Problem 3 Part II: transformCases(cases) with iteration
 *
 * The `transformCases(cases)` (NOTE: transformCase singular vs. transformCases plural)
 * takes an Array of case Objects, and returns a new Array of transformed Objects,
 * calling transformCase() on each.
 *
 * In your solution, make use of the following:
 *
 *  - create a new empty Array to hold all the transformed cases
 *  - use a for-loop or .forEach() method to loop over all Objects in the of the cases Array
 *  - pass each case Object to your transformCase() function to get a new Object
 *  - add the new Object to your new array
 *  - return the new array with all the transformed Objects
 ******************************************************************************/
function transformCases(cases) {
  let transform = [];
  for (let i = 0; i < cases.length; i++) {
    transform[i] = transformCase(cases[i]);
  }

  return transform;
}

/*******************************************************************************
 * Problem 3 Part III: transformCases(cases) with .map()
 *
 * Rewrite your transformCases() function a second time using the Array .map() method
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * In your solution, make use of the following:
 *
 *  - use the .map() method of the cases Array to create a new Array
 *  - In the .map() method's function, call your transformCase() function
 *  - return the Array created by the .map() method
 ******************************************************************************/
function transformCases2(cases) {
  let Cases = cases.map(arg => {
    return transformCase(arg);
  });
  return Cases;
}

/*******************************************************************************
 * Problem 04: getCasesById()
 *
 * Write function to get the case Object(s) for a given ID, or list of IDs.
 *
 * Calling with a single `id` value should return the case Object
 *
 * getCasesById(cases, 161020) would return the Object in the cases Array with
 * an _id of id.  If an unknown id value is passed, return null:
 *
 * getCasesById(cases, -12341234) would return null.
 *
 * getCasesById(cases, 161020, 161021) would return an Array of case Objects
 * with two elements, matching the id values. If any of the ids in the list
 * are unknown, don't add anything to the returned Array.  For example, the
 * following would return an Array of 2 case Objects, ignoring the unknown
 * id:
 *
 * getCasesById(cases, 161020, 161021, -12341234) would return an Array of 2 cases.
 *
 * In your solution, make use of the following:
 *
 *  - use the .find() method of the cases Array to locate items by _id, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 ******************************************************************************/
function getCasesById(cases, ...ids) {
  if (arguments.length === 2) {
    let id;
    id = arguments[1];
    if (id < 0 || typeof id !== 'number') {
      return null;
    }

    let obj1;
    obj1 = cases.find(obj => {
      return obj._id === id;
    });
    return obj1;
  }

  let getID = [];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > 0 && typeof arguments[i] === 'number') {
      let obj2 = cases.find(({ _id }) => _id === arguments[i]);
      getID.push(obj2);
    }
  }
  return getID;
}

/*******************************************************************************
 * Problem 05: getCasesByNeighbourhood()
 *
 * Write function to get the case Object(s) for a given Neighbourhood Name.
 * Your function can be used in two ways.
 *
 * First, it can be used to do an exact match against the Neighbourhood Name
 * property, matching the whole name and its case:
 *
 * getCasesByNeighbourhood(cases, 'Niagara') should return an Array of case
 * Objects, where all cases have 'Niagara' for their Neighbourhood Name. If there
 * are no Objects that use this Neighbourhood Name, the returned Array should be
 * empty.  For example, getCasesByNeighbourhood(cases, 'unknown') would return
 * the empty Array [].  NOTE: with an exact match, 'Niagara' and 'niagara' are
 * not the same.
 *
 * The second way to use your function is to do a fuzzy match.  A fuzzy match
 * is a match where the given search string appears anywhere in the target, and
 * the match works regardless of case. For example, the string 'gar' would match
 * 'Niagara', since 'Niagara' contains 'gar', and 'Niagara' would also be a fuzzy
 * match with 'nia', even though the case is wrong.
 *
 * getCasesByNeighbourhood(cases, 'gar', true) should return an Array of case
 * Objects, where all the cases have a Neighbourhood Name that includes the
 * substring 'gar'.  NOTE the third argument `true` here, which indicates that
 * a fuzzy match is to be performed.
 *
 * One more issue to consider: not all Neighbourhood Names have been set in the
 * data, some are `null`.  Make sure you ignore these.
 ******************************************************************************/
function getCasesByNeighbourhood(cases, neighbourhoodName, fuzzy) {
  let getNHood = [];

  cases.forEach(obj => {
    if (obj['Neighbourhood Name']) {
      if (fuzzy === true) {
        let lowerObj = obj['Neighbourhood Name'].toLowerCase();
        let lowerArg = neighbourhoodName.toLowerCase();
        if (lowerObj.includes(lowerArg)) getNHood.push(obj);
      }
    }
  });
  return getNHood;
}

/*******************************************************************************
 * Problem 06: getAgeGroupSummary()
 *
 * Write function to get the number and percentage of cases for each Age Group
 * in the cases data set.
 *
 * getAgeGroupSummary(cases) should return an Object with the following structure:
 *
 * {
 *   'Unknown': {
 *     total: 36,
 *     percent: 0.002
 *   },
 *   '19 and younger': {
 *     total: 1293,
 *     percent: 0.073
 *   },
 *   '20 to 29 Years': {
 *     total: 2988,
 *     percent: 0.169
 *   },
 *   ...etc
 * }
 *
 * You must calculate the total number of cases, the total for each age group,
 * and then the percent of the whole for each age group.
 *
 * NOTE: some case Objects do not have an Age Group value (i.e., it is null).
 * You should treat these as the "Unknown" age category
 ******************************************************************************/
function getAgeGroupSummary(cases) {
  // let result;
  // for (const caseNo of cases) {
  //   result = (caseNo['Age Group'].match(new RegExp('19 and younger', 'g')) || []).length;
  // }
  let a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    f = 0,
    g = 0,
    h = 0,
    i = 0,
    j = 0;

  let total = cases.length;

  for (const caseNo of cases) {
    if (caseNo['Age Group'] === '19 and younger') a++;
    else if (caseNo['Age Group'] === '20 to 29 Years') b++;
    else if (caseNo['Age Group'] === '30 to 39 Years') c++;
    else if (caseNo['Age Group'] === '40 to 49 Years') d++;
    else if (caseNo['Age Group'] === '50 to 59 Years') e++;
    else if (caseNo['Age Group'] === '60 to 69 Years') f++;
    else if (caseNo['Age Group'] === '70 to 79 Years') g++;
    else if (caseNo['Age Group'] === '80 to 89 Years') h++;
    else if (caseNo['Age Group'] === '90 and older') i++;
    else j++;
  }

  let result = {
    Unknown: {
      total: j,
      percent: j / total
    },
    '19 and younger': {
      total: a,
      percent: a / total
    },
    '20 to 29 Years': {
      total: b,
      percent: b / total
    },
    '30 to 39 Years': {
      total: c,
      percent: c / total
    },
    '40 to 49 Years': {
      total: d,
      percent: d / total
    },
    '50 to 59 Years': {
      total: e,
      percent: e / total
    },
    '60 to 69 Years': {
      total: f,
      percent: f / total
    },
    '70 to 79 Years': {
      total: g,
      percent: g / total
    },
    '80 to 89 Years': {
      total: h,
      percent: h / total
    },
    '90 and older': {
      total: i,
      percent: i / total
    }
  };
  return result;
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.firstId = firstId;
exports.neighbourhoodInfo = neighbourhoodInfo;
exports.neighbourhoodInfo2 = neighbourhoodInfo2;
exports.getCasesByFSA = getCasesByFSA;
exports.transformCase = transformCase;
exports.transformCases = transformCases;
exports.transformCases2 = transformCases2;
exports.getCasesById = getCasesById;
exports.getCasesByNeighbourhood = getCasesByNeighbourhood;
exports.getAgeGroupSummary = getAgeGroupSummary;
