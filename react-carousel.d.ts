/// <reference path="./typings/react/react.d.ts" />

declare module "sh-react-carousel"{
    import * as React from 'react'; 
    export interface CarouselItemDef{
        label:string;
        key:string;
    } 

    interface CarouselItemProps {
        isSelected:boolean;
        label:string;
        width:number;
        itemKey:string;
        index:number;
        onClick:Function;
    }

    interface CarouselItemState {

    }


    interface ReactCarouselProps {
        selIndex:number;
        items:CarouselItemDef[]; 
        onItemClick:Function;
        prevButton:React.ReactElement<any>;
        nextButton:React.ReactElement<any>;
        minItemWidth:number;
        buttonWidth?:number;
        gutter?:number;
        width:number;
    }

    interface ReactCarouselState {
        selIndex?:number;
        viewIndex?:number;
    }

    export class CarouselItem extends React.Component<CarouselItemProps,CarouselItemState>{
        onClick(e:React.SyntheticEvent);
    }

    export class ReactCarousel extends React.Component<ReactCarouselProps,ReactCarouselState>{
        onNext();
        onPrev();
        onItemClick(idx:number,key:string);
        _calculatePosition();
    }

}