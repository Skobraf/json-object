import React from 'react';
import Form  from './Form';

class App extends React.Component {
	state = {
		obj:{
			state2:{
			        id:0,
        			name: "third state",
        			value:"valeur",
        			status: "text",
        			type: [{
              id:1,
              name: "object state",
              value:"valeur",
              status: "text",
              type: [
                      {
                        id:2,
                        name: "third state",
                        value:undefined,
                        status: "text",
                        type:[]
                      }]
        }]
    }
		},
		count:0
		}
		updateValues = (json, id) => {
			let struct = {...this.state.obj['state2']};
			let k = {...this.state.obj};
			const name = json["textRef"];
			const value = json["valueRef"];
			const status = json["statusRef"];
			function getObject(theObject) {
				    let result = null;
				    if(theObject instanceof Array) {
				        for(let i = 0; i < theObject.length; i++) {
				            result = getObject(theObject[i]);
				        }
				    }
				    else
				    {
				        for(let prop in theObject) {
				          /*THE KEY YOU WANT TO LOOK FOR*/
				            if(prop == 'id') {
				              /* INDEX IS THE VALUE YOU WANT TO ACCESS */
				                if(theObject[prop] == id) {
				                    return theObject;
				                }
				            }
				            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array)
				                result = getObject(theObject[prop]);
				        }
				    }
				    return result;
				}
				const result = getObject(struct);
			switch(status) {
				case 'array':
				result.name = name;
				result.status = status;
				break;
				case 'structure':
				result.name = name;
				break;
				case 'text':
				result.name = name;
				result.value = `${value}`;
				break;
				case 'number':
				result.name = name;
				result.value = Number(value);

				break;
				default :
			}
			console.log(result);

		}
		updateStructure = (json, id) => {
			let struct = {...this.state.obj['state2']};
			let k = {...this.state.obj};
			const name = json["textRef"];
			const value = json["valueRef"];
			const status = json["statusRef"];
			function getObject(theObject) {
				    let result = null;
				    if(theObject instanceof Array) {
				        for(let i = 0; i < theObject.length; i++) {
				            result = getObject(theObject[i]);
				        }
				    }
				    else
				    {
				        for(let prop in theObject) {
				          /*THE KEY YOU WANT TO LOOK FOR*/
				            if(prop == 'id') {
				              /* INDEX IS THE VALUE YOU WANT TO ACCESS */
				                if(theObject[prop] == id) {
				                    return theObject;
				                }
				            }
				            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array)
				                result = getObject(theObject[prop]);
				        }
				    }
				    return result;
				}
				const result = getObject(struct);
			switch(status) {
				case 'array':
				result.type = [];
				result.status = status;
				break;
				case 'structure':
				result.type = {};
				result.status = status;
				break;
				case 'text':
				result.type = "";
				result.status = status;
				break;
				case 'number':
				result.type =  Number()
				result.status = status;
				break;
				default :
			}
			console.log(this.state);
			 this.setState({obj:k})

		}
		addStructure = (json, id) => {
			let struct = {...this.state.obj['state2']};
			let k = {...this.state.obj};
			const name = json["textRef"];
			const value = json["valueRef"];
			const status = json["statusRef"];
			function getObject(theObject) {
				    let result = null;
				    if(theObject instanceof Array) {
				        for(let i = 0; i < theObject.length; i++) {
				            result = getObject(theObject[i]);
				        }
				    }
				    else
				    {
				        for(let prop in theObject) {
				          /*THE KEY YOU WANT TO LOOK FOR*/
				            if(prop === 'id') {
				              /* INDEX IS THE VALUE YOU WANT TO ACCESS */
				                if(theObject[prop] === id) {
				                    return theObject;
				                }
				            }
				            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array)
				                result = getObject(theObject[prop]);
				        }
				    }
				    return result;
				}
				const result = getObject(struct);
			switch(status) {
				case 'array':
				result.type.push({
					id:parseInt(id) +1 ,
        			name: name,
        			value:"valeur",
        			status: "text",
        			type:""
				});
				break;
				case 'structure':
				result.type = {};
				break;
				default :
			}
			console.log(this.state);
			 this.setState({obj:k})
		}

	render() {
		return (
			<div>
				<ul>
					{Object.keys(this.state.obj).map((data, i) => {
						return (
							<Form
								key={i}
								type={this.state.obj[data]}
								updateStructure={this.updateStructure}
								updateValues={this.updateValues}
								addStructure={this.addStructure}
							 />
							)
					})}
				</ul>
			</div>
					
			)
	}
}

export default App;

   