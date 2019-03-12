var resultArray= [];
var marks = [

    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },

    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
    ]

for (i=0; i<marks.length; i++)
{
    resultArray.push (marks[i].mark)

}

    console.log(resultArray)

    var average = resultArray.reduce (function(accumulater,mark)
    {
        return accumulater + mark/marks.length.toFixed();
    },0);
console.log (average)