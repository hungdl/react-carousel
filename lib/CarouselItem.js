"use strict";
const React = require('react');
class CarouselItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        let props = this.props;
        props.onClick(props.index, props.itemKey);
    }
    shouldComponentUpdate(props) {
        return props.index !== this.props.index ||
            props.isSelected !== this.props.isSelected ||
            props.label !== this.props.label ||
            props.width !== this.props.width ||
            props.itemKey !== this.props.itemKey;
    }
    render() {
        let props = this.props;
        return (React.createElement("div", {className: "rc-item", "data-selected": props.isSelected, onClick: this.onClick, style: { width: props.width + 'px' }}, props.label));
    }
}
exports.CarouselItem = CarouselItem;
//# sourceMappingURL=CarouselItem.js.map