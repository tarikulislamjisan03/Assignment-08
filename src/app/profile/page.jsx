"use client"

import { ProfileModal } from '@/components/ProfileModal';
import { authClient } from '@/lib/authclient';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
     const userdata = authClient.useSession();
      const user = userdata.data?.user;
      console.log(user)
    return (
        <div>
            <Card className='max-w-96 h-52 mx-auto flex flex-col items-center justify-center shadow-lg mt-20 mb-20'> 
                 <Avatar className="w-12 h-12" size='5'>
                                <Avatar.Image 
                                  alt={user?.name || "User"} 
                                  src={user?.image} 
                                  referrerPolicy="no-referrer"  
                                />
                                <Avatar.Fallback>
                                  {user?.name ? user.name[0].toUpperCase() : "U"}
                                </Avatar.Fallback>
                              </Avatar>
                              <h1> {user?.name} </h1>
                               <h1> {user?.email} </h1>
                              <ProfileModal> </ProfileModal>
            </Card>
        </div>
    );
};

export default ProfilePage;