// Load wink-nlp package  & helpers.
const winkNLP = require( 'wink-nlp' );
// Load "its" helper to extract item properties.
const its = require( 'wink-nlp/src/its.js' );
// Load "as" reducer helper to reduce a collection.
const as = require( 'wink-nlp/src/as.js' );
// Load english language model โ light version.
const model = require( 'wink-eng-lite-model' );
// Instantiate winkNLP.
const nlp = winkNLP( model );

const text = 'Hello   World๐! How are you?';
const doc = nlp.readDoc( text );

console.log( doc.out() );
// -> Hello   World๐! How are you?

console.log( doc.tokens().out( its.type, as.freqTable ) );

console.log( doc.sentences().out() );
// -> [ 'Hello   World๐!', 'How are you?' ]

console.log( doc.entities().out( its.detail ) );
// -> [ { value: '๐', type: 'EMOJI' } ]

console.log( doc.tokens().out() );
// -> [ 'Hello', 'World', '๐', '!', 'How', 'are', 'you', '?' ]