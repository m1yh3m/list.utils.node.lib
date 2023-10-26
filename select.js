/**
 * @param start {number}
 * @param nextFn {(number) => number}
 * @param takeFn {number}
 * @return {Generator<*, *, Generator<*, *, *>>}
 */
function* compute(start, nextFn, takeFn) {
    if (takeFn < 2) {
        return yield start;
    }
    let prev = start;
    let curr = start;
    yield start;
    for (let i = 0; i < takeFn - 1; i += 1) {
        curr = nextFn(prev);
        prev = curr;
        yield curr;
    }
    return curr;
}

function from(s) {
    return {
        take(t) {
            return {
                next(f) {
                    return compute(s, f, t);
                },
            };
        },
        next(f) {
            return {
                take(t) {
                    return compute(s, f, t);
                },
            };
        },
    };
}

function take(t) {
    return {
        from(s) {
            return {
                next(f) {
                    return compute(s, f, t);
                },
            };
        },
        next(f) {
            return {
                from(s) {
                    return compute(s, f, t);
                },
            };
        },
    };
}

function next(f) {
    return {
        take(t) {
            return {
                from(s) {
                    return compute(s, f, t);
                },
            };
        },
        from(s) {
            return {
                take(t) {
                    return compute(s, f, t);
                },
            };
        },
    };
}

module.exports = {
    from, next, take,
};
