import { Card, CardContent } from '@/components/ui/card';
import { axiosInstance } from '@/lib/axios';
import { useUser } from '@clerk/clerk-react';
import { Loader } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallbackPage = () => {
    const { isLoaded, user } = useUser();
    const navigate = useNavigate();
    const syncAttempted = useRef(false);

    useEffect(() => {
        const syncUser = async () => {
            if (!isLoaded || !user || syncAttempted.current) return;

            try {
                syncAttempted.current = true;

                await axiosInstance.post('/auth/callback', {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    imageUrl: user.imageUrl
                });
            } catch (error) {
                console.log('Error in auth callback', error);
            } finally {
                navigate('/');
            }
        };

        syncUser();
    }, [isLoaded, user, navigate]);

    return (
        <div className='flex items-center justify-center w-full h-screen bg-black'>
            <Card>
                <CardContent className='flex flex-col items-center gap-4 pt-6'>
                    <Loader className='size-6 text-emerald-500 animate-spin' />
                    <h3 className='text-xl font-bold text-zinc-400'>
                        Logging you in
                    </h3>
                    <p className='text-sm text-zinc-400'>Redirecting...</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthCallbackPage;
