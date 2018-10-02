document.getElementById('Save').addEventListener('click', function()
    {
        var save = document.getElementById('textToSave').value ;
        localStorage.setItem('textToSave', save) ;
        alert('text id saved') ;
        console.log('text id saved')
    } , false);

document.getElementById('Clear').addEventListener('click', function()
{
  var clear= document.getElementById('textToSave').value;
  localStorage.clear()
  alert('text is erased');
  console.log('text is erased')
} , false);


function fileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.localeDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  function dragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', dragOver, false);
  dropZone.addEventListener('drop', fileSelect, false);

  
