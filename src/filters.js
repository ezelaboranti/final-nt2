import Vue from 'vue'

Vue.filter('reemplazo', function (value) {
    let minus = value.toLowerCase()
    let filtrada = ''
    for (let index = 0; index < minus.length; index++) {
        let letra = minus.charAt(index)
        switch (letra) {
            case 'a': filtrada += 'u'
                break;
            case 'e': filtrada += 'o'
                break;
            case 'o': filtrada += 'e'
                break;
            case 'u': filtrada += 'a'
                break;
            default: filtrada += letra
                break;
        }
    }
    return filtrada.toUpperCase()
})