import { StatusBar, Dimensions } from 'react-native';
import { CONST_BOT_NAV_HEIGHT, CONST_TOP_NAV_HEIGHT } from '../constants/const_app';

class UtilApp {
    public getDimension = (): IUtilAppDiamension => {
        const totalHeight = Dimensions.get('window').height;
        const totalWidth = Dimensions.get('window').width;
        
        return {
            totalHeight,
            totalWidth,
            topNavHeight: CONST_TOP_NAV_HEIGHT,
            botNavHeight: CONST_BOT_NAV_HEIGHT,
            contentHeight: (totalHeight - (StatusBar.currentHeight || 20) - CONST_TOP_NAV_HEIGHT - CONST_BOT_NAV_HEIGHT)
        }
    }
}

export interface IUtilAppDiamension {
    totalHeight: number,
    totalWidth: number,
    topNavHeight: number,
    botNavHeight: number,
    contentHeight: number
}

export default new UtilApp();