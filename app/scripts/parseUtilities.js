var $ = require('jquery');

function parseHeaders(appId, apiKey, sessionId){
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader('X-Parse-Application-Id', appId);
      xhr.setRequestHeader('X-Parse-REST-API-Key', apiKey);

      if (sessionId){
        xhr.setRequestHeader('X-Parse-Session-Token', sessionId);
      }
    }
  });
}

module.exports = {
  parseHeaders: parseHeaders
};
