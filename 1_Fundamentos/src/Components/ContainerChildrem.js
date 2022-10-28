import React from 'react'

const ContainerChildrem = ({childrem}) => {
    return (
        <div>
            <h5>component childrem</h5>
            <h6>
                <p>
                    "*este componente carrega elementos html como se fosse uma tag"
                    {childrem}
                </p>
            </h6>
        </div>
    )
}

export default ContainerChildrem