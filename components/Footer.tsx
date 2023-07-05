import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';
import { SITE_NAME } from '@/site/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
      <hr className='w-64 h-1 mx-auto my-4 border-gray-300 border-0 rounded md:my-10 dark:bg-gray-300'></hr>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
          <p className='text-base text-gray-700'>
            {SITE_NAME} {currentYear} <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map((item) => (
            <div key={item.title} className='footer__link'>
              <h3 className='font-bold'>{item.title}</h3>
              <div className='flex flex-col gap-5'>
                {item.links.map((link) => (
                  <Link key={link.title} href={link.url} className='footer__link-text'>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>
          @{currentYear} {SITE_NAME}. All rights reserved.
        </p>

        <div className='footer__copyrights-link'>
          <Link href='/' className='footer__link-text'>
            Privacy & Policy
          </Link>
          <Link href='/' className='footer__link-text'>
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
