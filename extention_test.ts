/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

/** 
 * これはHoge（ホゲ）という何にも役に立たないクラスです
 */
//% color=190 weight=100 icon="\f5d0" block="Basic Blocks"
namespace Hoge {
    //% blockId=hoge
    //% block="hoge %huga"
    export function hoge(huga: number): void {
        basic.showNumber(huga)
    }
}
