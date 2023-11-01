function geoplugin_request() { return '112.150.225.113';} 
function geoplugin_status() { return '200';} 
function geoplugin_credit() { return 'Some of the returned data includes GeoLite data created by MaxMind, available from <a href=\'http://www.maxmind.com\'>http://www.maxmind.com</a>.';} 
function geoplugin_delay() { return '1ms';} 
function geoplugin_city() { return 'Gunpo';} 
function geoplugin_region() { return 'Gyeonggi-do';} 
function geoplugin_regionCode() { return '41';} 
function geoplugin_regionName() { return 'Gyeonggi-do';} 
function geoplugin_areaCode() { return '';} 
function geoplugin_dmaCode() { return '';} 
function geoplugin_countryCode() { return 'KR';} 
function geoplugin_countryName() { return 'South Korea';} 
function geoplugin_inEU() { return 0;} 
function geoplugin_euVATrate() { return ;} 
function geoplugin_continentCode() { return 'AS';} 
function geoplugin_latitude() { return '37.3666';} 
function geoplugin_longitude() { return '126.9512';} 
function geoplugin_locationAccuracyRadius() { return '50';} 
function geoplugin_timezone() { return 'Asia/Seoul';} 
function geoplugin_currencyCode() { return 'KRW';} 
function geoplugin_currencySymbol() { return '&#8361;';} 
function geoplugin_currencySymbol_UTF8() { return '₩';} 
function geoplugin_currencyConverter(amt, symbol) { 
	if (!amt) { return false; } 
	var converted = amt * 1352.0802; 
	if (converted <0) { return false; } 
	if (symbol === false) { return Math.round(converted * 100)/100; } 
	else { return '&#8361;'+(Math.round(converted * 100)/100);} 
	return false; 
} 
