/**
 * Déclaration du module
 */
angular.module("rest-client", [
    "ui.router",                    // Routing
    "ui.bootstrap",                 // Ui Bootstrap
    "ngSanitize",                   // Sanitize
    "pascalprecht.translate",       // Translate
    "nrcomInspinia"                 // Theme custom insmina
]);

var modulesToRun = [
    "rest-client"
];
