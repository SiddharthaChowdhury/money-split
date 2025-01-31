import * as React from "react"
import {SvgXml} from "react-native-svg"

interface ISvgProps {
	width?: number;
	height?: number;
	color?: string;
}

function HomeSvg({color, width, height}: ISvgProps) {
    const svgMarkup = `<?xml version="1.0" encoding="iso-8859-1"?>
	<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
	<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 463.937 463.937" style="enable-background:new 0 0 463.937 463.937;" xml:space="preserve">
	<g>
		<g>
			<path d="M460.414,216.518l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8c-5.5,0-10,4.9-10,10.5v39.6
				l-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189c-4.3,3.5-4.8,9.8-1.3,14.1s9.8,4.8,14.1,1.3c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4
				l77.1,65.7l46.1,39.2l92.3,78.6c4.2,3.6,10.5,3.1,14.1-1.1C465.114,226.418,464.614,220.118,460.414,216.518z M355.014,126.518
				l-28-23.6v-47.1h28V126.518z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M416.314,236.718l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9l-28.1,24c-4.2,3.6-4.7,9.9-1.1,14.1
				c3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h297.3c5.6-0.1,10.2-4.6,10.3-10.3v-187.5
				l12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5C421.114,246.518,420.514,240.218,416.314,236.718z M272.014,418.818h-80
				v-108h80V418.818z M292.014,418.818v-117.7c0-5.5-4.1-10.3-9.6-10.3h-100.8c-5.5,0-9.6,4.8-9.6,10.3v117.7h-79v-194.8l139-118.4
				l139,118.4v194.8H292.014z"/>
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
	</svg>
	`;
	const SvgImg = () => <SvgXml xml={svgMarkup} width={width || 30} height={height || 30} fill={color || '#000'}/>

	return <SvgImg/>
}

export default HomeSvg
