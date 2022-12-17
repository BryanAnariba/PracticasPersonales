import logoSneakers from '@/assets/images/logo.svg';
import avatar from '@/assets/images/image-avatar.png';
import { IconMenu } from '../icons/IconMenu';
import { IconCart } from '../icons/IconCart';
import { CloseIcon } from '../icons/CloseIcon';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [ openNavClass, setOpenNavClass ] = useState<string>('');
  useEffect(() => {
    setOpenNavClass( 'hidden text-lg font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0' );
  }, []);

  const handleOpenMenu = () => {
    //console.log( 'Clicking & Open Works...' );
    setOpenNavClass( 'absolute text-lg top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0' )
  }

  const handleCloseMenu = () => {
    //console.log( 'Clicking & Close Works...' );
    setOpenNavClass( 'hidden text-lg font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0' );
  }
  // DORIAN DESIGN VER CSS

  return (
    <header className='container flex items-center mx-auto px-4 gap-8 bg-white py-8'>
        <button className='md:hidden' onClick={ handleOpenMenu }>
          <IconMenu />
        </button>
        <img src={ logoSneakers } alt="Logo Sneakers" className='mr-auto md:mr-0 h-5 mb-1'/>
        {/* OJO A ESTO CON EL SISTEMA DE GRILLAS ES ESPECTACULAR MEJOR QUE BOOTSTRAP */}
        <nav className={ openNavClass }>
          <button className='mb-12 md:hidden' onClick={ handleCloseMenu }>
            <CloseIcon />
          </button>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className='flex gap-4'>
          <button>
            <IconCart />
          </button>
          <img src={ avatar } alt="User Profile" className='w-10'/>
        </div>
    </header>
  )

}
