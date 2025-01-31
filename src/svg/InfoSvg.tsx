import * as React from "react"
import {SvgXml} from "react-native-svg"

interface ISvgProps {
	width?: number;
	height?: number;
	color?: string;
}

function InfoSvg({color, width, height}: ISvgProps) {
    const svgMarkup = `<svg id="Capa_1" enable-background="new 0 0 524.235 524.235" height="512" viewBox="0 0 524.235 524.235" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m262.118 0c-144.53 0-262.118 117.588-262.118 262.118s117.588 262.118 262.118 262.118 262.118-117.588 262.118-262.118-117.589-262.118-262.118-262.118zm17.05 417.639c-12.453 2.076-37.232 7.261-49.815 8.303-10.651.882-20.702-5.215-26.829-13.967-6.143-8.751-7.615-19.95-3.968-29.997l49.547-136.242h-51.515c-.044-28.389 21.25-49.263 48.485-57.274 12.997-3.824 37.212-9.057 49.809-8.255 7.547.48 20.702 5.215 26.829 13.967 6.143 8.751 7.615 19.95 3.968 29.997l-49.547 136.242h51.499c.01 28.356-20.49 52.564-48.463 57.226zm15.714-253.815c-18.096 0-32.765-14.671-32.765-32.765 0-18.096 14.669-32.765 32.765-32.765s32.765 14.669 32.765 32.765c0 18.095-14.668 32.765-32.765 32.765z"/></svg>`;
	const SvgImg = () => <SvgXml xml={svgMarkup} width={width || 30} height={height || 30} fill={color || '#000'}/>

	return <SvgImg/>
}

export default InfoSvg
