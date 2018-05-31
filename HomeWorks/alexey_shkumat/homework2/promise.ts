/* Create two parallel request (fake request use set immediate) => in
   then create three sequential requests(each request returns the string).
   and then aggregate all retrieved values to array. Create for this function.
*/

const	step1Parallel = function( resolve:Function, reject:Function ) : void {
	setImmediate( resolve( '1-st step returns A' ) );
}
,	step2Parallel = function( resolve:Function, reject:Function ) : void {
	setImmediate( resolve( '2-nd step returns B' ) ) ;
}
,	step3Serial = function( data : string[] ) : string[] {
	return	data.concat( '3-rd step returns C' ) ;
}
,	step4Serial = function( data : string[] ) : string[] {
	return	data.concat( '4-th step returns D' ) ;
}
,	step5Serial = function( data : string[] ) : string[] {
	return	data.concat( '5-th step returns E' ) ;
}

Promise.all<any>([
	new Promise( step1Parallel )
,	new Promise( step2Parallel )
])
	.then( ( data : string[] ) => {
	return	new Promise( ( resolve, reject ) => {
		resolve(
			step5Serial(
				step4Serial(
					step3Serial( data  )
				)
			)
		);
	});
})
	.then( ( data:any ) => {
	console.log( data )
})

/*
[ '1-st step returns A',
  '2-nd step returns B',
  '3-rd step returns C',
  '4-th step returns D',
  '5-th step returns E' ]
*/