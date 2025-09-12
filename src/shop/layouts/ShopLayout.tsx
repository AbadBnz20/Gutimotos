import { CustomHeader } from '@/components/CustomHeader'
import { Outlet } from 'react-router'

const ShopLayout = () => {
  return (
    <div className="min-h-screen bg-background" >
      <CustomHeader/>
        <Outlet/>
    </div>
  )
}

export default ShopLayout