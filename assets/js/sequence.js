

/*firstnum.addEventListener('input', function(){
    var sequenceType = document.getElementById("sequenceType").value;
    var sequenceLength = parseInt(document.getElementById("sequenceLength").value);
    var result = calculateSequence(sequenceType, sequenceLength);
    document.getElementById("result").innerHTML = "Sequence: " + result.join(',');
})

cdcrtype.addEventListener('input', function(){
    var sequenceType = document.getElementById("sequenceType").value;
    var sequenceLength = parseInt(document.getElementById("sequenceLength").value);
    var result = calculateSequence(sequenceType, sequenceLength);
    document.getElementById("result").innerHTML = "Sequence: " + result.join(',');
})

typeinput.addEventListener('click', function() {
  var sequenceType = document.getElementById("sequenceType").value;
  var sequenceLength = parseInt(document.getElementById("sequenceLength").value);
  var result = calculateSequence(sequenceType, sequenceLength);
  document.getElementById("result").innerHTML = "Sequence: " + result.join(',');
})

numinput.addEventListener('input', function(){
  var sequenceType = document.getElementById("sequenceType").value;
  var sequenceLength = parseInt(document.getElementById("sequenceLength").value);
  var result = calculateSequence(sequenceType, sequenceLength);
  document.getElementById("result").innerHTML = "Sequence: " + result.join(',');
})

buttonClick.addEventListener('click', function(){
  var sequenceType = document.getElementById("sequenceType").value;
  var sequenceLength = parseInt(document.getElementById("sequenceLength").value);
  var result = calculateSequence(sequenceType, sequenceLength);
  document.getElementById("result").innerHTML = "Sequence: " + result.join(',');
} );*/


/* ==== Main Function ==== */
function getResult()
{
  
  let numinput = parseInt(document.getElementById("sequenceLength").value) || 0;
  let firstnum = parseInt(document.getElementById("1stTerm").value) || 0;
  let cdcrtype1 = parseInt(document.getElementById("commonRD").value) || 0;
  let sType = document.getElementById("sequenceType").value;

// Fibonacci Selected //

  if(sType === 'fibonacci')
  {
    const cdcrtype = document.getElementById("commonRD");
    cdcrtype.setAttribute('disabled', true);
    cdcrtype.value = "";
    if(numinput != 0 && firstnum != 0)
    {
      var sequenceType = document.getElementById("sequenceType").value;
      var sequenceLength = parseInt(document.getElementById("sequenceLength").value);
      var result = calculateSequence(sequenceType, sequenceLength);
      document.getElementById("result").innerHTML = "Sequence: 0," + result.join(',');
    }
    else if(numinput == 0 || firstnum == 0)
    {
      Clear()
    }
  }

// Arithmetic/Geometric Selected //

  else if (sType === 'arithmetic' || sType ==='geometric')
  {
    const cdcrtype = document.getElementById("commonRD");
    cdcrtype.removeAttribute('disabled')
    if(numinput != 0 && firstnum != 0)
    {
      if(cdcrtype1 == 0){
        document.getElementById("result").innerHTML = "Sequence: Common Ratio/Difference Can't be 0"
      }

      else if(sType ==='geometric' && (cdcrtype1 == 1 || cdcrtype1 == -1))
      {
        document.getElementById("result").innerHTML = "Sequence: Common Ratio Can't be 1 or -1"
      }

      else 
      {
      var sequenceType = document.getElementById("sequenceType").value;
      var sequenceLength = parseInt(document.getElementById("sequenceLength").value);
      var result = calculateSequence(sequenceType, sequenceLength);
      document.getElementById("result").innerHTML = "Sequence: " + result.join(',');
      }
    }
    else if(numinput == 0 || firstnum == 0)
    {
      Clear()
    }

  }

}

/* ==== Main Function End ==== */


/* ==== Calculating Function ==== */
function calculateSequence(type, length)
{
var cdcr = parseInt(document.getElementById("commonRD").value);
var ft = parseInt(document.getElementById("1stTerm").value);
var sequence = [];
  if (type === 'arithmetic')
  {
    var firstTerm = ft;
    var commonDifference = cdcr;
    for (var i = 0; i < length; i++)
    {
      sequence.push(firstTerm + i * commonDifference);
    }
  } 

  else if (type === 'geometric')
  {
    var firstTerm = ft;
    var commonRatio = cdcr;
    for(var i = 0; i < length; i++)
    {
      sequence.push(firstTerm * Math.pow(commonRatio,i));
    }
  } 

  else if (type === 'fibonacci')
  {
    var a = ft, b = ft;
    sequence.push(a);
    sequence.push(b);
    for (var i = 2; i < length; i++)
    {
      var next = a + b;
      sequence.push(next);
      a = b;
      b = next;
    }
  }
  
  return sequence;
}

/* ==== Calculating Function End ==== */


/* Clearing Function */
function Clear()
{

  document.getElementById('result').innerHTML = "Sequence: "
}