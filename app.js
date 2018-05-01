// Convert the rgb input to a hex value
$('#rgb-input').keyup(function() {

  let field = $(this);
  let input = field.val();

  // Get each colour value
  let values = input.split(',');
  let red = Number(values[0]);
  let green = Number(values[1]);
  let blue = Number(values[2]);

  // Convert each to its hexadecimal value
  red = convertToHex(red);
  green = convertToHex(green);
  blue = convertToHex(blue);

  // Show output
  let hexValue = '#' + red + green + blue;
  $('#hex-input').val(hexValue);
});

// Convert the hex input to a rgb value
$('#hex-input').keyup(function() {

  let field = $(this);
  let input = field.val();

  // Get each colour value
  let red = input.substring(1,3);
  let green = input.substring(3,5);
  let blue = input.substring(5,7);

  // Convert each to its decimal value
  red = convertToDecimal(red);
  green = convertToDecimal(green);
  blue = convertToDecimal(blue);

  // Show output
  let rgbValue = red + ',' + green + ',' + blue;
  $('#rgb-input').val(rgbValue);
});

// Convert a decimal to hexadecimal
function convertToHex(d) {
  var hex = d.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

// Convert a hexadecimal to decimal
function convertToDecimal(h) {
  var decimal = parseInt(h, 16);
  return decimal;
}
