import React from 'react';

class Form extends React.Component {
	statusRef = React.createRef();
	textRef = React.createRef();
	valueRef = React.createRef();
	showVisible = () => {
		this.setState({visible: false});
	}
	handleData = (e) => {
		e.preventDefault();
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		this.props.addStructure(json,this.props.type.id)
	}
	handleValues = () => {
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		this.props.updateValues(json,this.props.type.id)
	}
	toggleVisibility = () => {
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}

		if (this.statusRef.current.value ==="array" || this.statusRef.current.value ==="structure" ) {
			this.visible = true;
		}
		else {this.visible = false;}
		this.props.updateStructure(json,this.props.type.id)
		}

		

	render() {
		if(Array.isArray(this.props.type.type)) {
			let arr = this.props.type;
			return (
				<div>
					<li onClick={this.showVisible}>
						<form onSubmit={this.handleData}>
						<input type="text" placeholder="Text" ref={this.textRef} onChange={this.handleValues} />
						<select name="valeur"  ref={this.statusRef} onChange={this.toggleVisibility}>
							<option value="text">text</option>
							<option value="boolean">Boolean</option>
							<option value="number">Number</option>
							<option value="structure">Structure</option>
							<option value="array">Array</option>
							<option value="date">Date</option>
						</select>
						<input type="text" placeholder="Value" ref={this.valueRef}  style={{display: this.visible ? 'none' : 'inline-block'}} onChange={this.handleValues} />
						<button style={{display: this.visible ? 'inline-block' : 'none'}} type="submit">Add</button>
					</form>
					</li>
					<ul>
						{arr.type.map((data, i) => {
							return (
									<Form
									key={i}
									type={data}
									updateStructure={this.props.updateStructure}
									updateValues={this.props.updateValues}
									addStructure={this.props.addStructure}
									index={i}
								/>
								)
						})}
					</ul>
				</div>

				)
		} else
			return (
				<li onClick={this.showVisible}>
						<form onSubmit={this.handleValues}>
						<input type="text" placeholder="Text" ref={this.textRef} onChange={this.handleValues} />
						<select name="valeur"  ref={this.statusRef} onChange={this.toggleVisibility}>
							<option value="text">text</option>
							<option value="boolean">Boolean</option>
							<option value="number">Number</option>
							<option value="structure">Structure</option>
							<option value="array">Array</option>
							<option value="date">Date</option>
						</select>
						<input type="text" placeholder="Value" ref={this.valueRef}  style={{display: this.visible ? 'none' : 'inline-block'}} onChange={this.handleValues} />
						<button style={{display: this.visible ? 'inline-block' : 'none'}} type="submit">Add</button>
					</form>
					</li>
			)
	}
}

export default Form;