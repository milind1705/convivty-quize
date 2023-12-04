import success from "../assets/success.mp3";
import wrong from "../assets/wrong.mp3" 
const playSound = (mute, answer) =>{

    console.log("answer", answer, mute)
if(!mute){
if(answer){
    new Audio(success).play();
}else{
    new Audio(wrong).play();
}
}
};
export default playSound;