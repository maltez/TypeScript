/* Create function toString. Function retrieves boolean, string, number,
   object, array and undefined. Function returns string from this input.
*/
type	toStringable	=   boolean | string | number | object | Array<any> | undefined;

const	toString_ = function( ...arguments_ : toStringable[] ) : string {
	let	result	=	'';
	for ( let arg  of  arguments_ ) {
		switch ( typeof arg  ) {
			case	'undefined' :
				result = result.concat( 'undefined ' );
				break;
			case	'object' :
				result = result.concat( JSON.stringify( arg ) , ' ' );
				break;
			default:
				result = result.concat( arg.toString() , ' ' );
		}
	}
	return	result.trim();
}

const	anArray		:	number[]=	[ 100 , 500 ],
	aBool		:	boolean	=	true,
	aNumber		:	number	=	100500,
	anObject	:	object	=	{ first: 100 , second: 500 },
	aString		:	string	=	'100, 500!',
	anUndefined	:	undefined=	undefined;

console.log( toString_( anArray, aBool, aNumber, anObject, aString, anUndefined ) );

// [100,500] true 100500 {"first":100,"second":500} 100, 500! undefined