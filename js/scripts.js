$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var sideA = $("#sideA").val();
    var sideB = $("#sideB").val();
    var sideC = $("#sideC").val();

    if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
      $("#output").text("Not a triangle.");
    }

    else if (sideA == sideB && sideA == sideC){
      $("#output").text("Equilateral");
    }

    else if (sideA == sideB || sideA == sideC || sideB == sideC){
      $("#output").text("Isosceles");
    }

    else if (sideA != sideB && sideA != sideC){
      $("#output").text("Scalene");
    }

  });
});
