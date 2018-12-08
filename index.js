'use strict';

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            break;
            case '/sayhello':
                process.stdout.write('hello!\n');
            break;
            case '/node-v':
                  process.stdout.write(process.versions.node);
            break;
            case '/environ-lg':
                  process.stdout.write(process.env.lang);
            break;

            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});
