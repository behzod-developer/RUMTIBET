import React from 'react'
import './Booked.css'

function Booked() {
    return (
        <div className='booked'>
            <form action="">

                <label htmlFor="">
                    <select name="" id="">
                        <option value="">Локация для тура</option>
                    </select>
                    <h5>выберите из списка</h5>
                </label>

                <label htmlFor="">
                    <input type="date" placeholder='Дата похода' value={'Дата похода'} />
                    <h5>укажите диапазон</h5>
                </label>

                <label htmlFor="">
                    <select name="" id="">
                        <option value="">Участники</option>
                    </select>
                    <h5>минимум 4 человека</h5>
                </label>

                <button>Найти программу</button>

            </form>
        </div>
    )
}

export default Booked