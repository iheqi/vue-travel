let defaultCity = '山洲大城市'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) { }      // 以防用户关闭了localStorage

export default  {
    city: defaultCity
}