import React from 'react'

const Poetry = ({ poet, deleteCard }) => {
    return (
        <div>

            {
                poet.map((item) => (
                    <div className="contaniner">
                        <div className="card">
                            <div className="image">
                                <img src={item.sawirUrl} alt="" />
                            </div>
                            <div className="info">
                                <h4>{item.cinwankaGabayga}</h4>
                                <p>{item.tuducyoGabayga}</p>
                                <div className="icon">
                                    <i class="fa-solid fa-user"></i>
                                    <span>{item.gabyaaga}</span>
                                </div>
                            </div>
                            <div className="erase">
                                <button className='del' onClick={() => {
                                    deleteCard(item.id);
                                }}>Delete</button>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Poetry
