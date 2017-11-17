Object.defineProperty(Object.prototype, 'getProperty',{
    value :function(propertyName,separator){
        if (separator === undefined){
            return this[propertyName];
        }
        else {
            let splitedProperty = propertyName.split(separator); 
            if (splitedProperty.length === 1){
                return this[propertyName];
            }
            let property = this;
            for (let subName of splitedProperty){
                if (property !== undefined){
                    property = property[subName];
                }
            }
            return property;
        }
    }
});

Object.defineProperty(Object.prototype, 'getPropertyDot',{
    value : function(propertyName){
        return this.getProperty(propertyName,".");
    }
});

Object.defineProperty(Object.prototype, 'setProperty',{
    value :function(propertyName,value,separator){
        if (separator === undefined){
            this[propertyName] = value;
        }
        else {
            let splitedProperty = propertyName.split(separator); 
            if (splitedProperty.length === 1){
                this[propertyName] = value;
            }else{
                let property = this;
                let tailPropertyValue = splitedProperty.pop();
                for (let subName of splitedProperty){
                    if (property[subName].hasOwnProperty("length")){
                        property[subName] = [...property[subName]];
                    }else{
                        property[subName] = Object.assign({},property[subName]);
                    }
                    property = property[subName];
                }
                property[tailPropertyValue] = value;
            }
            
        }
    }
});

Object.defineProperty(Object.prototype, 'setPropertyDot',{
    value : function(propertyName,value){
        this.setProperty(propertyName,value,".");
    }
});