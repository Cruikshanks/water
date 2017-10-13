/* global $ */
/* global GOVUK */
/*
window.Parsley.addValidator('password', {
  validateString: function(value) {
    if (!/[A-Z]/.test(password)) {
      return false;
    }

    if (!/[£!@#\$%\^&\*\?]/.test(password)) {
      return false;
    }

    if (password.length < 8) {
      return false;
    }
    return true;
  }
});
*/
// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  // Parsley form validation
  // Find any forms with parsley validation
  var parsleyForms = $('[data-parsley-validate=""]');

  // Only set up validation if we have any forms
  if (parsleyForms.length > 0) {
    parsleyForms.parsley().on('field:validated', function() {
      // Has this field passed validation?
      var validationPassed = this.validationResult === true;

      // Find any elements that have a data-parsley-id which matches this elements
      // id and hide them or show them as needed
      var elementId = this.element.id;
      $('[data-parsely-id=' + elementId + ']').toggleClass('hidden', validationPassed);

      // Toggle the display of the fields form group error
      this.$element.closest('.form-group').toggleClass('form-group-error', !validationPassed);

      // Display the error summary box if there are any errors
      var formValid = $('.parsley-error').length === 0;
      $('.error-summary').toggleClass('hidden', formValid);
    });
  }

})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var white_panel = this.nextElementSibling;
        if (white_panel.style.display === "block") {
            white_panel.style.display = "none";
        } else {
            white_panel.style.display = "block";
        }
    }
}

//parsley form validation script

$(function () {

});
