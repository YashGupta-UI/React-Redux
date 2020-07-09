import React from 'react';
import { UserConsumer } from './Context';

class ComponentF extends React.Component {
	render() {
		return (
			<div>
				<UserConsumer>
					{lang => {
						return <div>Hello {lang} </div>;
					}}
				</UserConsumer>
			</div>
		);
	}
}

export default ComponentF;

// whats is prop drilling ? React.org (prop drilling react drilling)

/*


class ComponentF extends React.Component {
	render() {
		return (
            <div>
                {
                    () => {

                    }

                }
				<p>Component F</p>
			</div>
		);
	}
}


*/
