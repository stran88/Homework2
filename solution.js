var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
if (err)
  return console.error('There was an error:', err)


// QUESTION ON THIS PART OF THE CODE - see below in the module part of the program

list.forEach(function (file) {
  console.log(file)
})
})