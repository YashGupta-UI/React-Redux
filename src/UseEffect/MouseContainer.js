// useEffect with cleanup
// why we need componentWillUnMount

import React, { useState } from 'react';
import { HookClassMouse } from './HookClassMouse';

export function MouseContainer() {
	const [display, setDisplay] = useState(true);

	return (
		<div>
			<button
				onClick={() => {
					setDisplay(!display);
				}}
			>
				Toogle
			</button>
			{display && <HookClassMouse />}
		</div>
	);
}
