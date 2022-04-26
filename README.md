# Typescript exercises

This repo contains exercises for [TypeScript](https://www.typescriptlang.org/), using examples that might be relevant for FE developers in real life projects.

**DISCLAIMER: Please treat it as a reference, not as the only source of truth ;)** 

## Setup  
Run `yarn` or `npm i`

## Contains following exercises:
1. **Check index access** - adding a flag to `tsconfig.json` file to restrict accessing properties by index.  
Supported TypeScript version: `4.1`  
Read more about index access [here](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content)  
2. **Optional chaining** - fixing TypeScript errors when property is potentially `undefined`.  
Supported TypeScript version: `3.7`  
Read more about optional chaining [here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining)  
3. **Nullish coalescing** - using `??` operator to make conditional expression work properly with numbers.  
Supported TypeScript version: `3.7`  
Read more about optional chaining [here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing)  
4. **Assert signatures** - using Typescript narrowing to make a decision based on type.  
Supported TypeScript version: `3.7`  
Read more about asserting [here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)  
Read more about narrowing [here](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#handbook-content)  
5. **Template literal** - using template string to define types.  
Supported TypeScript version: `4.1` (this particular example works after `4.5`)  
Read more about template string types [here](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#handbook-content)  
Read more about template string types as discriminants [here](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#template-string-discriminants) 
6. **Key remapping** - remapping existing types to new types.  
Supported TypeScript version: `4.1`  
Read more about mapped types and key remapping [here](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)  
7. **Conditional types** - using conditional types to get prop types from existing components.  
Supported TypeScript version: `2.8`  
Read more about conditional types [here](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#handbook-content)  
8. **Recursive conditional types** - extract route parameter type from url string using recursive conditional type.
Supported TypeScript version: `3.7`
Read more about recursive conditional types [here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#more-recursive-type-aliases)
