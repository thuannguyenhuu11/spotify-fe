import { axiosInstance } from '@/lib/axios';
import { useAuth } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

const updateApiToken = (token: string | null) => {
    if (token)
        axiosInstance.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${token}`;
    else delete axiosInstance.defaults.headers.common['Authorization'];
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { getToken, userId } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = await getToken();
                updateApiToken(token);
                setLoading(false);
            } catch (error) {
                updateApiToken(null);
                console.log('Error in auth provider');
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, [getToken]);

    if (loading)
        return (
            <div className='flex items-center justify-center w-full h-screen'>
                <Loader className='size-8 text-emerald-500 animate-spin' />
            </div>
        );

    return <>{children}</>;
};

export default AuthProvider;
