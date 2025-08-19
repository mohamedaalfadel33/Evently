import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="border-b py-4">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently Logo"
          />
        </Link>
        <SignedIn>
          <nav className=" md:flex-between hidden w-full max-w-xs ">
            <NavItems />
          </nav>
        </SignedIn>

        <div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className=" rounded-full" size="lg">
              <Link href="/sign-in">login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
