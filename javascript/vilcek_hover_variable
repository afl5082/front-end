//dataLayer push with custom event and country name 

function() {
  return function(event) {
    var el = event.target.className.animVal;
    var eq = el.match(/^.{0,3}/)[0];
    
    window.dataLayer.push({
      event: 'custom.event.' + event.type,
      'custom.gtm.element': event.target,
      'countryName': eq
    });
  };
}
