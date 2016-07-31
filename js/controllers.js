angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

    .controller('ComparisonCtrl', function($scope) {
      $scope.data={first:"",second:"",output1:"",output2:"",output3:""};

      $scope.submit=function(){
    //invalid if empty
    if($scope.data.first.length==0||$scope.data.second.length==0){
      $scope.data.output1="Invalid DNA Sequences";
      $scope.data.output2="";
      $scope.data.output3="";
    }
    else{

    //first should be longer
    if($scope.data.second.length>$scope.data.first.length){
      var temp=$scope.data.first;
      $scope.data.first=$scope.data.second;
      $scope.data.second=temp;
    }

    //algo for matches found
    var matches_found=0;
    var percent_similar=0;
    var count=0;
    for(var i=0;i<$scope.data.first.length-$scope.data.second.length+1;i++){
      for(var j=0;j<$scope.data.second.length;j++){
        if($scope.data.second.charAt(j)==$scope.data.first.charAt(i+j)) count++;
        if(count==$scope.data.second.length) matches_found++;
      }
      percent_similar+=count;
      count=0;
    }

    //algo for percent similarity
    var first=$scope.data.first.length;
    var second=$scope.data.second.length;
    var similarity=0;
    for(var i=0; i<$scope.data.second.length; i++) {
      if($scope.data.first[i] == $scope.data.second[i]) {
        similarity++;
      }
    }
    similarity = (similarity/$scope.data.first.length)*100;

    //algo for hamming distance
    var hamming=0;
    for(var i=0; i<$scope.data.first.length; i++){
      if($scope.data.first.charAt(i)!=$scope.data.second.charAt(i)){
        hamming++;
      }
    }

    $scope.data.output1="Number of matches found - "+matches_found;
    $scope.data.output2="Similarity Percentage - "+similarity+ "%";
    $scope.data.output3="Hamming Distance - "+hamming;

    }//end else
    }//end submit function
    })


.controller('SequencingCtrl', function($scope) {
  $scope.data={input:"",flip:"",output:""};

  $scope.submit=function(){
    //clear flip from last submit
    $scope.data.flip="";
    $scope.data.output="";

    //if length is not multiple of 3 or less than 3, it is invalid
    if ($scope.data.input.length<3||$scope.data.input.length%3!=0){
      $scope.data.output="Invalid DNA sequence."
    }
    else{
      //set flip to empty string and flip input

      for(var i=0;i<$scope.data.input.length;i++){
        if($scope.data.input.charAt(i)=='A'||$scope.data.input.charAt(i)=='a'){$scope.data.flip+="U"; continue;}
        if($scope.data.input.charAt(i)=='T'||$scope.data.input.charAt(i)=='t'){$scope.data.flip+="A"; continue;}
        if($scope.data.input.charAt(i)=='G'||$scope.data.input.charAt(i)=='g'){$scope.data.flip+="C"; continue;}
        if($scope.data.input.charAt(i)=='C'||$scope.data.input.charAt(i)=='c'){$scope.data.flip+="G"; continue;}
      }

      //while there are still characters in input
      while($scope.data.flip.length!=0){
      //temp is equal to the first 3 chars in input
      var intermediate=""+$scope.data.flip.charAt(0)+$scope.data.flip.charAt(1)+$scope.data.flip.charAt(2);
      switch(intermediate) {
        case "UUU":
        case "UUC":
        $scope.data.output+="Phe - ";
        break;

        case "UUA":
        case "UUG":
        $scope.data.output+="Leu - ";
        break;

        case "UCU":
        case "UCC":
        case "UCA":
        case "UCG":
        $scope.data.output+="Ser - ";
        break;

        case "UAU":
        case "UAC":
        $scope.data.output+="Tyr - ";
        break;

        case "UGU":
        case "UGC":
        $scope.data.output+="Cys - ";
        break;

        case "CUU":
        case "CUC":
        case "CUA":
        case "CUG":
        $scope.data.output+="Leu - ";
        break;

        case "CCU":
        case "CCC":
        case "CCA":
        case "CCG":
        $scope.data.output+="Pro - ";
        break;

        case "CAU":
        case "CAC":
        $scope.data.output+="His - ";
        break;

        case "CAA":
        case "CAG":
        $scope.data.output+="Gln - ";
        break;

        case "CGU":
        case "CGC":
        case "CGA":
        case "CGG":
        $scope.data.output+="Arg - ";
        break;

        case "AUU":
        case "AUC":
        case "AUA":
        $scope.data.output+="Ile - ";
        break;

        case "AUG":
        $scope.data.output+="Met - ";
        break;

        case "UGG":
        $scope.data.output+="Trp - ";
        break;

        case "ACU":
        case "ACC":
        case "ACA":
        case "ACG":
        $scope.data.output+="Thr - ";
        break;

        case "AAU":
        case "AAC":
        $scope.data.output+="Asn - ";
        break;

        case "AAA":
        case "AAG":
        $scope.data.output+="Lys - ";
        break;

        case "AGU":
        case "AGC":
        $scope.data.output+="Ser - ";
        break;

        case "AGA":
        case "AGG":
        $scope.data.output+="Arg - ";
        break;

        case "GUU":
        case "GUC":
        case "GUA":
        case "GUG":
        $scope.data.output+="Val - ";
        break;

        case "GCU":
        case "GCC":
        case "GCA":
        case "GCG":
        $scope.data.output+="Ala - ";
        break;

        case "GAU":
        case "GAC":
        $scope.data.output+="Asp - ";
        break;

        case "GAA":
        case "GAG":
        $scope.data.output+="Glu - ";
        break;

        case "GGU":
        case "GGC":
        case "GGA":
        case "GGG":
        $scope.data.output+="Gly - ";
        break;

        case "UUU":
        case "UUC":
        $scope.data.output+="Phe - ";
        break;

        case "UAA":
        case "UAG":
        case "UGA":
        $scope.data.output+="STOP - ";
        break;

        default:
        $scope.data.output+="ERROR - "
      }
      $scope.data.flip=$scope.data.flip.substring(3);
    }
  } 
}



});