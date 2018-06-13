/* Create interface. Convertor( from(number): string, to(string); number);
   Implements 3 classes
          BinConvertor(from decimal to binary)
          OctalConvertor (from decimal to octal)
          HexadecimalConvertor (from decimal to hexadecimal)
*/

interface IConvertor {
	from( value: number ): string ;
	to( value: string ): number ;
}

class	BinConvertor implements IConvertor {
	protected	degree: number = 1 ;

	from( value : number ) : string {
		let	rest	=	0 ,
			result	=	'';
		while ( value > this.degree ){
			rest	=	value - ( ( value >> this.degree ) << this.degree );
			if (  rest > 9 ) {
				result	=	String.fromCharCode( 55 + rest ) + result;
			} else {
				result	=	rest.toString().trim() + result;
			}
			value	=	value >> this.degree;
		};
		if ( value ) {
			if ( value > 9 ){
				result	= String.fromCharCode( 55 + rest )+ result;
			}
			else {
				result	= value.toString().trim() + result;
			}
		}
		return	result;
	};

	to( value : string ) : number {
		let	symb	=	'' ,
			rest	=	0 ,
			result	=	0;
		value = value.trim();
		for ( let i=0 ; i < value.length ; i+=1 ) {
			result	=	result << this.degree ;
			symb	=	value.slice( i , i+1 );
			switch ( symb ) {
					case 'A' :
						rest	=	10;
						break;
					case 'B' :
						rest	=	11;
						break;
					case 'C' :
						rest	=	12;
						break;
					case 'D' :
						rest	=	13;
						break;
					case 'E' :
						rest	=	14;
						break;
					case 'F' :
						rest	=	15;
						break;
					default :
						rest	=	parseInt( symb );
			}
			result	=	result	+ rest;
		}
		return	result;
	}
}

class	OctalConvertor extends BinConvertor {
	constructor() {
		super();
		this.degree=3;
	}
}

class	HexadecimalConvertor extends BinConvertor {
	constructor() {
		super();
		this.degree=4;
	}
}

const	binConvertor	= new	BinConvertor()
,	octalConvertor	= new	OctalConvertor()
,	hexadecimalConvertor = new HexadecimalConvertor() ;

console.log(
	binConvertor.from(15) , binConvertor.to('101010101')	//	1111 341
,	octalConvertor.from(15) , octalConvertor.to('77')	//	17 63
,	hexadecimalConvertor.from(15) , hexadecimalConvertor.to('F')//	 F 15
);