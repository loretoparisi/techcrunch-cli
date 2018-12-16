#!/usr/bin/env node

var program = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');
var list = require('./lib/list');
var path = require('path');
var package = require(path.join(__dirname, 'package.json'));

console.log(
    chalk.green(
        figlet.textSync('TechCrunch-cli', {horizontalLayout: 'full'})
    )
);

program
    .version(package.version)
    .description(package.description);


program
    .command('top')
    .description('List TechCrunch Top Stories')
    .action(function () {
        list.getTopArticles()
    })

program
    .command('search')
    .arguments('<searchTerms...>')
    .description('Search Articles By Words')
    .action(function (searchTerms) {
        list.searchArticlesByWord(searchTerms)
    })

program
    .command('tag')
    .arguments('<tag>')
    .description('List Recently Articles by tag')
    .action(function (tag) {
        list.getArticlesByTag(tag)
    });

program.parse(process.argv);
