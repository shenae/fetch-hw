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
    console.log(q0);
}

function q1() {
  // Your code here
  return fetch('http://anapioficeandfire.com/api/characters/16')
  .then((resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  })
  .then((data) => {
    console.log(data.born);
    return data.born;
  })
  .catch((err) => {
    console.log(err.message);
  });
}

function q2() {
  return fetch('http://www.anapioficeandfire.com/api/houses/378')
  .then((resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  })
  .then((data) => {
    console.log(data.region);
    return data.region;
  })
  .catch((err) => {
    console.log(err.message);
  });
  console.log(q2);
}

function q3() {
  return fetch('http://www.anapioficeandfire.com/api/houses/229')
  .then((resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  })
  .then((data) => {
    console.log(data.coatOfArms);
    return data.coatOfArms;
  })
  .catch((err) => {
    console.log(err.message);
  });
  console.log(q3);
}

// second seat 
function q4() {
  return fetch('http://www.anapioficeandfire.com/api/houses/17')
  .then((resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  })
  .then((data) => {
    console.log(data.seats[1]);
    return data.seats[1];
  })
  .catch((err) => {
    console.log(err.message);
  });
}


function q5() {
  return fetch('http://www.anapioficeandfire.com/api/characters/901')
  .then((resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  })
  .then((data) => {
    console.log(data.aliases[1]);
    return data.aliases[1];
  })
  .catch((err) => {
    console.log(err.message);
  });
}

function q6() {
  return fetch('http://www.anapioficeandfire.com/api/houses/362')
  .then((resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  })
  .then((data) => {
    console.log(data);
    let founder = data.founder;
      return fetch(founder)
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then((data) => {
        return data.name;
      })
  })
  .catch((err) => {
    console.log(err.message);
  });
}
// Promise.all([promise1, promise2, promise3]).then(function(values) {
//  console.log(values);

function q7() {
  return fetch('http://www.anapioficeandfire.com/api/characters/232')
  .then((resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  })
  .then((data) => {
  let p1 = fetch(data.povBooks[0])
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json()})
      .then((data) => {
      return data.name
      })
  let p2 = fetch(data.povBooks[1])
      .then((resp) => {
        if (!resp.ok) {
            throw Error(resp.statusText);
          }
          return resp.json()})
      .then((data) => {
      return data.name
      })
  let p3 = fetch(data.povBooks[2])
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json()})
      .then((data) => {
      return data.name
      })
   return Promise.all([p1, p2, p3])
      })
    .catch((err) => {
      console.log(err.message);
  })
};

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
