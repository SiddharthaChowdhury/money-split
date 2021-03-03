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

    public getPercentage = (val: number, total: number): number => {
        return ((val * 100) / total) || 0;
    }

    public getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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