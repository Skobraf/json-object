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
                        value:"valeur",
                        status: "text",
                        type:[]
                      },{
                        id:3,
                        name: "third state",
                        value:"valeur",
                        status: "text",
                        type:"hellow muther fucker"
                                      }

                      ]
        }]
    }
		},
		count:0
		}
		updateStructure = (json, index, id) => {
			let struct = {...this.state.obj['state2']};
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
				struct.type = [];
				break;
				case 'structure':
				console.log('structure');
				break;
				case 'text':
				console.log('text');
				break;
				case 'number':
				console.log('number');
				break;
				default :
			}
			console.log(result, id);


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
							 />
							)
					})}
				</ul>
			</div>
					
			)
	}
}

export default App;

   