// Lines 1-14
import axios from 'axios';
// FIX: Removed spacing issues from the path and used the correct alias mapping
import { appParams } from '@/lib/app-params'; 

const base44Client = axios.create({
    baseURL: appParams.apiUrl || 'https://api.base44.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default base44Client;

