const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CW = 400;
const CH = 300;

canvas.width  = CW;
canvas.height = CH;

const mainloopdelay = 1
let interval;

canvas.onclick = () => {
  interval = setInterval(mainloop,mainloopdelay)
  canvas.onclick = null;
}

const game = {
  setting:{
    sprite:{
      player:{
        w:10,
        h:20
      }
    },
    blocks:{
      normal:{
        w:30,
        h:30
      }
    }
  },
  param:{},
  sprite:[],
  blocks:[],
  reset_sprite:function(){this.sprite=[]},
  reset_blocks:function(){this.blocks=[]},
  add_sprite:function(name,x,y,p){
    this.sprite.push({
      name:name,
      x:x,
      y:y,
      p:p
    })
  },
  add_blocks:function(name,x,y,p){
    this.blocks.push({
      name:name,
      x:x,
      y:y,
      p:p
    })
  },
}

game.add_sprite('player',0,0,'');
game.add_blocks('normal',100,100,'');

function mainloop()
{
  ctx.clearRect(0,0,CW,CH);
  for(let i of game.sprite){
    ctx.fillStlye='#00ff00';
    ctx.fillRect(i.x,i.y,10,10)
  }
}
