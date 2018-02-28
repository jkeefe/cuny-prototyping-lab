module.exports = function(request) {
  
  return new Promise(function(resolve, reject){

      var mathnumber = request.queryString.math;
      var calculation = mathnumber * 10;
      resolve(calculation);

  });
  
};