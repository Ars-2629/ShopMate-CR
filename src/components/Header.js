import { NavLink,Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export function Header() {
  const activeClass = 'p-1 px-5 text-blue-600 bg-gray-100 rounded';
  const inactiveClass = 'p-1 px-3 hover:bg-gray-200 hover:text-gray-800 rounded';

  return (
    <div className='border-b-2 shadow-sm font-[Bebas]'>
       <header className='mx-14 my-3 text-sm sm:mx-28 sm:text-base'>
        <div className='flex justify-between'>

        <Link to='/'>
            <div className='flex items-center' >
             
             <img className='w-5 h-5 sm:w-8 sm:h-8' src={Logo} alt="" />
             <span className='ml-1 font-semibold'>ShopMate</span>
            
           </div>
           </Link>
            
            <nav className='flex mt-1'>

                <NavLink to='/' className={({isActive})=>isActive ? activeClass : inactiveClass}>
                <span >Home</span>
                </NavLink>

                <NavLink to='cartlist' className={({isActive})=>isActive ? activeClass : inactiveClass}>
                <span >Cart</span>
                </NavLink>
                
                
            </nav>
            
            <Link to='cartlist'>
            <div className='mt-2'>
                <span>Cart:2</span>
            </div>
            </Link>
           

        </div>
       </header>
    </div>
  )
}
