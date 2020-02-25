
/**
 * Boi CHUNG LON NHAT
 * @param {*} a 
 * @param {*} b 
 */
function g_c_d(a, b) {
    if (a == 0) {
        return b;
    }
    return g_c_d(b, a % b);
}
g_c_d(2,3);