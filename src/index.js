const r = /^(\d{4}-\d{2}(?:-\d{2})?)T(\d{2}(?:(?::\d{2})?(?::\d{2})(?:\.\d\d?\d?)?)?)((?:Z)|(?:[\+-]\d{2}(?::\d{2})?))?$/

function parse(str) {
    const m = str.match(r)

    if (!m) return m

    return {
        date: m[1],
        time: m[2],
        timezone: m[3] || null
    }
}

export {parse as default, r}