import { useEffect, useState } from "react"

const useRole = (email) => {
 
    const [isRoleLoading, setIsRoleLoading] = useState(true)
    const [buyerRole, setBuyerRole] = useState(false)
    const [sellerRole, setSellerRole] = useState(false)
    const [adminRole, setAdminRole] = useState(false)



    useEffect( () => {
        if(email){
            fetch(`http://localhost:5000/users/type/${email}`)
            .then(res => res.json())
            .then(data => {

                if(data.userType === 'buyer'){
                    setBuyerRole(true)
                }
                if(data.userType === 'seller'){
                    setSellerRole(true)
                }
                if(data.userType === 'admin'){
                    setAdminRole(true)
                }
                setIsRoleLoading(false)
            })
        }
    }, [email])
    return [buyerRole, sellerRole, adminRole, isRoleLoading]
}

export default useRole;