'use strict';

const Homey = require('homey');
const rp = require('request-promise');

const jar = rp.jar();
var session = require('client-sessions');
var request = require('request');
var xml2js = require('xml2js');

const Verisure = require('./lib/Api.js');



class VerisureApp extends Homey.App {

	
	onInit() {

		this.log('[#46] VerisureApp is running...');
		
		console.log('Get token');
		let api = new Verisure();
		
		api.getToken();


	}

	logger ( data ) {
		
		console.log( data );
	}
	
	

	async getUser() {
		
		this.log('[#130] Loading getUser()...');	
		
		if(Homey.ManagerSettings.get('username')) {
			return "OK";
		} else {
			
			return "NOTOK";
		}


		return false;
	}

	async setUser(username, password) {
		this.log('[#141] Loading setUser()...');

		Homey.ManagerSettings.set('username', username);
		Homey.ManagerSettings.set('password', password);


	}

	async unsetUser() {
		Homey.ManagerSettings.unset('username');
		Homey.ManagerSettings.unset('password');
	}
	
}

module.exports = VerisureApp;

