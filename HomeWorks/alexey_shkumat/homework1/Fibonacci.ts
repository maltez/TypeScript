// Create function obtain integer(check this) and returns fibonacci sequence to this number.

const	isInteger_ = function( value : number ) : boolean {
	// return	Number.isInteger( value )  // ES6
	return	parseInt( value.toString() ) == value;  // ES5
}

const	isNaN_ = function( value : number ) : boolean {
	// return	Number.isNaN( value )  // ES6
	return	value === NaN;  // ES5
}

const	getFibArray = function( count : number ) : number[] {
	if ( isNaN_( count ) ||	( ! isInteger_( count ) ) || ( count < 1 ) ) {
		return	[];
	}
	let	result	: number[] = [ 1, 1 ];
	switch ( count ) {
		case	1:
			return	[1];
		case	2:
			return	result;
		default	:
			for ( let i = 2 ; i < count ; i++ ) {
				result.push( result[ i-1 ] + result[ i-2 ] );
			}
	}
	return	result;
}

console.log( getFibArray(10) );	// [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]