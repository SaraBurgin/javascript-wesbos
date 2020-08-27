const last = 'bos';
const middle = 'slam dunk';

export function returnHi(name) {
        return `Hi ${name} ${last}`;
}

// Exporting essentially says, this thing can be used by other JS modules (files).

// NAMED exports - we can have as many as we want. You can tell if they are named imports and exports because it will simply have the export value in front of the function definition or the variable declaration or there will be an export in front of the curly brackets.

export { last, middle };
