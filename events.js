var EventEmitter=require('events').EventEmitter;
var life=new EventEmitter();
function shopping(who) {
  console.log('给'+who+'买东西');
}
life.on('求安慰',function (who) {
  console.log('给'+who+'倒水');
});
life.on('求安慰',function (who) {
  console.log('给'+who+'揉肩');
});
life.on('求安慰',shopping);

life.removeListener('求安慰',shopping)
life.emit('求安慰','颖颖');