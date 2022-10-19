import React from 'react'
import plans from '../../data/plans'
import "./Plans.css"
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>PRONTO PARA COMEÇAR </span>
        <span>SUA JORNADA </span>
        <span className='stroke-text'>AGORA COM NÓS</span>
      </div>
      {/* card dos planos */}
      <div className='plans' id='plans'>
        {plans.map((plan, index)=>(
          <div className='plan' key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> R${plan.price}</span>

            <div className='features'>
              {plan.features.map((feature, index)=>(
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>veja mais benefícios -</span>
            </div>
            <button className="btn">Entrar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans