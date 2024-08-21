import React from 'react';
import Image from 'next/image';

const Header1: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/path/to/profile-pic.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full"
          width={32}  // Set width according to the actual image dimensions
          height={32} // Set height according to the actual image dimensions
        />
      </div>
    </header>
  );
};

export default Header1;
