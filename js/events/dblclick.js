"use strict";

/**
  * @name ui events_dxdblclick
  * @publicName dxdblclick
  * @type eventType
  * @type_function_param1 event:jQuery.Event
  * @module events/dblclick
*/

// NOTE: The "double_click" module created to overcome adblock issue https://isc.devexpress.com/Thread/WorkplaceDetails/T465804. This file was kept as a fasade not to create a BC.
module.exports = require("./double_click");
