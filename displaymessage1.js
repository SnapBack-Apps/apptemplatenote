// JavaScript Document displaymessage.js

// The main component of this script
var wsh = new ActiveXObject("WScript.Shell");
wsh.popup( "App Template Message 2!", 5, "App Template Message 2" );

wsh = null;

// Create a notification
var shell = new ActiveXObject ( "WScript.Shell" );

// Call the common script that produces a notification in the right format
var theCommand = shell.ExpandEnvironmentStrings("%PROGRAMDATA%\\CDP\\SnapBack\\Apps\\Common\\Misc\\notifications.bat");

// Specify the arguments for your notification in this order
var apptitle = "App Template";
var appname = "apptemplatenote";
var status = "Non-critical";
var notice = "This is a notice produced directly by a script.";
var createDate = new Date().toUTCString();

// Pass the command and the arguments in this format
var ret = shell.Run('"' + theCommand + '"' + escape(apptitle) + "," + escape(appname) + "," + escape(status) + "," + escape(notice) + "," + escape(createDate),0,false);
shell = null;
