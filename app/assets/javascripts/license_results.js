/**
 * Script to allow search as you type on license results page
 * @author James Carmichael <jamescarmichael@defra.gsi.gov.uk>
 */
$(function() {

  var state = {
    licenseNumber : '',
    emailAddress : '',
    loading : false,
    sort : 'licenseNumber',
    direction : 1
  };

  /**
   * Clear results page
   */
  function clearResults() {
    $('.license-result').remove();
  }

  


  /**
   * Load new result set via AJAX GET request
   */
  function loadResults() {

    if(state.licenseNumber == '' && state.emailAddress == '') {
      return;
    }

    state.loading = true;
    clearResults();

    // For prototype, just load one of two pages
    var page = Math.random() < 0.5 ? 1 : 2;
    var url = 'licence_holder_search_results_' + page;

    $.get(url, function(html) {
      $('#results').append(html);
    });

  }

  // Debounced version prevents excessive HTTP requests
  loadResultsDebounced = _.debounce(loadResults, 1000);

  function keyPressHandler() {

    // Update state
    var licenseNumber = $('input[name=licenseNumber]').val();
    var emailAddress = $('input[name=emailAddress]').val();

    if(licenseNumber != state.licenseNumber) {
      state.licenseNumber = licenseNumber;
    }
    else if(emailAddress != state.emailAddress) {
      state.emailAddress = emailAddress;
    }
    else {
      return;
    }

    // clearResults();
    loadResultsDebounced();
  }

  $('input[name=licenseNumber]').on('keyup', keyPressHandler);
  $('input[name=emailAddress]').on('keyup', keyPressHandler);

});
