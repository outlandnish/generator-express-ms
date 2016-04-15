'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var glob = require('glob');
var path = require('path');

module.exports = yeoman.Base.extend({

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the ' + chalk.red('Express micro-service') + ' generator!'
        ));

        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            //Defaults to the project's folder name if the input is skipped
            default: this.appname
        }, function(answers) {
            this.props = answers
            this.log(answers.name);
            done();
        }.bind(this));
    },

    writing: function() {
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'), {
                name: this.props.name
            }
        );
        
        this.fs.copy(
            this.templatePath('**/!(_package.json)'),
            this.destinationPath()
        );
    },

    install: function() {
        this.installDependencies();
    }
});