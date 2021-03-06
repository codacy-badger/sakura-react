 /**
 * AppContainer.ts
 * Manages the root container of the application.
 * Handles root UI interactions and application navigation.
 * 
 * Notes: 
 * - N/A
 * 
 * Created by Elias Mawa on 19-04-11
 * Last edit by Elias Mawa on 19-04-11
 */

import { createAppContainer, createStackNavigator } from 'react-navigation';
import { NavigationContainer } from 'react-navigation';

import { LibraryCompenent } from "./LibraryComponent";
import { GalleryCompenent } from "./GalleryComponent";
import { SettingsComponent } from "./SettingsComponent";

import { routes } from "../constants/Component.json";

/**
 * Creates a root container for an app
 *
 * @class AppContainer
 * @classdesc Creates a root container for an app
 * @constructor Prepares a root component to be created. Sets a react-navigator type
 *
 * @function create Returns an app container object
 *
 * @prop {NavigationContainer} navigator  Navigation system by react-navigator
 */
class AppContainer {

	/*** public ***/

	/**
	 * Returns an app container object
	 *
	 * @returns {React.Component} returns the user that sent the message, or the first person mentioned in the message
	 */
	public create() {
		return createAppContainer(this.navigator);
	}
	
	/*** private ***/
	
	private navigator: NavigationContainer;

	/*** constructors & deconstructors ****/

	/**
	* Prepares a root component to be created. Sets a react-navigator type
	*/
   public constructor() {
	   this.navigator = createStackNavigator({
		   Library: { screen: LibraryCompenent },
		   Gallery: { screen: GalleryCompenent },
		   Settings: { screen: SettingsComponent },
	   }, {
		   initialRouteName: `${routes[0].name}`,
		   headerMode: "none",
	   });
   }

}

export {
	AppContainer,
};
