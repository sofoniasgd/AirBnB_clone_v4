$(document).ready(func);


function func() {
  const amenityId={};
  $().change(function() {
    if $(this).is(':checked') {
      amenityId[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if $(this).is(':not(:checked)') {
      delete amenityId[$(this).attr('data-name')]
    }
  });
  const names = Object.keys(amenityId);
  $('.amenities h4').text(names.sort().join(', '));
}
