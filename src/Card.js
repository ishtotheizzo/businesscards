import './style.css'; 

export default function Card(){

    return(
        <div class="businesscard">
            <div class="header">
                <div id="logo"><center><img src="./logo.png"/></center></div>
            </div>
            <div class="inputImage">place holder</div>
            <div class="about">
                <span id="name">PLACEHOLDER FOR NAME INPUT</span><br/> 
                <span id="title">PLACEHOLDER FOR TITLE INPIUT</span><br/>
                <span id="qrcode"><img src="./qrcode.png"/></span>
            </div>
        </div>
              
    )
}