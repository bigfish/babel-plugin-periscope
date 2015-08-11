var babel = require("babel-core");
var input_js = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    input_js += chunk;
});

process.stdin.on('end', function() {
    babel.transform(input_js, {
        plugins: [require.resolve("./src")]
    });
});
