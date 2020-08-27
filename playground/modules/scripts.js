import { returnHi, middle, last } from './utils.js';
import * as everything from './wes.js';
import { handleButtonClick } from './handlers.js';

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);
// 2 types of imports: named imports & default imports. Before importing, it has to be exported from it's initial file.

// A file is a module, when you use it to share functionality between files.
// Modules have their own scope.
