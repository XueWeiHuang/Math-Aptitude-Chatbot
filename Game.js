const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    EASY:  Symbol("easy"),
    MEDIUM: Symbol("medium"),
    HARD: Symbol("hard"),
    EXPERT: Symbol("expert")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
        this.roundCount=0;
        this.correctAnswer=0;
        this.rAnswer=0;
        this.wAnswer=0;
        this.questionNumb=0;
    }      
    makeAMove(sInput)
    {
        let sReply = "Hello! I am your math tutor today. Chatting with me will help you improve your math aptitude, or \
        soon you will find out you dont want to do math anymore in the future. We have four levels for this game:\n \
        EASY, MEDIUM, HARD, EXPERT. \n Please enter one of these keywords to start playing! If you want to quit the game \
        anytime, you can type \"EXIT\" or \"QUIT \".";
        if (sInput.toLowerCase().match("easy"))
        {
            this.stateCur=GameState.EASY;            
        }
        else if (sInput.toLowerCase().match("medium"))
        {
            this.stateCur=GameState.MEDIUM;
        }
        else if (sInput.toLowerCase().match("hard"))
        {
            this.stateCur=GameState.HARD;
        }
        else if (sInput.toLowerCase()=="expert")
        {
            this.stateCur=GameState.EXPERT;
        }
        else if (sInput.toLowerCase()=="exit" || sInput.toLowerCase()=="quit")
        {
            this.stateCur=GameState.WELCOMING;
            this.roundCount=0;
            this.correctAnswer=0;
            this.rAnswer=0;
            this.wAnswer=0;
            this.questionNumb=0;
        }
        while (this.stateCur==GameState.EASY)
        {               
            while (this.roundCount<10)
            {
                let firstNumb=0, secondNumb=0, thirdNumb=0, fourthNumb=0, fifthNumb=0,
                sixNumb=0;  
                let sReply="";
                if (this.roundCount==0)
                {
                    sReply+="You are in the EASY mode! \n";
                }                              
                if (sInput==this.correctAnswer && this.roundCount!=0)
                {
                    sReply+="You are correct. \n";
                    this.rAnswer++;    
                }
                else if (sInput!=this.correctAnswer && this.roundCount!=0)
                {
                    if (isNaN(sInput))
                    {
                        return (["Please enter valid number"]);
                    }
                    this.wAnswer++;
                    sReply+=`You are wrong! \n Correct answer is ${this.correctAnswer} \n`;
                };       
                let qSelector=Math.floor(Math.random() * 5) + 1 ;
                if (qSelector==1)
                {
                    let parameter=Math.ceil(Math.random()*100);
                    firstNumb=Math.ceil(Math.random()*100);
                    secondNumb=firstNumb+parameter;
                    thirdNumb=firstNumb+2*parameter;
                    fourthNumb=firstNumb+3*parameter;
                    fifthNumb=firstNumb+4*parameter;
                    sixNumb=firstNumb+5*parameter;                    
                } 
                else if (qSelector==2)
                {
                    let parameter=Math.ceil(Math.random()*10);
                    firstNumb=Math.ceil(Math.random()*100);
                    secondNumb=firstNumb+(parameter**0);
                    thirdNumb=firstNumb+(parameter**1);
                    fourthNumb=firstNumb+(parameter**2);
                    fifthNumb=firstNumb+(parameter**3);
                    sixNumb=fifthNumb+(parameter**4);                    
                }  
                else if (qSelector==3)  
                {
                    let parameter=Math.ceil(Math.random()*100);
                    let secParameter=Math.ceil(Math.random()*100);
                    firstNumb=Math.ceil(Math.random()*100);
                    secondNumb=firstNumb+parameter;
                    thirdNumb=firstNumb+secParameter+parameter;
                    fourthNumb=firstNumb+2*parameter+secParameter;
                    fifthNumb=firstNumb+2*parameter+2*secParameter;
                    sixNumb=firstNumb+ 3*parameter+2*secParameter;                    
                }   
                else if (qSelector==4)      
                {
                    let parameter=Math.ceil(Math.random()*100);
                    let secParameter=Math.ceil(Math.random()*100);
                    firstNumb=Math.ceil(Math.random()*100);
                    secondNumb=firstNumb+parameter;
                    thirdNumb=firstNumb+secParameter+parameter;
                    fourthNumb=firstNumb+parameter+2*secParameter;
                    fifthNumb=firstNumb+parameter+3*secParameter;
                    sixNumb=firstNumb+ parameter+4*secParameter;                    
                }
                else if (qSelector==5)
                {
                    let parameter=Math.ceil(Math.random()*10);                    
                    firstNumb=Math.ceil(Math.random()*10);
                    secondNumb=firstNumb*parameter;
                    thirdNumb=firstNumb*parameter*(parameter+1);
                    fourthNumb=firstNumb*parameter*(parameter+1)*(parameter+2);
                    fifthNumb=firstNumb*parameter*(parameter+1)*(parameter+2)*(parameter+3);
                    sixNumb=firstNumb*parameter*(parameter+1)*(parameter+2)*(parameter+3)*(parameter+4);                    
                }
                this.correctAnswer=sixNumb;
                sReply+=`Question No.${this.questionNumb+1}: \n ${firstNumb} ${secondNumb} ${thirdNumb} ${fourthNumb} ${fifthNumb} ? \
                \n What is the Sixth number?`;
                this.roundCount++;
                this.questionNumb++;
                return ([sReply]);        
            }
            
            if (this.roundCount==10)
            {
                if (sInput==this.correctAnswer && this.roundCount!=0)
                {
                    sReply=`You're right. \nCorrect answer is ${this.correctAnswer}\n`;   
                }
                else if (sInput!=this.correctAnswer && this.correctAnswer!=0)
                {
                    if (isNaN(sInput))
                    {
                        return (["Please enter valid number!"]);
                    }                    
                    sReply=`You are wrong! \n Correct answer is ${this.correctAnswer}\n`;
                };
                sReply+="You've completed "+ this.stateCur.toString().substr(7, (this.stateCur.toString().length-8) ).toUpperCase() + " level! \n";

                if (this.rAnswer>=6)
                {
                    sReply+=`You got ${this.rAnswer} of 10 correct! You've PASSED this challenge level.`;
                }
                else
                {
                    sReply+=`You got ${this.rAnswer} of 10 correct! You've FAILED this challenge level.`;
                }
                this.stateCur=GameState.WELCOMING;                
                sReply+="\n You can type one of keywords to retry current level or advance to next level.";
                this.rAnswer=0;
                this.wAnswer=0;
                this.roundCount=0;
                this.questionNumb=0;
                return ([sReply]);
            }
        };
        while (this.stateCur==GameState.MEDIUM)
        {               
            while (this.roundCount<10)
            {
                let firstNumb=0, secondNumb=0, thirdNumb=0, fourthNumb=0, fifthNumb=0,
                sixNumb=0;  
                let sReply="";
                if (this.roundCount==0)
                {
                    sReply+="You are in the MEDIUM mode! \n";
                }                              
                if (sInput==this.correctAnswer && this.roundCount!=0)
                {
                    sReply+=`You're right. \nCorrect answer is ${this.correctAnswer}. \n`;
                    this.rAnswer++;    
                }
                else if (sInput!=this.correctAnswer &&this.roundCount!=0)
                {
                    if (isNaN(sInput))
                    {
                        return (["Please enter valid number"]);
                    }
                    this.wAnswer++;
                    sReply+=`You are wrong! \n Correct answer is ${this.correctAnswer}.\n`;
                };       
                let qSelector=Math.floor(Math.random() * 5) + 1 ;
                if (qSelector==1)
                {
                    firstNumb=Math.ceil(Math.random()*10);
                    secondNumb=(firstNumb+1)**2;
                    thirdNumb=(firstNumb+2)**2;
                    fourthNumb=(firstNumb+3)**2;
                    fifthNumb=(firstNumb+4)**2;
                    sixNumb=(firstNumb+5)**2;
                } 
                else if (qSelector==2)
                {
                    let parameter=Math.ceil(Math.random()*10);
                    firstNumb=Math.ceil(Math.random()*10);
                    secondNumb=firstNumb*parameter;
                    thirdNumb=firstNumb*parameter+parameter*2;
                    fourthNumb=(firstNumb*parameter+parameter*2)*parameter;
                    fifthNumb=(firstNumb*parameter+parameter*2)*parameter+parameter*2;
                    sixNumb=((firstNumb*parameter+parameter*2)*parameter+parameter*2)*parameter;
                }  
                else if (qSelector==3)  
                {
                    let parameter=Math.ceil(Math.random()*30);
                    let secParameter=Math.ceil(Math.random()*10);
                    firstNumb=Math.ceil(Math.random()*100);
                    secondNumb=firstNumb+parameter;
                    thirdNumb=firstNumb+parameter-secParameter;
                    fourthNumb=firstNumb+parameter-2*secParameter;
                    fifthNumb=firstNumb+parameter-3*secParameter;
                    sixNumb=firstNumb+parameter-4*secParameter;
                }   
                else if (qSelector==4)      
                {
                    let parameter=Math.ceil(Math.random()*10);
                    let secParameter=Math.ceil(Math.random()*5);
                    firstNumb=Math.ceil(Math.random()*100);
                    secondNumb=firstNumb*parameter;
                    thirdNumb=firstNumb*secParameter;
                    fourthNumb=firstNumb*secParameter*parameter;
                    fifthNumb=firstNumb*(secParameter**2);
                    sixNumb=firstNumb*(secParameter**2)*parameter;
                }
                else if (qSelector==5)
                {
                    let parameter=Math.ceil(Math.random()*10);                    
                    firstNumb=(parameter*0)**2;
                    secondNumb=(parameter*1)**2;
                    thirdNumb=(parameter*2)**2;;
                    fourthNumb=(parameter*3)**2;
                    fifthNumb=(parameter*4)**2;
                    sixNumb=(parameter*5)**2;
                }
                this.correctAnswer=sixNumb;
                sReply+=`Question No.${this.questionNumb+1}: \n ${firstNumb} ${secondNumb} ${thirdNumb} ${fourthNumb} ${fifthNumb} ? \
                \n What is the Sixth number?`;
                this.roundCount++;
                this.questionNumb++;
                return ([sReply]);        
            }
            
            if (this.roundCount==10)
            {
                if (sInput==this.correctAnswer && this.roundCount!=0)
                {
                    sReply=`You're right. \nCorrect answer is ${this.correctAnswer}.\n`;     
                }
                else if (sInput!=this.correctAnswer && this.correctAnswer!=0)
                {
                    if (isNaN(sInput))
                    {
                        return (["Please enter valid number!"]);
                    }                    
                    sReply=`You are wrong! \n Correct answer is ${this.correctAnswer}.\n`;
                };
                sReply+="You've completed "+ this.stateCur.toString().substr(7, (this.stateCur.toString().length-8) ).toUpperCase() + " \nlevel! \n";
                if (this.rAnswer>=6)
                {
                    sReply+=`You got ${this.rAnswer} of 10 correct! You've PASSED this challenge level.`;
                }
                else
                {
                    sReply+=`You got ${this.rAnswer} of 10 correct! You've FAILED this challenge level.`;
                }
                this.stateCur=GameState.WELCOMING;                
                sReply+="\n You can type one of keywords to retry current level or advance to next level.";
                this.rAnswer=0;
                this.wAnswer=0;
                this.roundCount=0;
                this.questionNumb=0;
                return ([sReply]);
            }
        };

        while (this.stateCur==GameState.HARD)
        {               
            while (this.roundCount<10)
            {
                let firstNumb=0, secondNumb=0, thirdNumb=0, fourthNumb=0, fifthNumb=0,
                sixNumb=0;  
                let sReply="";
                if (this.roundCount==0)
                {
                    sReply+="You are in the HARD mode! \n";
                }                              
                if (sInput==this.correctAnswer && this.roundCount!=0)
                {
                    sReply+="You're right. \nCorrect answer is ${this.correctAnswer}. \n";
                    this.rAnswer++;    
                }
                else if (sInput!=this.correctAnswer && this.roundCount!=0)
                {
                    if (isNaN(sInput))
                    {
                        return (["Please enter valid number"]);
                    }
                    this.wAnswer++;
                    sReply+=`You are wrong! \n Correct answer is ${this.correctAnswer}.\n`;
                };       
                let qSelector=Math.floor(Math.random() * 5) + 1 ;
                if (qSelector==1)
                {
                    let parameter=Math.ceil(Math.random()*5);
                    let secParameter=Math.ceil(Math.random()*5);
                    firstNumb=Math.ceil(Math.random()*10);
                    secondNumb=firstNumb*parameter-secParameter**0
                    thirdNumb=secondNumb*parameter-secParameter**1;
                    fourthNumb=thirdNumb*parameter-secParameter**2;
                    fifthNumb=fourthNumb*parameter-secParameter**3;
                    sixNumb=fifthNumb*parameter-secParameter**4;
                } 
                else if (qSelector==2)
                {
                    let parameter=Math.ceil(Math.random()*10);
                    firstNumb=Math.ceil(Math.random()*100);
                    secondNumb=firstNumb+parameter;
                    thirdNumb=firstNumb-2*parameter;
                    fourthNumb=thirdNumb+3*parameter;
                    fifthNumb=fourthNumb-4*parameter;
                    sixNumb=fifthNumb+5*parameter;
                }  
                else if (qSelector==3)  
                {                    
                    firstNumb=(Math.ceil(Math.random()*5))**3;
                    secondNumb=(firstNumb+1)**3;
                    thirdNumb=(firstNumb+2)**3;
                    fourthNumb=(firstNumb+3)**3;
                    fifthNumb=(firstNumb+4)**3;
                    sixNumb=(firstNumb+5)**3;
                }   
                else if (qSelector==4)      
                {
                    let parameter=Math.ceil(Math.random()*10);
                    firstNumb=0;
                    secondNumb=parameter**2+1;
                    thirdNumb=(parameter*2)**2+1;
                    fourthNumb=(parameter*3)**2+1;
                    fifthNumb=(parameter*4)**2+1;
                    sixNumb=(parameter*5)**2+1;
                }
                else if (qSelector==5)
                {
                    let parameter=Math.ceil(Math.random()*10);
                    let secParameter=Math.ceil(Math.random()*10);                    
                    firstNumb=Math.ceil(Math.random()*10)+parameter;
                    secondNumb=firstNumb-secParameter*parameter;
                    thirdNumb=secondNumb+(secParameter**2)*parameter;
                    fourthNumb=thirdNumb-(secParameter**3)*parameter;
                    fifthNumb=fourthNumb+(secParameter**4)*parameter;
                    sixNumb=fifthNumb-(secParameter**5)*parameter;                    
                }
                this.correctAnswer=sixNumb;
                sReply+=`Question No.${this.questionNumb+1}: \n ${firstNumb} ${secondNumb} ${thirdNumb} ${fourthNumb} ${fifthNumb} ?\
                 \n What is the Sixth number?`;
                this.roundCount++;
                this.questionNumb++;
                return ([sReply]);        
            }
            
            if (this.roundCount==10)
            {
                if (sInput==this.correctAnswer && this.roundCount!=0)
                {
                    sReply=`You're right. \nCorrect answer is ${this.correctAnswer}.\n`;  
                }
                else if (sInput!=this.correctAnswer && this.correctAnswer!=0)
                {
                    if (isNaN(sInput))
                    {
                        return (["Please enter valid number!"]);
                    }                    
                    sReply=`You are wrong! \n Correct answer is ${this.correctAnswer}.\n`;
                };
                sReply+="You've completed "+ this.stateCur.toString().substr(7, (this.stateCur.toString().length-8) ).toUpperCase() + " level! \n";
                if (this.rAnswer>=6)
                {
                    sReply+=`You got ${this.rAnswer} of 10 correct! You've PASSED this challenge level.`;
                }
                else
                {
                    sReply+=`You got ${this.rAnswer} of 10 correct! You've FAILED this challenge level.`;
                }
                this.stateCur=GameState.WELCOMING;                
                sReply+="\n You can type one of keywords to retry current level or advance to next level.";
                this.rAnswer=0;
                this.wAnswer=0;
                this.roundCount=0;
                this.questionNumb=0;
                return ([sReply]);
            }
        };
        while (this.stateCur==GameState.EXPERT)
        {                
            while (this.roundCount<1)
            {                 
                let sReply="";
                if (this.roundCount==0)
                {
                    sReply+="You are in the EXPERT mode! \n";
                }                                             
                sReply+="Scenario: there was a scientist group conducting an experiment to check gene expression in pigs. It was observed that there  \
                were 260 crossed pigs F2 from F1 WHITE and F1 BLACK pigs. Out of these pigs, there were 181 F2 WHITE pigs, and 79 F2 BLACK pigs. \
                Question: Whether the observed color partition fits 3:1 ratio? Tips: Please provide Chi-square value!";
                this.roundCount++;
                this.correctAnswer=4.020;                 
                return ([sReply]);        
            }            
            if (this.roundCount<5)
            {
                if (sInput==this.correctAnswer && this.roundCount!=0)
                {
                    sReply=`You're right. \nCorrect answer is ${this.correctAnswer}.\n`; 
                    sReply+="You have completed all levels, congratulations! You can quit or type in any level keywords to redo challenges!";
                    this.roundCount=0;
                    this.stateCur=GameState.WELCOMING;
                }
                else if (sInput!=this.correctAnswer && this.roundCount!=0)
                {
                    if (isNaN(sInput))
                    {
                        return (["Please enter valid number!"]);
                    }
                    
                    sReply=`You are wrong! \n You can try ${5-this.roundCount} times more\n`;
                    this.roundCount++;
                };                
                return ([sReply]);
            }
            if (this.roundCount==5)
            {
                this.stateCur=GameState.WELCOMING;
                this.roundCount=0;
                return ([`Game Over! The correct answer is ${this.correctAnswer}.\n Type any level keywords to restart game`]);
            }            
        };
        return ([sReply]);
    }
}
        