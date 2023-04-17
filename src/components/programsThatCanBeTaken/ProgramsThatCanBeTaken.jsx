import React from 'react'
import "./programsThatCanBeTaken.css"
import { P1, P2, P3, P4, P5, P6 } from '../../assets/index'

const ProgramsThatCanBeTaken = () => {
  return (
    <div className='container'>
        <div className='programs-that-can-be-taken'>
            <h1>Programs that can be taken</h1>

            <div className='programs-contents'>
                <div className='program-content'>
                    <div className='program-content-image-container'>
                        <img src={P1} alt="P1" />
                    </div>

                    <div className='program-content-text'>
                        <h4>Gets ABS in 2 weeks</h4>
                        <p>Exercise is a very important need for our body. </p>
                    </div>
                </div>

                <div className='program-content'>
                    <div className='program-content-image-container'>
                        <img src={P2} alt="P2" />
                    </div>

                    <div className='program-content-text'>
                        <h4>25 Mins full body workout</h4>
                        <p>Exercise is a very important need for our body. </p>
                    </div>
                </div>

                <div className='program-content'>
                    <div className='program-content-image-container'>
                        <img src={P3} alt="P3" />
                    </div>

                    <div className='program-content-text'>
                        <h4>10 Mins toned arms workout</h4>
                        <p>Exercise is a very important need for our body. </p>
                    </div>
                </div>

                <div className='program-content'>
                    <div className='program-content-image-container'>
                        <img src={P4} alt="P4" />
                    </div>

                    <div className='program-content-text'>
                        <h4>15 Mins full body fat burn</h4>
                        <p>Exercise is a very important need for our body. </p>
                    </div>
                </div>

                <div className='program-content'>
                    <div className='program-content-image-container'>
                        <img src={P5} alt="P5" />
                    </div>

                    <div className='program-content-text'>
                        <h4>25 Mins HIIT workout</h4>
                        <p>Exercise is a very important need for our body. </p>
                    </div>
                </div>

                <div className='program-content'>
                    <div className='program-content-image-container'>
                        <img src={P6} alt="P6" />
                    </div>

                    <div className='program-content-text'>
                        <h4>Intense lower Abs workout</h4>
                        <p>Exercise is a very important need for our body. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgramsThatCanBeTaken