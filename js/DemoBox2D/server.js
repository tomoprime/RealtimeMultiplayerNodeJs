/**
File:
	server.js
Created By:
	Mario Gonzalez
Project:
	RealtimeMultiplayerNodeJS
Abstract:
	This is the base server module for starting RealtimeMultiplayerGame
Basic Usage:
 	node server.js
Version:
	1.0
*/

require("../lib/SortedLookupTable.js");
require("../core/RealtimeMutliplayerGame.js");
require("../model/Point.js");
require("../lib/circlecollision/Circle.js");
require("../lib/circlecollision/CircleManager.js");
require("../model/Constants.js");
require("../model/NetChannelMessage.js");
require("../controller/FieldController.js");
require("../core/AbstractGame.js");
require("../network/Client.js");
require("../network/ServerNetChannel.js");
require("../core/AbstractServerGame.js");
require("../model/GameEntity.js");
require("../model/WorldEntityDescription.js");
require("../input/Keyboard.js");

//require("v8-profiler");
require("./DemoBox2DApp.js");
require("./DemoBox2DConstants.js");
require("./DemoBox2DEntity.js");
require("./DemoBox2DServerGame.js");

var game = new DemoBox2D.DemoServerGame();
game.startGameClock();
