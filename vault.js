
module.exports = function() {
var mKey;
var mValue;
function setValue(key, value){
   mKey=key;
   mValue= value
}

function getValue (key) {
  if (mKey) {
    return mValue
  }else {
    return null
  }

}
return{setValue:setValue,
getValue:getValue}

}
