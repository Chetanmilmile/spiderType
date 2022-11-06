import React from 'react'

const AboutPage = () => {

    const back =()=>{
        window.open('/');
    }
  return (
    <div className='welcome'>
        <h1>Constact</h1>
<p>If you have any questions about Monkeytype’s privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.</p>

<p>Email: chetanmilmile@gmail.com</p>

<p>Discord: </p>

<button onClick={back}>back</button>
        </div>


  )
}

export default AboutPage