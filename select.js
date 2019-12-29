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

function from (s) {
  return {
    take (t) {
      return {
        next (f) {
          return compute(s, f, t)
        }
      }
    },
    next (f) {
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
    from (s) {
      return {
        next (f) {
          return compute(s, f, t)
        }
      }
    },
    next (f) {
      return {
        from (s) {
          return compute(s, f, t)
        }
      }
    }
  }
}

function next (f) {
  return {
    take (t) {
      return {
        from (s) {
          return compute(s, f, t)
        }
      }
    },
    from (s) {
      return {
        take (t) {
          return compute(s, f, t)
        }
      }
    }
  }
}

module.exports = {
  from,
  next,
  take
}
