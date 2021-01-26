// locating country on map click, hooking into Google Tag Manager click element
//country named stored in the first nodeValue, extracting first three letters (USA,CAN..) via Regex match

function () {
  
   country = google_tag_manager["GTM-NFF8XL"].dataLayer.get("gtm.element").attributes[0].nodeValue;
   return country.match(/^.{0,3}/)[0];
  
}
