// Create function calculates factorial. Input parameter number.

const	getFactorial = function( num : number ) : number {
	let	result	: number[] = [ 1, 1 ];
	if ( num < 0 ) {
		return	0;
	} 
	else if ( num > 1 ) {
		for ( let i = 2 ; i <= num ; i+=1 ) {
			result.push( i * result[ i-1 ] );
		}		
	}
	return	result[ num ];
}

console.log( getFactorial(6) );	// 720