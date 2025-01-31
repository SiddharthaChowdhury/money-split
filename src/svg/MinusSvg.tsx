import * as React from "react"
import {SvgXml} from "react-native-svg"

interface ISvgProps {
	width?: number;
	height?: number;
	color?: string;
}

function MinusSvg({color, width, height}: ISvgProps) {
    const svgMarkup = `<svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.378906 0-132.667969-26.628906-181.019531-74.980469-48.351563-48.351562-74.980469-112.640625-74.980469-181.019531s26.628906-132.667969 74.980469-181.019531c48.351562-48.351563 112.640625-74.980469 181.019531-74.980469s132.667969 26.628906 181.019531 74.980469c48.351563 48.351562 74.980469 112.640625 74.980469 181.019531s-26.628906 132.667969-74.980469 181.019531c-48.351562 48.351563-112.640625 74.980469-181.019531 74.980469zm0-472c-119.101562 0-216 96.898438-216 216s96.898438 216 216 216 216-96.898438 216-216-96.898438-216-216-216zm110 195.980469h-220v40h220zm0 0"/></svg>`;
	const SvgImg = () => <SvgXml xml={svgMarkup} width={width || 30} height={height || 30} fill={color || '#000'}/>

	return <SvgImg/>
}

export default MinusSvg
