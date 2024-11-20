import { SignedIn, SignedOut, SignOutButton } from '@clerk/clerk-react';
import { LayoutDashboardIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SignInOAuthButtons from '../SignInOAuthButtons/SignInOAuthButtons';

const TopBar = () => {
    const isAdmin = false;

    return (
        <div className='sticky top-0 z-10 flex items-center justify-between p-4 bg-zinc-900/75 backdrop-blur-md'>
            <div className='flex items-center gap-2'>Spotify</div>

            <div className='flex items-center gap-4'>
                {isAdmin && (
                    <Link to={'/admin'}>
                        <LayoutDashboardIcon className='mr-2 size-4' />
                        Admin Dashboard
                    </Link>
                )}

                <SignedIn>
                    <SignOutButton />
                </SignedIn>

                <SignedOut>
                    <SignInOAuthButtons />
                </SignedOut>
            </div>
        </div>
    );
};

export default TopBar;
