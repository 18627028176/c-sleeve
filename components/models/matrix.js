/**
 * @name: matrix
 * @author: zhuhao
 * @data 2021/1/16 17:53
 * @description: 矩阵
 */

class Matrix{
    m
    constructor(martix) {
        this.m = martix
    }

    //获取矩阵的行数
    get rowsNum(){
        return this.m.length
    }

    //获取矩阵的列数
    get colsNum(){
        return this.m[0].length
    }

    /**
     * 这里调用forEach可以拿到任意位置的元素，和常规的遍历有区别
     * @param cb回调函数
     */
    each(cb){
        for (let j=0;j<this.colsNum;j++){
            for (let i=0;i<this.rowsNum;i++){
                const element = this.m[i][j]
                cb(element,i,j)
            }
        }
    }

    //实现矩阵的转置
    transpose(){
        const desArr = []
        for (let j=0;j<this.colsNum;j++){
            //创建一个二维数组
            desArr[j] = []
            for (let i=0;i<this.rowsNum;i++){
                desArr[j][i] = this.m[i][j]
            }
        }
        return desArr
    }
}

export {
    Matrix
}