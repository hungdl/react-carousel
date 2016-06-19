import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactCarousel } from './ReactCarousel';
ReactDOM.render(React.createElement(ReactCarousel, {items: [], width: 200, prevButton: (React.createElement("span", null, "Prev")), nextButton: (React.createElement("span", null, "Next")), onItemClick: () => { }, selIndex: 0, minItemWidth: 60}), document.getElementById('SiteContainer'));
//# sourceMappingURL=Example.js.map