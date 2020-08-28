// BUNDLERS

// The idea with modules is that you ship your ycript tag to the browser meaning that we can just upload the entire project. With http2 & http 3 you are able to deliver as many files of js as you have at once, your server will know exactly which ones to deliver. THIS ISN'T CURRENTLY USED.

// THE MOST USED IS A BUNDLER
// Why do we use it over top of a regular modules?

// 1° You are able to compress your code - minifying it (ex: variable->options to o).

// 2° Make your code as small as possible

// 3° Dead code elimination - If you have a fx that is never  used it will detect it and delete it

// 4° BABEL is used for taking your code from all the new js (classes and ``, new stuff) and it transpiles it for older browsers.

// 5° It also handles things like sass or less, autoprefixer

// 6° Image compression

// There are many bundlers and in general they should all include: a bundler and a dev server. The dev server is what we have used like parcel start to get our server running. More bundlers: Pika, webpack (hard to get up an running), role-up...

// BASICALLY: If you want to ship your code to a browser and have it to be as small and as performant as possible right now we use BUNDLERS to do that. Wes recommends parcel.

// Parcel works very well with vue and react.

// COMPILERS
// Once you are done developing it is time to build, build a compiled version of your js files. When you want to put them online what you do is you write another script called build.

// Package.json is a file that contains information about your dependencies and about what scripts you have. Basically, information about your project. YOU GET ONE BY TYPING NPM INIT.

// DEV DEPENDENCIES
// Are things that are not needed for the app to run but they are needed in order for someone to work with the application.

// Dependencies: React or View
// Dev dependencies: Tooling that is needed in order to work on it. (Ex: parcel-bundler).

// PROBLEMS
// 1. PARCEL: regeneratorRuntime is not defined -> INCLUDE IN package.json:   {/* "browserslist": [ "last 1 chrome versions"] */}

// 2. PARCEL: If you are having problems or parcel is acting weird, go in to your cache and your dist folders (generated by parcel) and delete them. They will just be re-generated.
