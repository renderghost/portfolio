// src/components/roles/CardRole.tsx

import { Card } from '@/components/Card/Card';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardRoleProps {
  role: {
    title: string;
    company: string;
    subtitle: string;
    date: string;
    coverImage?: string;
    slug: string;
  };
}

export const CardRole: React.FC<CardRoleProps> = ({ role }) => {
  const navigate = useNavigate();

  return (
    <Card
      coverImage={role.coverImage}
      meta={{
        date: role.date,
      }}
      title={role.title}
      description={`${role.company} | ${role.subtitle}`}
      onClick={() => navigate(`/roles/${role.slug}`)}
    />
  );
};
