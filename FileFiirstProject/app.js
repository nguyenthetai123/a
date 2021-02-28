new Vue({
    el:"#app",
    data:{
        playerHealth:100,
        montersHealth:100,
        gameisRuning:false,
        turn:[]
    },
    methods:{
        startnewgame:function(){
            this.gameisRuning=true;
            this.montersHealth=100;
            this.playerHealth=100;
        },
        attack:function(){
            //monters
            if(this.checkPlayer()){
                return;
            }
            damge= this.inputDamge(10,4);
            this.montersHealth-=damge;
           this.turn.unshift({
               isPlayer:true,
               textlog:'player hit monters for '+damge
           });
            //player
            this.montersattack();
        } ,
         
        SPECIALATTACK:function(){
            //monters
            if(this.checkPlayer()){
                return;
            }
            damge=this.inputDamge(20,10);
            this.playerHealth-=damge;
            this.turn.unshift({
                isPlayer:false,
                textlog:'monster hit player for'+damge
            });
            //player
           this.montersattack();
        },
        montersattack:function(){
            damge=this.inputDamge(9,4);
            this.playerHealth-=damge;
            this.turn.unshift({
                isPlayer:false,
                textlog:'monster hit player for'+damge
            });
            this.checkPlayer();
        },
        HEAL:function(){
            //player
            if(this.playerHealth>70){
                return false;
            }else if(this.playerHealth<=60){
                this.playerHealth+=10;
            }else{
                this.playerHealth=70;
            }
            //monter
            this.montersattack();
         },
        giveup:function(){
            this.gameisRuning=false;
            alert('ban thua');
        },
        inputDamge:function(maxDamge,minDamge){
            return damge=Math.max(Math.floor(Math.random()*maxDamge)+1,minDamge);
        },
        checkPlayer:function(){
            if(this.montersHealth<=0){
                if(confirm('ban thang,choi tiep chu')){
                    //this.gameisRuning=true;
                    this.startnewgame();
                }else{
                    this.gameisRuning=false;
                }
                return true;
            }else if(this.playerHealth<=0){
                if(confirm('ban thua,choi tiep chu')){
                    //this.gameisRuning=true;
                    this.startnewgame();
                }else{
                    this.gameisRuning=false;
                }
                return true;
            }
            return false;
        }
    },
    watch:{

    },
    computed:{

    }
});