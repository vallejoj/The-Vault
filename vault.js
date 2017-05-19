
module.exports = function() {
var treasure={}
function setValue(key, value){
  treasure.key=key
  treasure.value=value
}

function getValue (key) {
  if (treasure.key) {
    return treasure.value
  }else {
    return null
  }

}
return{setValue:setValue,
getValue:getValue}

}
