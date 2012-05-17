var options = {
    node: true,
	vars: true,
	nomen: true,
    predef: [
            "jasmine",
            "describe",
            "it",
            "expect",
            "beforeEach",
			"define"
    ]
};

var ANSIColors = {
  pass:    function() { return '\033[32m'; }, // Green
  fail:    function() { return '\033[31m'; }, // Red
  neutral: function() { return '\033[0m';  }  // Normal
};

var stringWithColor = function(str, color) {
    return (color || ANSIColors.neutral()) + str + ANSIColors.neutral();
  }
  
var failedFileCount = 0;

var fs = require('fs'),
        util = require('util'),
        dirName = process.argv[2],
        readFile = function (name) {
            return fs.readFileSync(name).toString();
        },
        print = function (message) {
            util.puts(message);
        },
        quit = function (code) {
            process.exit(code)
        },
        jslint = require('./jslint');


if (!dirName) {
    print("Usage: jslint.js directory");
    quit(1);
}

var path = require('path');

var walk = require('walk'),
	walkOptions,
	walker;
	
	
walkOptions = {
    followLinks: false,
};

walker = walk.walk(dirName, walkOptions);

walker.on("names", function (root, nodeNames) {
	nodeNames.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
});

walker.on("directories", function (root, dirStatsArray, next) {
	next();
});

walker.on("file", function (root, fileStats, next) {
	var filename = fileStats.name;
	var fileExtension = filename.substr(filename.length - 3);
    if (fileExtension === ".js") {
		doLint(path.resolve(path.join(root, fileStats.name)));
	}
	next();
});

walker.on("errors", function (root, nodeStatsArray, next) {
  next();
});

walker.on("end", function () {
	if (failedFileCount == 0){
		print(stringWithColor("All files passed", ANSIColors.pass()))
	} else {
		print(stringWithColor(failedFileCount + " files failed", ANSIColors.fail()))
	}
});

var doLint = function (fileName) {
    var e,i,input;
    input = readFile(fileName);
    if (!input) {
        print(stringWithColor("jslint: Couldn't open file '" + fileName + "'.", ANSIColors.fail()));
        quit(1);
    }
    if (!jslint.JSLINT(input, options)) {
		failedFileCount++;
        print(stringWithColor("Problems in " + fileName, ANSIColors.fail()));
        for (i = 0; i < jslint.JSLINT.errors.length; i += 1) {
            e = jslint.JSLINT.errors[i];
            if (e) {
                print('Lint at line ' + e.line + ' character ' +
                        e.character + ': ' + e.reason);
                print((e.evidence || '').replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"));
                print('');
            }
        }
    }
};

