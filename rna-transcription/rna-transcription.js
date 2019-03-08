export const toRna = (rna) => {

var rnaStr ="";

for(let i=0; i<rna.length;i++)
{

    if(rna[i] === 'G'){
        rnaStr +=  'C'
    }

    else if (rna[i] === 'A')
        {
            rnaStr += 'U'
        }

    else if (rna[i] === 'T')
    {
        rnaStr += 'A'
    }

    else if (rna[i] === 'C')
        {
            rnaStr += 'G'
        } 
        else {
        throw new Error('Invalid input DNA.');
        }
}
return rnaStr;

}

// switch (rna) {
//   case 'G':
//     return 'C';
//     break;
//   case 'C':
//     return 'G';
//     break;
//   case 'T':
//     return'A';
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//     case 'A':
//     return 'U';
//     break;
//   default:
//    return rna;
//    break;
// }