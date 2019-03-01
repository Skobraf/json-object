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
        			type: []
    }
		},
		count:0
		}
		addSection = () => {
			const section = {...this.state.obj}
			section[`section${this.state.count}`] = {
					id:0,
        			name: "third state",
        			value:"valeur",
        			status: "text",
        			type: []
			};
			this.setState({
				obj: section,
				count: this.state.count +1
			})
		}
		updateValues = (json, id, section) => {
			let struct = {...this.state.obj[section]};
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
		updateStructure = (json, id, section) => {
			let struct = {...this.state.obj[section]};
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
		addStructure = (json, id, section) => {
			let struct = {...this.state.obj[section]};
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
        			name: undefined,
        			value:undefined,
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
								section={data}
								updateStructure={this.updateStructure}
								updateValues={this.updateValues}
								addStructure={this.addStructure}
							 />
							)
					})}
				</ul>
				<button onClick={this.addSection}>Add new</button>
			</div>
					
			)
	}
}

export default App;

   