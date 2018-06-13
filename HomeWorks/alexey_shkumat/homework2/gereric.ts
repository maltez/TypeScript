/* Create type that would be mix of number, string, array and object
   Create for this type generic function that would be retrieve
   instance of such type and returns number in case of number,
   length of string in case of string, count of object fields for object
   and length of the array(unite calculation with string).
*/
type	mixedType	=	number | string | Array<any> | object ;

const	getLength = function( value : mixedType ) : number {
	let   result  :   number  =   0;
	if ( value === undefined ) {
		return 0;
	}
	switch    ( typeof value ) {
		case   'number' :
			result  =   value as number;
			break;
		case   'object':
			let key : any;
			for ( key in value as object ) {
				result+=1;
			}
			break;
		default:
			result  =  ( value as string|Array<any> ).length;
	}
	return	result;
}

const	aNumber		:   number  =   100500 ,
	aString		:   string  =   '100500' ,
	anArray		:   number[]  =   [ 100 , 500 ] ,
	anObject	:   object  =   { first:100 , second:500 } ;

console.log(
	getLength( aNumber ) ,	//	100500
	getLength( aString  ),	//	6
	getLength( anArray ) ,	//	2
	getLength( anObject )	//	2
);