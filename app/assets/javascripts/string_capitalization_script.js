$(document).ready(function(){
  var prevEntry = '';

  $.fn.capitalize = function (position) {
    $.each(this, function () {
      var prevEntry = $(this).data('original');
      var prevSplit = prevEntry.split(' ');
      var value = this.value;
      var caretPos = position === undefined ? this.value.length : position;
      var firstPart = value.substr(0, caretPos);
      var lastPart = value.slice(caretPos);
      var split = firstPart.split(' ');
      for (var i = 0, len = split.length; i < len; i++) {
        if(split[i].charAt(0) === (prevSplit[i] || '').charAt(0).toLowerCase()) {
          split[i] = split[i];
        } else {
          split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
        }
      }
      var finalValue = split.join(' ')+lastPart;

      var prevEntryLength = prevEntry.length;
      var prevEntryLastChar = prevEntry.charAt(prevEntryLength - 1);
      if (caretPos === value.length && (prevEntryLastChar.toLowerCase() === prevEntryLastChar) || (prevEntryLength - 1 !== finalValue.length)) {
        $(this).data('original', finalValue);
      }
      this.value = finalValue;
      this.selectionStart = caretPos;
      this.selectionEnd = caretPos;
    });
    return this;
  }
});