var toc = require('markdown-toc');
var fs = require('fs');

var mdFiles = [
    "content.md",
    "content-interaction.md",
    "group.md",
    "account.md",
    "token.md",
    "timeline.md",
    "query.md",
    "system.md",
    "node.md",
    "transaction.md"
];

var tocContent = "";

function processAt(idx) {

    if (idx >= mdFiles.length)
    {
        finished();
        return;
    }

    fs.readFile(mdFiles[idx], 'utf8', function(err, data) {
        tocContent += toc(data, {
            firsth1: false,
            maxdepth: 2
        }).content + "\n";
        processAt(idx + 1);
    });
}

function finished() {
    console.log(tocContent);
}

processAt(0);
