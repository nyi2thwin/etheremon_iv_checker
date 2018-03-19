const express = require('express')
const app = express();

var sleep = require('system-sleep');


var mainnet_node = "https://mainnet.infura.io/<your_infura_key>";


//using the web3 umbrella package
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider(mainnet_node));

//raw data from core.js used by etheremon.com
var monster_image_list = ["45951ba0b6ecdc60015c837eb4f13ca4.png","473ede2549a58519484ff46bbb77ca87.png","b50d9e5f1ac76415c4557edbfa2b486b.png","978bc1124bafaad118da0f69c9a14be1.png","6295852ea460c881ba03002c0d6fd923.png","37741f435f919415ea92d2559d7a2dad.png","7761f869042f5b0bd47b07b52224a499.png","e132d9ef010601578d42ab1ebc3e9c3f.png","d85dc3b579d66a585c541b537b98ff1b.png","4a68e07901972ad9407a2ab6ece567d0.png","5c78b22dde2586071a1e8e3680b40b4b.png","5095ec87583b01895c68e0af1a4ecdb3.png","9fc77c2a1599e894cf3769fbb782e003.png","89b9879c5e0ab31d9854fed4b77af79d.png","efee47f4b8029223df49c68838ac0f47.png","495aff5c472442d8952082a7a535d101.png","4493a478cad23c0e4bc4e4196c8cf5c2.png","fc3610bbb9315fd8c6b979bf360e1253.png","2acf60de1b99247193fc3b184dcf6ca8.png","f941e018f3a2167191961d583ab1a0a5.png","unknown.png","7c51b45af0ea588fd3d131e6e85a0c65.png","f5eeeca7214e1e695a5766c5a0e89800.png","91fe18c70b4bc6b177681ee528558b04.png","9330ee82bc1828f7fdeb2b28dbc21c6a.png","0f45ad8e7d9d0f3861bde7d2706b7315.png","76575fcc81ceb32d7e554e0f02aed989.png","f0efd35e4ee0252fe0a0d675c66ff09f.png","58e1e03798b4da2f7abd9a58f80d853c.png","4ad5cc4f54f3c974ccb9644884cb6344.png","e4486084834ca2684b6d4a41fbe6ac45.png","2273644b8ffd21d77bb2f9d2d4840d4d.png","c67f75c673e8dadc0acba815358e5e72.png","333050a194f54d336dc71fb9e56ec08a.png","a4dfc4be4bff98f8ad95c1a540f09b8f.png","0eb5a6da9f72eb79a892ffeb6b8f8090.png","11aa703cca60be5183c091df1b712d95.png","d5c00470a3dead1e55826d6ea53c9564.png","0e29c8971f1c0f2be56031ace53d0d2f.png","e8400776601d6a4ce919bafdea35c999.png","434c2b316391c70aa595772ab259542e.png","8d7c7e17d2e0a0ef6af9aaa5b6e135fb.png","c1f1a2f6ade4a77bc7eda3221400a865.png","79116e17a0ce2629bd9b3530ac4ceafc.png","047fe6caa25fa852430d84bfe012c3f5.png","b7817e1686b288e1538af1de03ae94e5.png","efd0dde86d4cf98586a4186765a42a68.png","248f5cdc2a81362031f69fd247b0b683.png","08988a943a3f1cdd165964beacfc88d8.png","b10ca3e179416876ca24d7be76f2f7a4.png","6fe8c0b992cd26bd03d46e530aa9a401.png","a9b5f2cdb74d97eb3810ebdb10283317.png","a5bff2466ced0f52913bc92a3bc16d8c.png","9336e3c4deb33c70c565ec4d78a2b4ed.png","0be0e4f4363d9b4e2edc94f0aa57090e.png","d0e9fdd236a77283cab2325607b578f9.png","87f5f473574a0fbb18bf2e3958e42d33.png","2be2eda8302aa4fcf6b3968e3bda8640.png","fed144494e2af2f4b33c73331e525e1d.png","e610f3ed88e794e17b74a42cc3023b78.png","23ea43ed02e2a5789851c57b8332518c.png","4516d2ebf31b5e3e059ef6e4a462fb15.png","8548ed13a498c614dbdc5c70ec51a872.png","59d111dcc0f3c44c89b859ab2550ce98.png","cde025294e99fcd0866c25e15c43590f.png","460951d956e182082e43b8a8b5636268.png","96d52a81f1dfacc382f0123b29993fca.png","5e958d4546283852a22c205211ffa83f.png","e60413697ea0efb553b0184ef838491e.png","62774762627cd35992142bf65c961128.png","4ff777abd7bd5307b345ebea99bebc91.png","f622eb1f2ac86d50c50d4fbad9a99115.png","eca42f4510d0f4e2fbdd9a34d74b1774.png","05ae1416799f1965a539e5f2de829e81.png","5768a386f2d940a908cf9f96782e19f9.png","c7aea177a1d17849b1d59dd3a8260d34.png","7db7949bcbab610dfbedfe8c51bdfa36.png","ef8f661cbe51dda96e70398e4b4f8633.png","405da833b4a49b62786bc5fe2112a0f9.png","743fda3b8e72a34ddde7889c6b493a35.png","afc6977239fc4711536a1b1090e75084.png","c8de07d1946a89f728d84574c91374db.png","73c506c25b4754364a41e460cfb4725c.png","4920ea025ba4596333d1426832260bb9.png","4090f8f09a73722b943e7afd77933301.png","12177a6026f93fb8cfe329972abffae6.png","2e4b95484406a52897fb16f9c06a70f5.png","44cfc43b0485f4c3d60f3004b4fa3eff.png","8a87f4d68334d0268a6255ebf1aae222.png","3fe022f30194dcab0cde6047d7f20051.png","6767005a750e35a045fc1d0444983c9a.png","d3336dcc05b5753b3ff0de23ee382616.png","6e1d36595737e2368f17f8ce1bad061a.png","f9d86ca5fb6c89f2a21965e942469aac.png","1d8cef709c9784395bc1fb83ba6d8aab.png","f809949a6ceb8e914a9531c1d795d0d7.png","2243a6487235d1e764b2d159ff30dc2c.png","2445c2fbe71bf4cda87f3849f33b8a79.png","be9780965f428fbf71c51ea74cfdbb59.png","a08b04a1caddf694dd90174922aae832.png"]
var MONSTER_CLASS_STATS = {
	1: {
		"types": [14, 16],
		"stats": [45, 49, 49, 65, 65, 45],
		"steps": [2, 1, 1, 1, 2, 2],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [1, 38, 64],
		"lvl_transform": 20,
	},
	2: {
		"types": [4],
		"stats": [39, 52, 43, 60, 60, 65],
		"steps": [2, 2, 1, 2, 1, 1],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [2, 39, 65],
		"lvl_transform": 20,
	},
	3: {
		"types": [18],
		"stats": [44, 48, 65, 50, 64, 43],
		"steps": [1, 1, 2, 2, 2, 1],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [3, 40],
		"lvl_transform": 26,
	},
	4: {
		"types": [5, 16],
		"stats": [30, 35, 30, 100, 35, 80],
		"steps": [1, 1, 1, 1, 3, 2],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [4, 41, 66],
		"lvl_transform": 20,
	},
	5: {
		"types": [16],
		"stats": [35, 60, 44, 40, 54, 55],
		"steps": [1, 2, 1, 1, 2, 2],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [5, 42, 67],
		"lvl_transform": 20,
	},
	6: {
		"types": [11],
		"stats": [35, 55, 30, 50, 40, 90],
		"steps": [1, 2, 1, 2, 1, 3],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [6, 43],
		"lvl_transform": 25,
	},
	7: {
		"types": [3],
		"stats": [70, 45, 48, 60, 65, 35],
		"steps": [2, 1, 1, 2, 2, 1],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [7, 44],
		"lvl_transform": 28,
	},
	8: {
		"types": [7, 3],
		"stats": [115, 45, 20, 45, 25, 20],
		"steps": [2, 1, 2, 1, 2, 1],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [8, 45],
		"lvl_transform": 25,
	},
	9: {
		"types": [7],
		"stats": [40, 45, 35, 40, 40, 90],
		"steps": [1, 2, 1, 1, 2, 2],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [9, 46],
		"lvl_transform": 27,
	},
	10: {
		"types": [4],
		"stats": [55, 70, 45, 70, 50, 60],
		"steps": [1, 2, 1, 2, 1, 2],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [10, 47],
		"lvl_transform": 29,
	},
	11: {
		"types": [8],
		"stats": [25, 20, 15, 105, 55, 90],
		"steps": [1, 1, 1, 3, 1, 2],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [11, 48],
		"lvl_transform": 25,
	},
	12: {
		"types": [12],
		"stats": [70, 80, 50, 35, 35, 35],
		"steps": [2, 2, 2, 1, 1, 1],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [12, 49],
		"lvl_transform": 26,
	},
	13: {
		"types": [17, 6],
		"stats": [40, 80, 100, 30, 20, 20],
		"steps": [1, 2, 3, 1, 1, 1],
		"is_gason": false,
		"ancestors": [],
	},
	14: {
		"types": [6],
		"stats": [50, 50, 95, 40, 50, 35],
		"steps": [1, 2, 2, 1, 2, 1],
		"is_gason": false,
		"ancestors": []
	},	
	15: {
		"types": [18],
		"stats": [30, 40, 70, 70, 25, 60],
		"steps": [1, 1, 2, 2, 1, 2],
		"is_gason": false,
		"ancestors": []
	},
	16: {
		"types": [1, 13],
		"stats": [70, 110, 80, 55, 80, 105],
		"steps": [1, 1, 2, 1, 1, 2],
		"is_gason": false,
		"ancestors": []
	},
	17: {
		"types": [18, 13],
		"stats": [95, 125, 79, 60, 100, 81],
		"steps": [2, 1, 2, 1, 1, 1],
		"is_gason": false,
		"ancestors": []
	},
	18: {
		"types": [7],
		"stats": [48, 48, 48, 48, 48, 48], 
		"steps": [1, 1, 1, 1, 1, 1],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [18, 50],
		"lvl_transform": 28,
	},
	19: {
		"types": [7],
		"stats": [160, 110, 65, 65, 110, 30],
		"steps": [1, 2, 1, 1, 2, 1],
		"is_gason": false,
		"ancestors": []
	},
	20: {
		"types": [2],
		"stats": [41, 64, 45, 50, 50, 50], 
		"steps": [2, 1, 1, 1, 1, 1],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [20, 51, 68],
		"lvl_transform": 20,
	},
	21: {
		"types": [1],
		"stats": [0, 0, 0, 0, 0, 0],
		"steps": [0, 0, 0, 0, 0, 0],
		"is_gason": false,
		"ancestors": []
	},
	22: {
		"types": [5],
		"stats": [55, 3, 87, 5, 89, 60],
		"steps": [1, 0, 2, 0, 2, 3],
		"is_gason": true,
		"ancestors": []
	},
	23: {
		"types": [8],
		"stats": [70, 88, 80, 92, 81, 80],
		"steps": [2, 1, 1, 1, 1, 2],
		"is_gason": false,
		"ancestors": [],
	},
	24: {
		"types": [14, 7],
		"stats": [145, 150, 70, 77, 95, 50],
		"steps": [1, 1, 2, 1, 2, 1],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [24, 89],
		"lvl_transform": 39,
	},
	25: {
		"types": [14, 15],
		"stats": [48, 53, 49, 52, 55, 54],
		"steps": [2, 2, 1, 1, 1, 2],
		"is_gason": false,
		"ancestors": [23, 8, 24],
		"next_forms": [25, 52, 69],
		"lvl_transform": 20,
	},
	26: {
		"types": [18, 3],
		"stats": [58, 40, 61, 42, 63, 47],
		"steps": [2, 1, 2, 1, 2, 1],
		"is_gason": false,
		"ancestors": [5, 17, 7],
		"next_forms": [26, 53, 70],
		"lvl_transform": 21,
	},
	27: {
		"types": [4, 8],
		"stats": [41, 59, 48, 60, 45, 58],
		"steps": [1, 2, 1, 2, 1, 2],
		"is_gason": false,
		"ancestors": [2, 19, 4],
		"next_forms": [27, 54],
		"lvl_transform": 28,
	},
	28: {
		"types": [11, 16],
		"stats": [52, 47, 53, 65, 51, 58],
		"steps": [2, 1, 2, 2, 1, 1],
		"is_gason": false,
		"ancestors": [5, 6, 13],
		"next_forms": [28, 55],
    	"lvl_transform": 28,
		"lvl_lay": [35, 5],
		"price": 0.09
	},
	29: {
		"types": [5, 9],
		"stats": [55, 57, 60, 53, 52, 51],
		"steps": [1, 2, 2, 1, 1, 2],
		"is_gason": false,
		"ancestors": [8, 1, 12],
		"next_forms": [29, 56],
		"lvl_transform": 27,
		"lvl_lay": [35, 5],
		"price": 0.09
	},
	30: {
		"types": [2],
		"stats": [78, 65, 57, 57, 62, 65],
		"steps": [2, 2, 2, 1, 2, 1],
		"is_gason": false,
		"ancestors": [10, 16, 9],
		"next_forms": [30, 57],
    	"lvl_transform": 28,
		"lvl_lay": [35, 5],
		"price": 0.15
	},
	31: {
		"types": [12],
		"stats": [55, 62, 51, 45, 50, 52],
		"steps": [2, 2, 1, 1, 1, 2],
		"is_gason": false,
		"ancestors": [14, 12, 55],
    	"next_forms": [31, 58],
    	"lvl_transform": 27,
		"lvl_lay": [34, 5],
		"price": 0.04
	},
	32: {
		"types": [14],
		"stats": [56, 56, 54, 48, 54, 58],
		"steps": [2, 2, 2, 1, 1, 1],
		"is_gason": false,
		"ancestors": [18, 7, 1],
		"next_forms": [32, 59],
		"lvl_transform": 27,
		"lvl_lay": [34, 5],
		"price": 0.09
	},
	33: {
		"types": [15, 7],
		"stats": [60, 51, 57, 58, 59, 50],
		"steps": [2, 1, 1, 2, 2, 1],
		"is_gason": false,
		"ancestors": [17, 3, 11],
		"next_forms": [33, 60],
		"lvl_transform": 28,
		"lvl_lay": [33, 5],
		"price": 0.09
	},
	34: {
		"types": [18, 8],
		"stats": [52, 48, 47, 57, 46, 34], 
		"steps": [2, 1, 1, 2, 2, 1],
		"is_gason": false,
		"ancestors": [15, 4, 29],
		"next_forms": [34, 61, 71],
		"lvl_transform": 21,
		"lvl_lay": [31, 5],
		"price": 0.03
	},
	35: {
		"types": [18],
		"stats": [50, 20, 60, 20, 60, 50],
		"steps": [1, 1, 2, 1, 2, 2],
		"is_gason": true,
		"ancestors": [],
		"price": 0.03
	},
	36: {
		"types": [4],
		"stats": [50, 20, 60, 20, 60, 50],
		"steps": [1, 1, 2, 1, 2, 2],
		"is_gason": true,
		"ancestors": [],
		"price": 0.03
	},
	37: {
		"types": [7],
		"stats": [56, 57, 52, 45, 59, 58],
		"steps": [1, 2, 1, 1, 2, 2],
		"is_gason": false,
		"ancestors": [9, 18, 30],
		"next_forms": [37, 62, 63],
		"lvl_transform": 26,
		"lvl_lay": [34, 5],
		"price": 0.09
	},
	38: {
		"types": [14, 16], 
		"stats": [56, 61, 61, 81, 81, 56],
		"steps": [2, 1, 1, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [1, 38, 64],
		"lvl_transform": 40,
	},
	39: {
		"types": [4], 
		"stats": [48, 65, 53, 75, 75, 81],
		"steps": [2, 2, 1, 2, 2, 1], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [2, 39, 65],
		"lvl_transform": 40,
	},
	40: {
		"types": [18], 
		"stats": [59, 64, 87, 67, 86, 58],
		"steps": [2, 1, 3, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [3, 40],
	},
	41: {
		"types": [5, 16], 
		"stats": [57, 43, 60, 103, 49, 80],
		"steps": [2, 1, 1, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [4, 41, 66],
		"lvl_transform": 39,
	},
	42: {
		"types": [16],
		"stats": [52, 75, 55, 50, 67, 68],
		"steps": [2, 2, 1, 1, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [5, 42, 67],
		"lvl_transform": 42,
	},
	43: {
		"types": [11], 
		"stats": [68, 74, 40, 67, 54, 100],
		"steps": [1, 3, 2, 2, 2, 2],
		"is_gason": false,
		"ancestors": [],
		"next_forms": [6, 43],
	},
	44: {
		"types": [3], 
		"stats": [94, 60, 64, 81, 87, 47],
		"steps": [2, 1, 2, 3, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [7, 44],
	},
	45: {
		"types": [7, 3], 
		"stats": [100, 60, 50, 80, 53, 50],
		"steps": [2, 1, 3, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [8, 45],
	},
	46: {
		"types": [7, 12], 
		"stats": [64, 80, 57, 54, 64, 100],
		"steps": [2, 3, 2, 1, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [9, 46],
	},
	47: {
		"types": [4], 
		"stats": [74, 94, 60, 94, 67, 81],
		"steps": [1, 3, 2, 3, 2, 1], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [10, 47],
	},
	48: {
		"types": [8], 
		"stats": [74, 27, 40, 100, 74, 100],
		"steps": [2, 1, 2, 2, 2, 3], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [11, 48],
	},
	49: {
		"types": [12], 
		"stats": [94, 108, 67, 47, 47, 57],
		"steps": [2, 2, 2, 1, 2, 3], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [12, 49],
	},
	50: {
		"types": [7], 
		"stats": [74, 74, 74, 74, 74, 74],
		"steps": [2, 2, 2, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [18, 50],
	},
	51: {
		"types": [2, 17], 
		"stats": [51, 80, 56, 62, 62, 62],
		"steps": [2, 2, 1, 1, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [20, 51, 68],
		"lvl_transform": 37,
	},
	52: {
		"types": [14, 15], 
		"stats": [60, 66, 61, 65, 68, 67],
		"steps": [2, 2, 1, 1, 2, 2], 
		"is_gason": false,
		"ancestors": [23, 8, 24],
		"next_forms": [25, 52, 69],
		"lvl_transform": 39,
		"lvl_lay": [-1, -1],
	},
	53: {
		"types": [18, 3], 
		"stats": [72, 50, 76, 52, 78, 58],
		"steps": [2, 1, 2, 2, 2, 1], 
		"is_gason": false,
		"ancestors": [5, 17, 7],
		"next_forms": [26, 53, 70],
		"lvl_transform": 38,
		"lvl_lay": [-1, -1],
	},
	54: {
		"types": [4, 8], 
		"stats": [69, 73, 66, 75, 67, 80],
		"steps": [2, 2, 2, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [2, 19, 4],
		"next_forms": [27, 54],
		"lvl_lay": [-1, -1],
	},
	55: {
		"types": [11, 16], 
		"stats": [74, 63, 71, 87, 68, 78],
		"steps": [2, 1, 2, 3, 2, 2], 
		"is_gason": false,
		"ancestors": [5, 6, 13],
		"next_forms": [28, 55],
		"lvl_lay": [-1, -1],
	},
	56: {
		"types": [5, 9], 
		"stats": [74, 76, 81, 71, 70, 68],
		"steps": [2, 2, 3, 1, 3, 1], 
		"is_gason": false,
		"ancestors": [8, 1, 12],
		"next_forms": [29, 56],
		"lvl_lay": [-1, -1],
	},
	57: {
		"types": [2], 
		"stats": [97, 87, 76, 76, 83, 87],
		"steps": [2, 2, 2, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [10, 16, 9],
		"next_forms": [30, 57],
		"lvl_lay": [-1, -1],
	},
	58: {
		"types": [12], 
		"stats": [74, 94, 68, 60, 67, 70],
		"steps": [2, 3, 1, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [14, 12, 55],
		"next_forms": [31, 58],
		"lvl_lay": [-1, -1],
	},
	59: {
		"types": [14, 9], 
		"stats": [75, 75, 72, 64, 72, 78],
		"steps": [2, 2, 2, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [18, 7, 1],
		"next_forms": [32, 59],
		"lvl_lay": [-1, -1],
	},
	60: {
		"types": [15, 7], 
		"stats": [81, 68, 76, 78, 79, 67],
		"steps": [2, 3, 2, 2, 2, 1], 
		"is_gason": false,
		"ancestors": [17, 3, 11],
		"next_forms": [33, 60],
		"lvl_lay": [-1, -1],
	},
	61: {
		"types": [18, 8], 
		"stats": [65, 60, 58, 75, 57, 64],
		"steps": [2, 1, 2, 2, 2, 1], 
		"is_gason": false,
		"ancestors": [15, 4, 29],
		"next_forms": [34, 61, 71],
		"lvl_transform": 39,
		"lvl_lay": [-1, -1],
	},
	62: {
		"types": [7, 6], 
		"stats": [78, 76, 75, 56, 73, 72],
		"steps": [2, 2, 2, 1, 2, 3], 
		"is_gason": false,
		"ancestors": [9, 18, 30],
		"next_forms": [37, 62, 63],
		"lvl_transform": 5,
		"lvl_lay": [-1, -1],
	},
	63: {
		"types": [7, 13], 
		"stats": [78, 57, 65, 83, 65, 82],
		"steps": [2, 1, 2, 2, 2, 3], 
		"is_gason": false,
		"ancestors": [9, 18, 30],
		"next_forms": [37, 62, 63],
		"lvl_lay": [-1, -1],
	},
	64: {
		"types": [14, 16], 
		"stats": [70, 76, 76, 101, 101, 70],
		"steps": [2, 1, 2, 3, 3, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [1, 38, 64],
	},
	65: {
		"types": [4], 
		"stats": [60, 81, 66, 93, 93, 101],
		"steps": [2, 2, 2, 2, 2, 3], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [2, 39, 65],
	},
	66: {
		"types": [5, 16], 
		"stats": [71, 53, 75, 128, 61, 100],
		"steps": [2, 2, 2, 2, 3, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [4, 41, 66],
	},
	67: {
		"types": [16], 
		"stats": [65, 93, 68, 62, 83, 84],
		"steps": [2, 3, 3, 1, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [5, 42, 67],
	},
	68: {
		"types": [2, 17], 
		"stats": [63, 100, 70, 77, 77, 77],
		"steps": [2, 3, 2, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [20, 51, 68],
	},
	69: {
		"types": [14, 15], 
		"stats": [75, 82, 76, 81, 85, 83],
		"steps": [2, 3, 2, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [23, 8, 24],
		"next_forms": [25, 52, 69],
		"lvl_lay": [-1, -1],
	},
	70: {
		"types": [18, 3], 
		"stats": [90, 62, 95, 65, 97, 72],
		"steps": [2, 1, 3, 2, 3, 2], 
		"is_gason": false,
		"ancestors": [5, 17, 7],
		"next_forms": [26, 53, 70],
		"lvl_lay": [-1, -1],
	},
	71: {
		"types": [18, 8], 
		"stats": [81, 75, 79, 93, 79, 80],
		"steps": [2, 2, 2, 3, 2, 2], 
		"is_gason": false,
		"ancestors": [15, 4, 29],
		"next_forms": [34, 61, 71],
		"lvl_lay": [-1, -1],
	},
	72: {
		"types": [9], 
		"stats": [50, 20, 60, 20, 60, 50],
		"steps": [1, 1, 2, 1, 2, 2], 
		"is_gason": true,
		"ancestors": []
	},
	73: {
		"types": [13], 
		"stats": [50, 20, 60, 20, 60, 50],
		"steps": [1, 1, 2, 1, 2, 2], 
		"is_gason": true,
		"ancestors": []
	},
	74: {
		"types": [16], 
		"stats": [50, 20, 60, 20, 60, 50],
		"steps": [1, 1, 2, 1, 2, 2], 
		"is_gason": true,
		"ancestors": []
	},
	75: {
		"types": [3], 
		"stats": [50, 20, 60, 20, 60, 50],
		"steps": [1, 1, 2, 1, 2, 2], 
		"is_gason": true,
		"ancestors": []
	},
	76: {
		"types": [14], 
		"stats": [50, 20, 60, 20, 60, 50],
		"steps": [1, 1, 2, 1, 2, 2], 
		"is_gason": true,
		"ancestors": []
	},
	77: {
		"types": [13, 8], 
		"stats": [62, 54, 58, 67, 65, 67],
		"steps": [2, 1, 1, 2, 2, 1], 
		"is_gason": false,
		"ancestors": [14, 16, 11],
		"next_forms": [77, 82],
		"lvl_transform": 32,
		"lvl_lay": [36, 5],
	},
	78: {
		"types": [12, 5], 
		"stats": [59, 63, 62, 45, 58, 62],
		"steps": [1, 2, 2, 1, 1, 2], 
		"is_gason": false,
		"ancestors": [19, 9, 28],
		"next_forms": [78, 83],
		"lvl_transform": 30,
		"lvl_lay": [35, 5],
	},
	79: {
		"types": [14, 17], 
		"stats": [53, 57, 57, 46, 51, 43],
		"steps": [2, 2, 2, 1, 1, 1], 
		"is_gason": false,
		"ancestors": [24, 13, 32],
		"next_forms": [79, 84, 87],
		"lvl_transform": 23,
		"lvl_lay": [32, 5],
	},
	80: {
		"types": [1, 9], 
		"stats": [50, 58, 67, 59, 55, 63],
		"steps": [1, 2, 1, 2, 1, 2], 
		"is_gason": false,
		"ancestors": [29, 18, 16],
		"next_forms": [80, 85],
		"lvl_transform": 29,
		"lvl_lay": [35, 5],
	},
	81: {
		"types": [5, 6], 
		"stats": [55, 53, 48, 62, 48, 59],
		"steps": [2, 1, 1, 2, 1, 2], 
		"is_gason": false,
		"ancestors": [14, 4, 27],
		"next_forms": [81, 86, 88],
		"lvl_transform": 24,
		"lvl_lay": [34, 5],
	},
	82: {
		"types": [13, 8], 
		"stats": [83, 72, 78, 90, 87, 90],
		"steps": [2, 1, 2, 3, 2, 2], 
		"is_gason": false,
		"ancestors": [14, 11, 16],
		"next_forms": [77, 82],
		"lvl_lay": [-1, -1],
	},
	83: {
		"types": [12, 5], 
		"stats": [79, 85, 83, 60, 78, 83],
		"steps": [2, 2, 3, 1, 2, 2], 
		"is_gason": false,
		"ancestors": [19, 9, 28],
		"next_forms": [78, 83],
		"lvl_lay": [-1, -1],
	},
	84: {
		"types": [14, 17], 
		"stats": [66, 71, 71, 57, 63, 53],
		"steps": [2, 2, 2, 1, 2, 1], 
		"is_gason": false,
		"ancestors": [24, 32, 13],
		"next_forms": [79, 84, 87],
		"lvl_transform": 38,
		"lvl_lay": [-1, -1],
	},
	85: {
		"types": [1, 9], 
		"stats": [67, 78, 90, 79, 74, 85],
		"steps": [2, 2, 3, 1, 2, 2], 
		"is_gason": false,
		"ancestors": [18, 29, 16],
		"next_forms": [80, 85],
		"lvl_lay": [-1, -1],
	},
	86: {
		"types": [5, 6], 
		"stats": [68, 66, 60, 77, 60, 73],
		"steps": [2, 2, 1, 2, 1, 2], 
		"is_gason": false,
		"ancestors": [14, 27, 4],
		"next_forms": [81, 86, 88],
		"lvl_transform": 41,
		"lvl_lay": [-1, -1],
	},
	87: {
		"types": [14, 17], 
		"stats": [82, 88, 88, 71, 78, 66],
		"steps": [2, 3, 2, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [24, 32, 13],
		"next_forms": [79, 84, 87],
		"lvl_lay": [-1, -1],
	},
	88: {
		"types": [5, 6], 
		"stats": [85, 82, 75, 96, 75, 91],
		"steps": [2, 2, 2, 3, 2, 2], 
		"is_gason": false,
		"ancestors": [14, 27, 4],
		"next_forms": [81, 86, 88],
		"lvl_lay": [-1, -1],
	},
	89: {
		"types": [14, 7], 
		"stats": [150, 162, 94, 89, 95, 67],
		"steps": [1, 1, 2, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [],
		"next_forms": [24, 89],
	},
	90: {
		"types": [4, 12], 
		"stats": [58, 68, 58, 58, 58, 68],
		"steps": [1, 2, 2, 1, 2, 1], 
		"is_gason": false,
		"ancestors": [25, 26, 54],
		"next_forms": [90, 91, 92],
		"lvl_transform": 28,
	},
	91: {
		"types": [4, 12], 
		"stats": [72, 85, 72, 72, 72, 72],
		"steps": [2, 2, 2, 1, 2, 1], 
		"is_gason": false,
		"ancestors": [25, 26, 54],
		"next_forms": [90, 91, 92],
		"lvl_transform": 38,
		"lvl_lay": [-1, -1],
	},
	92: {
		"types": [4, 12], 
		"stats": [90, 106, 90, 90, 90, 90],
		"steps": [2, 3, 3, 1, 2, 2], 
		"is_gason": false,
		"ancestors": [25, 26, 54],
		"next_forms": [90, 91, 92],
		"lvl_lay": [-1, -1],
	},
	93: {
		"types": [15, 7], 
		"stats": [58, 58, 58, 68, 58, 68],
		"steps": [1, 1, 2, 2, 2, 1], 
		"is_gason": false,
		"ancestors": [26, 27, 52],
		"next_forms": [93, 94, 95],
		"lvl_transform": 28,
	},
	94: {
		"types": [15, 7], 
		"stats": [72, 72, 72, 85, 72, 72],
		"steps": [2, 1, 2, 2, 2, 1], 
		"is_gason": false,
		"ancestors": [26, 27, 52],
		"next_forms": [93, 94, 95],
		"lvl_transform": 38,
		"lvl_lay": [-1, -1],
	},
	95: {
		"types": [15, 7], 
		"stats": [90, 90, 90, 106, 90, 90],
		"steps": [2, 1, 2, 3, 3, 2], 
		"is_gason": false,
		"ancestors": [26, 27, 52],
		"next_forms": [93, 94, 95],
		"lvl_lay": [-1, -1],
	},
	96: {
		"types": [6], 
		"stats": [50, 20, 60, 20, 60, 50],
		"steps": [1, 1, 2, 1, 2, 2], 
		"is_gason": true,
		"ancestors": []
	},
	97: {
		"types": [6], 
		"stats": [61, 70, 67, 47, 68, 45],
		"steps": [1, 2, 2, 1, 2, 1], 
		"is_gason": false,
		"ancestors": [32, 81, 37],
		"next_forms": [97, 98],
		"lvl_transform": 32,
		"lvl_lay": [35, 5],
	},
	98: {
		"types": [6, 9], 
		"stats": [83, 95, 91, 64, 91, 61],
		"steps": [2, 3, 2, 1, 2, 2], 
		"is_gason": false,
		"ancestors": [32, 81, 37],
		"next_forms": [97, 98],
		"lvl_lay": [-1, -1],
	},
	99: {
		"types": [16, 12], 
		"stats": [50, 46, 66, 73, 66, 66],
		"steps": [1, 1, 1, 2, 2, 2], 
		"is_gason": false,
		"ancestors": [31, 28, 78],
		"next_forms": [99, 100],
		"lvl_transform": 30,
		"lvl_lay": [34, 5],
	},
	100: {
		"types": [16, 12], 
		"stats": [67, 62, 89, 99, 89, 99],
		"steps": [2, 1, 2, 3, 2, 2], 
		"is_gason": false,
		"ancestors": [31, 28, 78],
		"next_forms": [99, 100],
		"lvl_lay": [-1, -1],
	}

}

//abi and address of data contract 
var abi = [{"constant":true,"inputs":[{"name":"","type":"uint32"}],"name":"monsterClass","outputs":[{"name":"classId","type":"uint32"},{"name":"price","type":"uint256"},{"name":"returnPrice","type":"uint256"},{"name":"total","type":"uint32"},{"name":"catchable","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_objId","type":"uint64"}],"name":"getMonsterObj","outputs":[{"name":"objId","type":"uint64"},{"name":"classId","type":"uint32"},{"name":"trainer","type":"address"},{"name":"exp","type":"uint32"},{"name":"createIndex","type":"uint32"},{"name":"lastClaimIndex","type":"uint32"},{"name":"createTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_objId","type":"uint64"}],"name":"getMonsterName","outputs":[{"name":"name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_type","type":"uint8"},{"name":"_id","type":"uint64"},{"name":"_value","type":"uint8"}],"name":"addElementToArrayType","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_objId","type":"uint64"},{"name":"amount","type":"uint32"}],"name":"decreaseMonsterExp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_type","type":"uint8"},{"name":"_id","type":"uint64"},{"name":"_index","type":"uint256"},{"name":"_value","type":"uint8"}],"name":"updateIndexOfArrayType","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_objId","type":"uint64"},{"name":"_name","type":"string"},{"name":"_exp","type":"uint32"},{"name":"_createIndex","type":"uint32"},{"name":"_lastClaimIndex","type":"uint32"}],"name":"setMonsterObj","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"trainerDex","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_type","type":"uint8"},{"name":"_id","type":"uint64"}],"name":"getSizeArrayType","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_trainer","type":"address"}],"name":"getMonsterDexSize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_trainer","type":"address"},{"name":"_amount","type":"uint256"}],"name":"deductExtraBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sendTo","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawEther","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_objId","type":"uint64"},{"name":"amount","type":"uint32"}],"name":"increaseMonsterExp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_trainer","type":"address"},{"name":"_monsterId","type":"uint64"}],"name":"removeMonsterIdMapping","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_type","type":"uint8"},{"name":"_id","type":"uint64"},{"name":"_index","type":"uint256"}],"name":"getElementInArrayType","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_trainer","type":"address"}],"name":"collectAllReturnBalance","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newModerator","type":"address"}],"name":"AddModerator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_trainer","type":"address"},{"name":"index","type":"uint256"}],"name":"getMonsterObjId","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalMonster","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint64"}],"name":"monsterWorld","outputs":[{"name":"monsterId","type":"uint64"},{"name":"classId","type":"uint32"},{"name":"trainer","type":"address"},{"name":"name","type":"string"},{"name":"exp","type":"uint32"},{"name":"createIndex","type":"uint32"},{"name":"lastClaimIndex","type":"uint32"},{"name":"createTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_monsterId","type":"uint64"}],"name":"transferMonster","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalClass","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_trainer","type":"address"},{"name":"_amount","type":"uint256"}],"name":"addExtraBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_trainer","type":"address"},{"name":"_monsterId","type":"uint64"}],"name":"addMonsterIdMapping","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_classId","type":"uint32"}],"name":"getMonsterClass","outputs":[{"name":"classId","type":"uint32"},{"name":"price","type":"uint256"},{"name":"returnPrice","type":"uint256"},{"name":"total","type":"uint32"},{"name":"catchable","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_monsterId","type":"uint64"}],"name":"clearMonsterReturnBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_trainer","type":"address"},{"name":"_amount","type":"uint256"}],"name":"setExtraBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_oldModerator","type":"address"}],"name":"RemoveModerator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"moderators","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"Kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_trainer","type":"address"}],"name":"getExtraBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_classId","type":"uint32"},{"name":"_price","type":"uint256"},{"name":"_returnPrice","type":"uint256"},{"name":"_catchable","type":"bool"}],"name":"setMonsterClass","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_trainer","type":"address"}],"name":"getExpectedBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"trainerExtraBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"ChangeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_objId","type":"uint64"}],"name":"getMonsterReturn","outputs":[{"name":"current","type":"uint256"},{"name":"total","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_classId","type":"uint32"},{"name":"_trainer","type":"address"},{"name":"_name","type":"string"}],"name":"addMonsterObj","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"}]
var dataContractAddress = "0xABC1c404424BDF24C19A5cC5EF8F47781D18Eb3E";

var dataContract = new web3.eth.Contract(abi,dataContractAddress);

//abi and address of battle contract 
var battleAbi = [{"constant":false,"inputs":[{"name":"_castleMaxLevelGap","type":"uint8"},{"name":"_maxActiveCastle","type":"uint16"},{"name":"_brickETHPrice","type":"uint256"},{"name":"_castleExpAdjustment","type":"uint8"},{"name":"_attackerExpAdjustment","type":"uint8"},{"name":"_levelExpAdjustment","type":"uint8"},{"name":"_castleMinBrick","type":"uint32"}],"name":"setCastleConfig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_objId","type":"uint64"}],"name":"getMonsterCP","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dataContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"attackerExpAdjustment","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"moderators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"worldContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_trainer","type":"address"},{"name":"_a1","type":"uint64"},{"name":"_a2","type":"uint64"},{"name":"_a3","type":"uint64"},{"name":"_s1","type":"uint64"},{"name":"_s2","type":"uint64"},{"name":"_s3","type":"uint64"}],"name":"hasValidParam","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_objId","type":"uint64"}],"name":"getObjExp","outputs":[{"name":"","type":"uint32"},{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"levelExpAdjustment","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"brickETHPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_attack","type":"uint16"},{"name":"_specialAttack","type":"uint16"},{"name":"_defense","type":"uint16"},{"name":"_specialDefense","type":"uint16"},{"name":"_lucky","type":"bool"}],"name":"calHpDeducted","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dataContract","type":"address"},{"name":"_worldContract","type":"address"},{"name":"_tradeContract","type":"address"},{"name":"_castleContract","type":"address"},{"name":"_paymentContract","type":"address"}],"name":"setContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_ancestorBuffPercentage","type":"uint8"},{"name":"_gasonBuffPercentage","type":"uint8"},{"name":"_typeBuffPercentage","type":"uint8"},{"name":"_maxLevel","type":"uint8"},{"name":"_maxRandomRound","type":"uint8"},{"name":"_minHpDeducted","type":"uint8"},{"name":"_winTokenReward","type":"uint256"}],"name":"setConfig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_type1","type":"uint8"},{"name":"_type2","type":"uint8"}],"name":"setTypeAdvantage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"genLevelExp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"setTypeAdvantages","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_objId","type":"uint64"}],"name":"isOnBattle","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"maxRan","type":"uint8"},{"name":"index","type":"uint8"},{"name":"priAddress","type":"address"}],"name":"getRandom","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"level2","type":"uint8"},{"name":"level","type":"uint8"},{"name":"_win","type":"bool"}],"name":"getGainExp","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_castleId","type":"uint32"},{"name":"_name","type":"string"}],"name":"renameCastle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalWithdraw","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_castleId","type":"uint32"},{"name":"_aa1","type":"uint64"},{"name":"_aa2","type":"uint64"},{"name":"_aa3","type":"uint64"},{"name":"_as1","type":"uint64"},{"name":"_as2","type":"uint64"},{"name":"_as3","type":"uint64"}],"name":"attackCastle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_isMaintaining","type":"bool"}],"name":"UpdateMaintaining","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"castleMinBrick","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_a1","type":"uint64"},{"name":"_a2","type":"uint64"},{"name":"_a3","type":"uint64"},{"name":"_s1","type":"uint64"},{"name":"_s2","type":"uint64"},{"name":"_s3","type":"uint64"}],"name":"createCastle","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"totalModerators","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_classId","type":"uint32"}],"name":"getCacheClassSize","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sendTo","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"s1","type":"uint64"},{"name":"s2","type":"uint64"},{"name":"s3","type":"uint64"}],"name":"getSupporterInfo","outputs":[{"components":[{"name":"classId1","type":"uint32"},{"name":"isGason1","type":"bool"},{"name":"type1","type":"uint8"},{"name":"classId2","type":"uint32"},{"name":"isGason2","type":"bool"},{"name":"type2","type":"uint8"},{"name":"classId3","type":"uint32"},{"name":"isGason3","type":"bool"},{"name":"type3","type":"uint8"}],"name":"sData","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"castleMaxLevelGap","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"winBrickReturn","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newModerator","type":"address"}],"name":"AddModerator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"GEN0_NO","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"NO_MONSTER","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_objId","type":"uint64"}],"name":"getCurrentStats","outputs":[{"name":"","type":"uint32"},{"name":"","type":"uint8"},{"name":"","type":"uint16[6]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ancestorBuffPercentage","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"typeBuffPercentage","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"castleExpAdjustment","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_classId","type":"uint32"}],"name":"setCacheClassInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"winTokenReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paymentContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxActiveCastle","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_trainer","type":"address"},{"name":"_noBrick","type":"uint32"},{"name":"_name","type":"string"},{"name":"_a1","type":"uint64"},{"name":"_a2","type":"uint64"},{"name":"_a3","type":"uint64"},{"name":"_s1","type":"uint64"},{"name":"_s2","type":"uint64"},{"name":"_s3","type":"uint64"}],"name":"createCastleWithToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"exp","type":"uint32"}],"name":"getLevel","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_classId1","type":"uint32"},{"name":"_classId2","type":"uint32"},{"name":"_classId3","type":"uint32"},{"name":"_classId4","type":"uint32"},{"name":"_classId5","type":"uint32"},{"name":"_classId6","type":"uint32"},{"name":"_classId7","type":"uint32"},{"name":"_classId8","type":"uint32"}],"name":"fastSetCacheClassInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_oldModerator","type":"address"}],"name":"RemoveModerator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxLevel","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minHpDeducted","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_objId","type":"uint64"}],"name":"getMonsterLevel","outputs":[{"name":"","type":"uint32"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_castleId","type":"uint32"}],"name":"removeCastle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gasonBuffPercentage","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STAT_COUNT","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_objId","type":"uint64"},{"name":"_owner","type":"address"}],"name":"isValidOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEarn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"castleContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxRandomRound","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isMaintaining","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"ChangeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tradeContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_dataContract","type":"address"},{"name":"_worldContract","type":"address"},{"name":"_tradeContract","type":"address"},{"name":"_castleContract","type":"address"},{"name":"_paymentContract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"castleId","type":"uint32"}],"name":"EventCreateCastle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"attacker","type":"address"},{"indexed":false,"name":"castleId","type":"uint32"},{"indexed":false,"name":"result","type":"uint8"}],"name":"EventAttackCastle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"castleId","type":"uint32"}],"name":"EventRemoveCastle","type":"event"}];
var battleContractAddress = "0xDf6164EfD12678bF6A7d5A1Ddf73C831493F6574";
var battleContract = new web3.eth.Contract(battleAbi,battleContractAddress);


app.get('/node/:monsterId', function (req, res) {
	try {
    	var data = {};
		var increment = 0;
		var monsterId = req.params.monsterId;
		var total_stats = 0;
		var total_base_stats = 0;
		dataContract.methods.getMonsterObj(monsterId).call().then(function(result){
			var class_id = result.classId;
			data['trainer'] = result.trainer;
			if(class_id == 0){
				res.send({"hp":"0","pa":"0","pd":"0","sa":"0","sd":"0","sp":"0","trainer":"0","base_hp":"0","base_pa":"0","base_pd":"0","base_sa":"0","base_sd":"0","base_sp":"0","perfectness":"0","classId":"0","image":"0","name":"0"});
			}
			if(('name' in data) && ('trainer' in data) && ('hp' in data) && ('base_hp' in data)){
				res.send(data);
			}											
		});
		dataContract.methods.getMonsterName(monsterId).call().then(function(result){
			data['name'] = result;
			if(('name' in data) && ('trainer' in data) && ('hp' in data) && ('base_hp' in data)){
				res.send(data);
			}
		});
		battleContract.methods.getCurrentStats(monsterId).call().then(function(result){
			var class_id  = parseInt(result[0]);
			var class_data = MONSTER_CLASS_STATS[class_id];
			var lvl = result[1];
			var current_stats = result[2];

			data['hp'] = current_stats[0]-( class_data['steps'][0]*3*lvl );
			data['pa'] = current_stats[1]-( class_data['steps'][1]*3*lvl );
			data['pd'] = current_stats[2]-( class_data['steps'][2]*3*lvl );
			data['sa'] = current_stats[3]-( class_data['steps'][3]*3*lvl );
			data['sd'] = current_stats[4]-( class_data['steps'][4]*3*lvl );
			data['sp'] = current_stats[5]-( class_data['steps'][5]*3*lvl );
			data['classId'] = parseInt(class_id);
			data['base_hp'] = class_data['stats'][0];
			data['base_pa'] = class_data['stats'][1];
			data['base_pd'] = class_data['stats'][2];
			data['base_sa'] = class_data['stats'][3];
			data['base_sd'] = class_data['stats'][4];
			data['base_sp'] = class_data['stats'][5];

			total_iv = (data['hp']-data['base_hp'])+(data['pa']-data['base_pa'])+(data['pd']-data['base_pd'])+(data['sa']-data['base_sa'])+(data['sd']-data['base_sd'])+(data['sp']-data['base_sp']);
			data['perfectness'] = (total_iv*100/(31*6)).toFixed(2)+"%";
			if(class_id == 0){
				res.send({"hp":"0","pa":"0","pd":"0","sa":"0","sd":"0","sp":"0","trainer":"0","base_hp":"0","base_pa":"0","base_pd":"0","base_sa":"0","base_sd":"0","base_sp":"0","perfectness":"0","classId":"0","image":"0","name":"0"});
			}
			data['image'] = monster_image_list[class_id-1];
			if(('name' in data) && ('trainer' in data) && ('hp' in data) && ('base_hp' in data)){
				res.send(data);
			}
		});
	}
	catch(err) {
		//just sent empty data for now
	    console.log(err.message);
	    res.send({"hp":"0","pa":"0","pd":"0","sa":"0","sd":"0","sp":"0","trainer":"0","base_hp":"0","base_pa":"0","base_pd":"0","base_sa":"0","base_sd":"0","base_sp":"0","perfectness":"0","classId":"0","image":"0","name":"0"});
	}
	


});

app.get('/node/', (req, res) => res.send('=P'))

app.listen(8080, () => console.log('Example app listening on port 3000!'))

