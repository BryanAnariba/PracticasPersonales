import React from 'react'

export const Spinner = () => {
  return (
    <div className="alert text-center" role="alert">
        {/* <div className="lds-facebook"><div></div><div></div><div></div></div> */}
        {/* <div className="lds-circle"><div></div></div> */}
        <div className="loader">

        </div>
        <br />
        <p className='font-weight-bolder text-dark'>
            <span>
                Loading data.....
            </span>
        </p>
    </div>
  )
}
