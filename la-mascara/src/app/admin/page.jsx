'use client'

import LoginView from '@/components/LoginView';
import React from 'react'

function page() {
    return (
        <div className="h-screen grid place-items-center bg-gradient-to-tr from-mauve to-tekhelet">
            <LoginView/>
        </div>
    );
}

export default page