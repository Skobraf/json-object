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
                        type:{}
                                      }

                      ]
        }]
    }
		},
		count:0
		}
		updateStructure = (json, index) => {
			let struct = {...this.state.obj['state1']};
			const name = json["textRef"];
			const value = json["valueRef"];
			const status = json["statusRef"];
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
			console.log(struct);


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

   