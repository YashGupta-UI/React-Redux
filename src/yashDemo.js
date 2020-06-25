import React from 'react';

export const YashDemo = ({ name, age, count }) => {
	return <h1>{count}</h1>;
};

// export class YashDemo extends Component {
// 	render() {
// 		console.log('class Props', this.props);
// 		return <h1>{this.props.count}</h1>;
// 		//return <h1>{this.props.children}</h1>;
// 	}
// }
