import yargs from 'yargs';
import 'colors';

import { createProject } from './generators/create-project';
import { generateView } from './generators/generate-view';
import { generateComponent } from './generators/generate-component';
import { generateMock } from './generators/generate-mock';
import { removeEntity } from './generators/remove-entity';

import './generators/prototype-extensions';

// noinspection JSUnusedLocalSymbols
let argv = yargs.usage('$0 [args]')
	.command('create [name]', 'Creates a loaded-up CRA project\n[--without-eslint] [--without-githooks]', (yargs) => {
		yargs.positional('name', {
			type: 'string',
			describe: 'Name of your project'
		})
		.option('without-githooks', {
			alias: 'g',
			default: false,
			type: 'boolean',
			describe: 'Create project without adding any ' + 'terrace githooks'.bold.green + '.\nBy default, the '.green + 'githooks will be included'.green.bold + ' and configured.'.green
		})
		.option('without-eslint', {
			alias: 'e',
			default: false,
			type: 'boolean',
			describe: 'Create project without adding any ' + 'extra eslint config'.bold.green + '.' + '\nWhen this option is passed, githooks are automatically ignored because of current implementation logic.'.yellow
		});
	}, createProject)
	.command('view [name]', 'Generate a view\n[--reducer-name=[value]] [--without-reducer]', (yargs) => {
		yargs.positional('name', {
			type: 'string',
			describe: 'Creates a view with the given name'
		})
		.option('reducer-name', {
			alias: 'r',
			default: false,
			describe: 'Specify reducer name.'.bold.green + '\nIf not provided, the default names will be the lowercase view name suffixed with `-{actions,reducer,tasks}.js`.'
		})
		.option('without-reducer', {
			alias: 'w',
			default: false,
			type: 'boolean',
			describe: 'Create a view ' + 'without a reducer'.bold.green + ', tasks, actions, and reducer test.'
		});
	}, generateView)
	.command('component [name]', 'Generate a component\n[--minimal]', (yargs) => {
		yargs.positional('name', {
			type: 'string',
			describe: 'Creates a component with the given name'
		})
		.option('minimal', {
			alias: 'm',
			default: false,
			type: 'boolean',
			describe: 'Create a component with ' + 'as few things as possible'.bold.green + '.'
		});
	}, generateComponent)
	.command('mock [entity] [name]', 'Generate a basic entity mock', (yargs) => {
		yargs.positional('entity', {
			type: 'string',
			describe: 'Specify what to mock'
		})
		.positional('name', {
			type: 'string',
			describe: 'Specify name of mocked entity'
		});
	}, generateMock)
	.command('remove [entity] [name_or_subtype] [name]', 'Remove an entity (such as view or component)', (yargs) => {
		yargs.positional('entity', {
			type: 'string',
			describe: 'Specify the entity type to remove. eg. view, component.'
		});
		yargs.positional('name_or_type', {
			type: 'string',
			describe: 'Specify the dasherized name of the entity to remove, or the subtype.'
		});
		yargs.positional('name', {
			type: 'string',
			describe: 'Specify the dasherized name of the entity to remove, ' + 'if the previous argument was the subtype.'.bold
		});
	}, removeEntity)
	.help()
	.demandCommand()
	.argv;
