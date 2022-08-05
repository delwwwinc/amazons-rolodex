// CLASS COMPONENT 
// import React, {Component} from 'react';

// export default class Button extends Component {
//     render() {
//         return (<button>Super CTA</button>);
//     }
// }

// FUNCTIONAL COMPONENT (HOOK?)
function Button() {
    return (
        <button className="btn font-semibold hover:font-light hover:bg-green-800 active:bg-green-500" type="button">Super CTA</button>
    );
}
export default Button;