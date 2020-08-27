import React, { Component } from 'react';
import './carticon.css';

class CartIcon extends Component {

    render() {
        var Icon = '';
        if (this.props.icon === "home") {
            Icon = () => { return (<svg viewBox="0 0 32 32"><path style={{ textIndent: 0, textAlign: 'start', lineHeight: 'normal', textTransform: 'none', blockProgression: 'tb' }} d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 27 L 5 28 L 6 28 L 13 28 L 14 28 L 14 27 L 14 18 L 18 18 L 18 27 L 18 28 L 19 28 L 26 28 L 27 28 L 27 27 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 L 16 2.59375 z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 17 L 20 16 L 19 16 L 13 16 L 12 16 L 12 17 L 12 26 L 7 26 L 7 14.4375 L 16 5.4375 z" color="#000" overflow="visible" font-family="Bitstream Vera Sans" /></svg>); };
        }
        if (this.props.icon === "cart") {
            Icon = () => {
                return (<svg id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 490.666 490.666">
                    <g>
                        <g>
                            <path style={{ textIndent: 0, textAlign: 'start', lineHeight: 'normal', textTransform: 'none', blockProgression: 'tb' }} d="M394.667,373.333c-29.397,0-53.333,23.936-53.333,53.333S365.269,480,394.667,480S448,456.064,448,426.666
                   S424.064,373.333,394.667,373.333z M394.667,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32
                   c17.643,0,32,14.357,32,32C426.667,444.309,412.309,458.666,394.667,458.666z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path style={{ textIndent: 0, textAlign: 'start', lineHeight: 'normal', textTransform: 'none', blockProgression: 'tb' }} d="M181.333,373.333c-29.397,0-53.333,23.936-53.333,53.333S151.936,480,181.333,480s53.333-23.936,53.333-53.333
                   S210.731,373.333,181.333,373.333z M181.333,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32
                   C213.333,444.309,198.976,458.666,181.333,458.666z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path style={{ textIndent: 0, textAlign: 'start', lineHeight: 'normal', textTransform: 'none', blockProgression: 'tb' }} d="M437.333,330.666H191.125c-25.323,0-47.317-18.027-52.288-42.88L85.12,19.242c-1.003-4.992-5.376-8.576-10.453-8.576h-64
                   C4.779,10.666,0,15.445,0,21.333S4.779,32,10.667,32H65.92l51.989,259.989c6.955,34.773,37.76,60.011,73.216,60.011h246.208
                   c5.888,0,10.667-4.779,10.667-10.667C448,335.445,443.221,330.666,437.333,330.666z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path style={{ textIndent: 0, textAlign: 'start', lineHeight: 'normal', textTransform: 'none', blockProgression: 'tb' }} d="M488,78.272c-2.027-2.283-4.928-3.605-8-3.605H96c-5.888,0-10.667,4.779-10.667,10.667S90.112,96,96,96h371.925
                   l-15.168,121.301c-2.005,15.979-15.659,28.032-31.765,28.032H128c-5.888,0-10.667,4.779-10.667,10.667
                   c0,5.888,4.779,10.667,10.667,10.667h292.992c26.837,0,49.6-20.075,52.928-46.72l16.661-133.291
                   C490.965,83.626,490.027,80.554,488,78.272z"/>
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>);
            };
        }
        return (
            <span className="cart-icon">
                <Icon />
            </span>
        );
    }
}

export default CartIcon;