"use strict";
PYC.Describe("Entity",{
  attributes:{
    "owner": {},
    "location":{},
    "name":"",
    "children":[]
  },
  builder: function(me,params){   
  	me.prepareChildrenManagement();
  	me.insertAditionalAttributes(params);
    
  },
  publ: function(me,params){
  	me.insertAditionalAttributes = function(params){
  		var me = this;
	  	for (let attr in params){
	      if( me[attr] !== undefined){
	      	me[attr] = params[attr];
	      } else{
	      	PYC.injectGeterSeterAttribute(me,attr,params[attr]);
	      }
	    }
  	};

  	me.prepareChildrenManagement = function(){
  		var me = this;
  		me.$listenEvent(me,"beforeChange:location","redefineContainedChildren");
  	};

  	me.redefineContainedChildren = async function({newValue = {}}){
  		var me = this;
  		
  		if (me.location.removeChild !== undefined){
        await me.location.removeChild({child:me});
  		}
  		if (newValue.removeChild !== undefined){
  			await newValue.addChild({child:me});
  		}
  		return true;
  	};

  	me.removeChild = async function({child}){
  		var me = this;
  		var index = me.children.indexOf(child);
		  return await me.children.splice(index, 1);
  	};

  	me.addChild = async function({child}){
  		var me = this;
  		return await  me.children.push(child);
  	};
  	
  	me.select = async function(selectableEntities){
  		var me = this;
  		return new Promise( function(resolve,reject) {
  			setTimeout( function() {
	  			let selectionIndex = Math.floor((Math.random() * selectableEntities.length));
	  			console.log("La entidad '" + me.name + "' ha seleccionado: " + selectableEntities[selectionIndex].name);
  				resolve(selectableEntities[selectionIndex]);
  			}, Math.random() * 200);
  		}); 
  		
  	};
  }
});
