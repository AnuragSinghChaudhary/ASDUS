/*! updated; 01-10-2017 01:02 PM */

!function(Modulr,$){var uid="FOX_DRAWERS";if(Modulr.getInstance(uid))return!1;var domain=window.FOX_ENV_STATIC_DOMAIN,Instance=Modulr.config({instance:uid,baseDomain:domain,baseUrl:"/static/v/all/js/amd/apps/drawers/app",masterFile:"/static/v/all/js/require/modulr.master.js",packages:["FOX_GLOBAL","FOX_PLUGINS","FOX_TEMPLATES"],shim:{jquery:{deps:["modernizr"],src:"/static/v/all/js/ag.jquery.js",exports:"jQuery"},modernizr:{src:"/static/v/all/js/modernizr/modernizr.js",exports:"Modernizr"},lodash:{src:"/static/v/all/js/lodash.js",exports:"_"},AKAMAI_TIME_HELPER:{src:"//global.fncstatic.com/static/v/all/js/geo.js",exports:"AKAMAI_TIME_HELPER"},Authentication:{src:"/static/v/all/js/ag.auth.js",exports:"AuthenticationService_Janrain"}}});Instance.define("ENV",[],function(){return window.FOX_ENV_STATIC}),Instance.define("ENV_STATIC_DOMAIN",[],function(){return window.FOX_ENV_STATIC_DOMAIN}),Instance.require(["main"])}(window.Modulr,window.jQuery);