import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import { Loader2Icon } from "lucide-react";
import toast from 'react-hot-toast';

const LoginSuccess = () => {
    // Store user data in component state to avoid selector issues
    const [userData, setUserData] = useState(null);
    const setAuthData = useAuthStore(state => state.setAuthData);
    const navigate = useNavigate();
    
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const data = params.get('data');
        
        if (data) {
            try {
                const authData = JSON.parse(decodeURIComponent(data));
                setAuthData(authData); // This updates both token and user state
                setUserData(authData.user); // Store user data locally
                
                // Clean URL after processing
                window.history.replaceState({}, '', window.location.pathname);
            } catch (error) {
                console.error('Failed to parse auth data:', error);
                toast.error('Login failed. Please try again.');
                navigate('/login', { replace: true });
            }
        } else {
            navigate('/login', { replace: true });
        }
    }, [navigate, setAuthData]);
    
    // Watch for user state changes
    useEffect(() => {
        if (userData) {
            toast.success(`Welcome, ${userData.username}!`, {
                duration: 3000,
                position: 'top-center'
            });
            
            // Small delay to ensure state is updated
            const redirectTimer = setTimeout(() => {
                navigate('/', { replace: true });
            }, 100);
            
            return () => clearTimeout(redirectTimer);
        }
    }, [userData, navigate]);
    
    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen">
            <Loader2Icon className='w-10 h-10 animate-spin' />
            <p className="mt-4 text-lg">Completing login...</p>
        </div>
    );
};

export default LoginSuccess;