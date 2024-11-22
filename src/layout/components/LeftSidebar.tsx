import { buttonVariants } from '@/components/ui/button';
import { HomeIcon, Library, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { SignedIn } from '@clerk/clerk-react';

const LeftSidebar = () => {
    return (
        <div className='flex flex-col h-full gap-2'>
            {/* Navigation menu */}

            <div className='p-4 rounded-lg bg-zinc-900'>
                <div className='space-y-2'>
                    <Link
                        to={'/'}
                        className={cn(
                            buttonVariants({
                                variant: 'ghost',
                                className:
                                    'w-full justify-start text-white hover:bg-zinc-800'
                            })
                        )}
                    >
                        <HomeIcon className='mr-2 size-5' />
                        <span className='hidden md:inline'>Home</span>
                    </Link>

                    <SignedIn>
                        <Link
                            to={'/chat'}
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                    className:
                                        'w-full justify-start text-white hover:bg-zinc-800'
                                })
                            )}
                        >
                            <MessageCircle className='mr-2 size-5' />
                            <span className='hidden md:inline'>Messages</span>
                        </Link>
                    </SignedIn>
                </div>
            </div>

            {/* Library section */}
        </div>
    );
};

export default LeftSidebar;
