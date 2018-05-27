const $odd = $('a:odd');
const $secureLinks = $('a[href ^= "https://"]');
const $pdfs = $('a[href $= ".pdf"]');
const $pdfCheckbox = $('<label><input type="checkbox">Allow PDF downloads</label>');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
  if ($(':checked').length === 0) {
    event.preventDefault();
    alert('Please check the box to allow PDF downloads.');
  }
});

$('#links').append($pdfCheckbox);

$('a').each(function(index, link) {
  //console.log(index, $(link).attr('href'));
  const url = $(link).attr('href');
  //console.log(url);
  $(link).parent().append('('+url+')');
});

//since you'renot using the index in the function, you can remove it. and also
//you can use "this" instead of "link"
//so you can write the for loop as below
//$('a').each(function(){
//.....
// });
