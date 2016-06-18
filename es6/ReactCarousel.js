import * as React from 'react';
import { CarouselItem } from './CarouselItem';
export class ReactCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.state = {
            selIndex: props.selIndex,
            viewIndex: props.selIndex,
        };
    }
    onNext() {
        let idx = this.state.viewIndex;
        if (idx < this.props.items.length && this.itemsLeft > 0) {
            idx++;
            this.setState({
                viewIndex: idx
            });
        }
    }
    onPrev() {
        let idx = this.state.viewIndex;
        if (idx > 0) {
            idx--;
            this.setState({
                viewIndex: idx
            });
        }
    }
    onItemClick(idx, key) {
        this.props.onItemClick(idx, key);
    }
    componentDidUpdate() {
        if (this.itemsLeft < 0) {
            let vi = this.state.viewIndex;
            vi += this.itemsLeft;
            this.itemsLeft = 0;
            this.setState({
                viewIndex: vi
            });
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            selIndex: props.selIndex
        });
    }
    _calculatePosition() {
        let props = this.props, state = this.state, buttonWidth = this.props.buttonWidth || 42, width = props.width - buttonWidth * 2, gutter = props.gutter || 0, viewIndex = state.viewIndex, totalItems = props.items.length, availableSpaces = Math.floor(width / (props.minItemWidth + gutter)), visibleItems = availableSpaces > totalItems ? totalItems : availableSpaces, itemsLeft = totalItems - visibleItems - viewIndex, itemWidth = (width - (gutter * visibleItems)) / visibleItems, xPos = -viewIndex * (itemWidth + gutter);
        this.itemsLeft = itemsLeft;
        return {
            x: xPos,
            itemWidth: itemWidth,
        };
    }
    render() {
        let props = this.props, state = this.state, gutterWidth = props.gutter || 0, pos = this._calculatePosition(), xPos = pos.x, style = {
            width: ((pos.itemWidth + gutterWidth) * props.items.length) + 'px',
            transform: 'translate(' + [xPos + 'px', '0px'] + ')'
        }, items = this.props.items.map((e, i) => {
            return (React.createElement(CarouselItem, {label: e.label, key: e.key, onClick: this.onItemClick, index: i, width: pos.itemWidth, itemKey: e.key, isSelected: props.selIndex === i}));
        });
        return (React.createElement("div", {className: "react-carousel", style: { width: props.width + 'px' }}, React.createElement("div", {className: "rc-btn prev", onClick: this.onPrev}, props.prevButton), React.createElement("div", {className: "rc-viewport"}, React.createElement("div", {className: "rc-viewport-wrapper", style: style}, items)), React.createElement("div", {className: "rc-btn next", onClick: this.onNext}, props.nextButton)));
    }
}
//# sourceMappingURL=ReactCarousel.js.map