import React from 'react'

const HelpPage = () => {

    const back =()=>{
        window.open('/');
    }
  return (
    <div className='welcome'>
        <h1>Agreement</h1>
    
   <p> By accessing this Website, accessible from monkeytype.com, you are agreeing to be bound by these Website Terms of Service and agree that you are responsible for the agreement in accordance with any applicable local laws. IF YOU DO NOT AGREE TO ALL THE TERMS AND CONDITIONS OF THIS AGREEMENT, YOU ARE NOT PERMITTED TO ACCESS OR USE OUR SERVICES.</p>
  
  
<h1>Privacy Policy</h1>  
<p>If you use our Services, you must abide by our Privacy Policy. You acknowledge that you have read our Privacy Policyand understand that it sets forth how we collect, use, and store your information. If you do not agree with our Privacy Statement, then you must stop using the Services immediately. Any person, entity, or service collecting data from the Services must comply with our Privacy Statement. Misuse of any User's Personal Information is prohibited. If you collect any Personal Information from a User, you agree that you will only use the Personal Information you gather for the purpose for which the User has authorized it. You agree that you will reasonably secure any Personal Information you have gathered from the Services, and you will respond promptly to complaints, removal requests, and 'do not contact' requests from us or Users.</p>


<button onClick={back}>back</button>
</div>
  )
}

export default HelpPage