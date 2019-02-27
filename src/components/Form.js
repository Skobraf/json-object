import React from 'react';

class Form extends React.Component {
	statusRef = React.createRef();
	textRef = React.createRef();
	valueRef = React.createRef();
	showVisible = () => {
		this.setState({visible: false});
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
		this.props.updateStructure(json, this.props.index)
		}

		

	render() {
		if(Array.isArray(this.props.type.type)) {
			let arr = this.props.type;
			return (
				<div>
					<li onClick={this.showVisible}>
						<form onSubmit={this.showMe}>
						<input type="text" placeholder="Text" ref={this.textRef} />
						<select name="valeur"  ref={this.statusRef} onChange={this.toggleVisibility}>
							<option value="text">text</option>
							<option value="boolean">Boolean</option>
							<option value="number">Number</option>
							<option value="structure">Structure</option>
							<option value="array">Array</option>
							<option value="date">Date</option>
						</select>
						<input type="text" placeholder="Value" ref={this.valueRef}  style={{display: this.visible ? 'none' : 'inline-block'}} />
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
						<form onSubmit={this.showMe}>
						<input type="text" placeholder="Text" ref={this.textRef} />
						<select name="valeur"  ref={this.statusRef} onChange={this.toggleVisibility}>
							<option value="text">text</option>
							<option value="boolean">Boolean</option>
							<option value="number">Number</option>
							<option value="structure">Structure</option>
							<option value="array">Array</option>
							<option value="date">Date</option>
						</select>
						<input type="text" placeholder="Value" ref={this.valueRef}  style={{display: this.visible ? 'none' : 'inline-block'}} />
						<button style={{display: this.visible ? 'inline-block' : 'none'}} type="submit">Add</button>
					</form>
					</li>
			)
	}
}

export default Form;