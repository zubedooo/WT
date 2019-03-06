var rankings = ['alice', 'bob', 'eve'];

for(var i=0, len=rankings.length; i<len; i++) {
    setTimeout(function() {
        //console.log(i, rankings[i]);
    }, i*10000);
}

// corrected code
for(var i=0, len=rankings.length; i<len; i++) {
    function cl() {
        var j = i;
        setTimeout(function() {
         console.log(j, rankings[j]);
        }, j*10000)    
    }
    cl();
}
