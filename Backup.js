const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
        this.roundCount=0;
    }
    
    makeAMove(sInput)
    {
        let sReply = "Hello! Thanks for contacting math aptitude test center, \
        we will help you to improve your math knowledge, or maybe you will find youself\
        dont want to work with math anymore in the future. We have three levels for the game\
        : Easy, Medium, Hard. Please enter your preferred level and start playing ";
        switch(this.stateCur){
            case GameState.WELCOMING:
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("wait")){
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                }else{
                    sReply ="On the door is a large knocker. Do you knock or run back to your car to wait?";
                    this.stateCur = GameState.MANSION;
                }
                this.stateCur = GameState.FLAT;
                break;
        }
        return([sReply]);
    }
}