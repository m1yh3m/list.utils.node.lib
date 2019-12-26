function * compute (start, next, take) {
  if (take < 2) {
    return yield start
  }
  let prev = start
  let curr = start
  yield start
  for (let i = 0; i < take - 1; i++) {
    curr = next(prev)
    prev = curr
    yield curr
  }
}

function startingFrom (s) {
  return {
    take (t) {
      return {
        asNextIs (f) {
          return compute(s, f, t)
        }
      }
    },
    asNextIs (f) {
      return {
        take (t) {
          return compute(s, f, t)
        }
      }
    }
  }
}

function take (t) {
  return {
    startingFrom (s) {
      return {
        asNextIs (f) {
          return compute(s, f, t)
        }
      }
    },
    asNextIs (f) {
      return {
        startingFrom (s) {
          return compute(s, f, t)
        }
      }
    }
  }
}

function asNextIs (f) {
  return {
    take (t) {
      return {
        startingFrom (s) {
          return compute(s, f, t)
        }
      }
    },
    startingFrom (s) {
      return {
        take (t) {
          return compute(s, f, t)
        }
      }
    }
  }
}

module.exports = {
  startingFrom,
  asNextIs,
  take
}
