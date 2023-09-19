# Description
Parses an ISO 8601 formatted date string into `date`, `time` and `timezone` components, each being a corresponding substring of the string. 

E.g., `2023-01-01T22:01:21.1Z` is parsed into:
```javascript
{
    date: '2023-01-01',
    time: '22:01:21.1',
    timezone: 'Z'
}
```

Only parses strings that don't contain any characters besides the date. E.g., this `a2023-01-01T22:01:21.1Z` will return `null`.

Also, any incorrect syntax will return `null`. E.g., this: `2023-01-01T22:01:21:0001` will return `null` (there are 4 digits for milliseconds instead of the maximum of 3).

# Usecase
We can convert a time from a javascript `Date` object (it's `toISOString` method) to date and time values for HTML inputs of the corresponding types.

# Installation
```bash
npm i parseisotime
```

# Usage
```javascript
import parseisotime from 'parseisotime'

parseisotime('2023-01-01T22:00:21Z')
```

# The format
Date is represented as `YYYY-MM-DD` where `-DD` is optional.

Time is represented as `HH:MM:SS.MMM` where only `HH` is required and everything else is optional (e.g., all of the following are valid times: `HH`, `HH:MM`, `HH:MM:SS`, `HH:MM:SS.M`, `HH:MM:SS.MM` and so on).

Timezone is represented by either the letter `Z` or the expression `+HH:MM` or `-HH:MM`. Timezone is optional.