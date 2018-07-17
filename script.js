const fetch = require('node-fetch');

/**
 * When was John Snow born?
 * @return {Promise} Promise resolves to string year John Snow was born
 */
function q0() {
  return fetch('http://anapioficeandfire.com/api/characters/583')
    .then((resp) => {
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp.json();
    })
    .then((data) => {
      // console.log(data.born);
      return data.born;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function q1() {
  // Your code here
}

function q2() {
  // Your code here
}

function q3() {
  // Your code here
}

function q4() {
  // Your code here
}

function q5() {
  // Your code here
}

function q6() {
  // Your code here
}

function q7() {
  // Your code here
}

module.exports = {
  q0,
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
};
