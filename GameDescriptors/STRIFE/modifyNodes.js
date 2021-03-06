gameDescription.nodes = Object.assign(gameDescription.nodes, 
{
    increaseRoundCounter:{
        nodeType:"Modify",
        name:"increaseRoundCounter",
        description: "add one to the ROUND_COUNTER value",
        entity: {type:"entityByName",name:"ROUND_COUNTER"},
        attribute: "value",
        newValue: {
            baseValue: {type:"entityByName",name:"ROUND_COUNTER",attribute:"value"},
            operations: [
                {operator:"+",operands:[1]}
            ]
        }
    },
    increaseTurnCounter:{
        nodeType:"Modify",
        name:"increaseTurnCounter",
        description: "add one to the TURN_COUNTER value",
        entity: {type:"entityByName",name:"TURN_COUNTER"},
        attribute: "value",
        newValue: {
            baseValue: {type:"entityByName",name:"TURN_COUNTER",attribute:"value"},
            operations: [
                {operator:"+",operands:[1]}
            ]
        }
    },
    resetTurnCounter:{
        nodeType:"Modify",
        name:"resetTurnCounter",
        description: "set TURN_COUNTER value to 0",
        entity: {type:"entityByName",name:"TURN_COUNTER"},
        attribute: "value",
        newValue: {
            baseValue: 0,
        }
    },
    moveEntityTo:{
        nodeType:"Modify",
        name:"moveEntityTo",
        description: "move entity to other location",
        inputNames:[{name:"entity",key:"entity"},{name:"nextLocation",key:"nextLocation"}],
        outputNames:[],
        entity: {type:"param",name:"entity"},
        attribute: "location",
        newValue: {
            baseValue: {type:"param",name:"nextLocation"},
        }
    },

    addProperty:{
        nodeType:"Modify",
        name:"addProperty",
        description: "add Property to entity",
        inputNames:[{name:"entity",key:"entity"},{name:"propertyName",key:"propertyName"},{name:"propertyValue",key:"propertyValue"}],
        outputNames:[],
        entity: {type:"param",name:"entity"},
        attribute: {type:"param",name:"propertyName"},
        newValue:  {type:"param",name:"propertyValue"},
        
    }
});