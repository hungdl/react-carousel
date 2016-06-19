import * as React from 'react'; 
import * as ReactDOM from 'react-dom'; 
import {ReactCarousel} from './ReactCarousel'; 

ReactDOM.render(<ReactCarousel items={[]} 
    width={200}
    prevButton={(<span>Prev</span>)}
    nextButton={(<span>Next</span>)}
    onItemClick={()=>{}}
    selIndex={0}
    minItemWidth={60} />,document.getElementById('SiteContainer'));